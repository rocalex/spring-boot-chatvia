package com.odelan.sbchat.security.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Getter
@Setter
@Document
public class User implements Serializable {
    @Id
    public String id;

    @Indexed(unique = true)
    @NotNull
    @Size(min = 6, max = 30)
    private String username;

    @NotNull
    @Size(min = 8)
    private String password;

    private String firstName;

    private String lastName;

    private Boolean enabled = true;
}
