package com.odelan.sbchat.security.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AuthUserDto {
    @NotBlank
    private String username;

    @NotBlank
    private String password;
}
