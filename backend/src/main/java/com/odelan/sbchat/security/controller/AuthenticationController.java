package com.odelan.sbchat.security.controller;

import com.odelan.sbchat.security.dto.AuthUserDto;
import com.odelan.sbchat.security.entity.User;
import com.odelan.sbchat.exception.BadRequestException;
import com.odelan.sbchat.security.repository.UserRepository;
import com.odelan.sbchat.security.config.bean.SecurityProperties;
import com.odelan.sbchat.security.dto.JwtUserDto;
import com.odelan.sbchat.security.security.TokenProvider;
import com.odelan.sbchat.security.service.OnlineUserService;
import com.odelan.sbchat.security.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/auth")
public class AuthenticationController {

    @Autowired
    private SecurityProperties properties;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private OnlineUserService onlineUserService;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private AuthenticationManagerBuilder authenticationManagerBuilder;

    @Autowired
    private TokenProvider tokenProvider;

    public AuthenticationController() {
    }

    @PostMapping("/register")
    public User register(@RequestBody @Validated User user, BindingResult bindingResult) {
        userValidator.validate(user, bindingResult);
        if (bindingResult.hasErrors()) {
            throw new BadRequestException(HttpStatus.BAD_REQUEST, null, bindingResult.getFieldErrors());
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody @Validated AuthUserDto authUser, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new BadRequestException(HttpStatus.BAD_REQUEST, null, bindingResult.getFieldErrors());
        }

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(authUser.getUsername(), authUser.getPassword());
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.createToken(authentication);

        JwtUserDto jwtUserDto = (JwtUserDto) authentication.getPrincipal();

        onlineUserService.save(jwtUserDto, token);

        Map<String, Object> authInfo = new HashMap<>(2) {{
            put("token", properties.getTokenStartWith() + token);
            put("user", jwtUserDto);
        }};
        return ResponseEntity.ok(authInfo);
    }
}
