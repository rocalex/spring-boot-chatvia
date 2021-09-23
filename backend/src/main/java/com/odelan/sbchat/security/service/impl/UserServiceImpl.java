package com.odelan.sbchat.security.service.impl;

import com.odelan.sbchat.security.entity.User;
import com.odelan.sbchat.security.repository.UserRepository;
import com.odelan.sbchat.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public Optional<User> findByName(String userName) {
        return userRepository.findByUsername(userName);
    }
}
