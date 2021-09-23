package com.odelan.sbchat.security.validator;

import com.odelan.sbchat.security.entity.User;
import com.odelan.sbchat.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.Optional;

@Component
public class UserValidator implements Validator {
    @Autowired
    UserRepository userRepository;

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        User user = (User) target;
        String username = user.getUsername();
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if (optionalUser.isPresent()) {
            errors.rejectValue("username", "", "Duplicated username");
        }
    }
}
