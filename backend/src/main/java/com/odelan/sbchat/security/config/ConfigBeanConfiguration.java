package com.odelan.sbchat.security.config;

import com.odelan.sbchat.security.config.bean.SecurityProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConfigBeanConfiguration {

    @Bean
    @ConfigurationProperties(prefix = "jwt")
    public SecurityProperties securityProperties() {
        return new SecurityProperties();
    }
}
