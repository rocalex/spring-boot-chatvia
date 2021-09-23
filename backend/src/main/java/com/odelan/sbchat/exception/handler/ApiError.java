package com.odelan.sbchat.exception.handler;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.validation.FieldError;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@Setter
public class ApiError {
    private Integer status = 400;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime timestamp;
    private String message;
    private List<Map<String, String>> errors;

    private ApiError() {
        timestamp = LocalDateTime.now();
    }

    public static ApiError error(String message){
        ApiError apiError = new ApiError();
        apiError.setMessage(message);
        return apiError;
    }

    public static ApiError error(Integer status, String message){
        ApiError apiError = new ApiError();
        apiError.setStatus(status);
        apiError.setMessage(message);
        return apiError;
    }

    public static ApiError error(Integer status, String message, List<FieldError> errors){
        ApiError apiError = new ApiError();
        apiError.setStatus(status);
        apiError.setMessage(message);
        List<Map<String, String>> readableErrors = new ArrayList<>();
        for (FieldError error : errors) {
            Map<String, String> readableError = new HashMap<>();
            readableError.put(error.getField(), error.getDefaultMessage());
            readableErrors.add(readableError);
        }
        apiError.setErrors(readableErrors);
        return apiError;
    }
}
