package com.odelan.sbchat.security.security;

import cn.hutool.core.date.DateField;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.util.IdUtil;
import com.odelan.sbchat.security.config.bean.SecurityProperties;
import com.odelan.sbchat.utils.RedisUtils;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.security.Key;
import java.util.ArrayList;
import java.util.Date;
import java.util.concurrent.TimeUnit;

@RequiredArgsConstructor
@Component
public class TokenProvider implements InitializingBean {

    private final SecurityProperties properties;
    private final RedisUtils redisUtils;
    public static final String AUTHORITIES_KEY = "user";

    private JwtParser jwtParser;
    private JwtBuilder jwtBuilder;


    @Override
    public void afterPropertiesSet() throws Exception {
        byte[] keyBytes = Decoders.BASE64.decode(properties.getBase64Secret());
        Key key = Keys.hmacShaKeyFor(keyBytes);
        jwtParser = Jwts.parserBuilder()
                .setSigningKey(key)
                .build();
        jwtBuilder = Jwts.builder()
                .signWith(key, SignatureAlgorithm.HS512);
    }

    public String createToken(Authentication authentication) {
        return jwtBuilder
                .setId(IdUtil.simpleUUID())
                .claim(AUTHORITIES_KEY, authentication.getName())
                .setSubject(authentication.getName())
                .compact();
    }

    Authentication getAuthentication(String token) {
        Claims claims = getClaims(token);
        User principal = new User(claims.getSubject(), "******", new ArrayList<>());
        return new UsernamePasswordAuthenticationToken(principal, token, new ArrayList<>());
    }

    public Claims getClaims(String token) {
        return jwtParser
                .parseClaimsJws(token)
                .getBody();
    }

    public String getToken(HttpServletRequest request) {
        final String requestHeader = request.getHeader(properties.getHeader());
        if (requestHeader != null && requestHeader.startsWith(properties.getTokenStartWith())) {
            return requestHeader.substring(7);
        }
        return null;
    }

    public void checkRenewal(String token) {
        // 判断是否续期token,计算token的过期时间
        long time = redisUtils.getExpire(properties.getOnlineKey() + token) * 1000;
        Date expireDate = DateUtil.offset(new Date(), DateField.MILLISECOND, (int) time);
        // 判断当前时间与过期时间的时间差
        long differ = expireDate.getTime() - System.currentTimeMillis();
        // 如果在续期检查的范围内，则续期
        if (differ <= properties.getDetect()) {
            long renew = time + properties.getRenew();
            redisUtils.expire(properties.getOnlineKey() + token, renew, TimeUnit.MILLISECONDS);
        }
    }
}
