package com.odelan.sbchat.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;

import java.util.List;

@Getter
public class BadRequestException extends RuntimeException {

    private List<FieldError> errors;
    private Integer status = HttpStatus.BAD_REQUEST.value();

    public BadRequestException(String msg) {
        super(msg);
    }

    public BadRequestException(HttpStatus status, String msg) {
        super(msg);
        this.status = status.value();
    }

    public BadRequestException(HttpStatus status, String msg, List<FieldError> errors) {
        super(msg);
        this.status = status.value();
        this.errors = errors;
    }
}
