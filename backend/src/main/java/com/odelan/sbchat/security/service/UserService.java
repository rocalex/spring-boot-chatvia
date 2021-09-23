package com.odelan.sbchat.security.service;

import com.odelan.sbchat.security.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findByName(String userName);
}
