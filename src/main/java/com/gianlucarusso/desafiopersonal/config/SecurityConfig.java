package com.gianlucarusso.desafiopersonal.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/**").permitAll() // Permitir acceso público a todas las rutas (ajusta según tus necesidades)
                        .requestMatchers("/admin").hasRole("ADMIN") // Acceso solo para administradores en /admin
                        .anyRequest().authenticated() // Requiere autenticación para el resto de las rutas
                )
                .formLogin(Customizer.withDefaults()) // Configuración de login por defecto
                .logout(logout -> logout
                        .logoutUrl("/logout") // Ruta para cerrar sesión
                        .logoutSuccessUrl("/") // Redirige al login después de cerrar sesión con un mensaje de éxito
                        .invalidateHttpSession(true) // Invalida la sesión
                        .deleteCookies("JSESSIONID") // Elimina la cookie de sesión
                )
                .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder()
    {
        return new BCryptPasswordEncoder();
    }
}
