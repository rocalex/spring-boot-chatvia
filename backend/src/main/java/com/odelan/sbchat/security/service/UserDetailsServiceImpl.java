package com.odelan.sbchat.security.service;

import com.odelan.sbchat.security.entity.User;
import com.odelan.sbchat.exception.BadRequestException;
import com.odelan.sbchat.security.repository.UserRepository;
import com.odelan.sbchat.security.dto.JwtUserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalUser = userService.findByName(username);
        if (optionalUser.isEmpty())
            throw new UsernameNotFoundException("");
        User user = optionalUser.get();
        if (!user.getEnabled()) {
            throw new BadRequestException("账号未激活！");
        }
        List<GrantedAuthority> authorities = new ArrayList<>();
        return new JwtUserDto(
                user,
                null,
                authorities
        );
    }
}
