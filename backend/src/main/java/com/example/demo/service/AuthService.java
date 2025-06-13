package com.example.demo.service;

import com.example.demo.model.Authentication;
import com.example.demo.repository.AuthenticationRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {
    private final AuthenticationRepository authRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthService(AuthenticationRepository authRepository) {
        this.authRepository = authRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public Authentication register(String name, String email, String password) {
        String hash = passwordEncoder.encode(password);
        Authentication auth = new Authentication();
        auth.setName(name);
        auth.setEmail(email);
        auth.setPasswordHash(hash);
        return authRepository.save(auth);
    }

    public Optional<Authentication> authenticate(String email, String password) {
        Optional<Authentication> userOpt = authRepository.findByEmail(email);
        if (userOpt.isPresent() && passwordEncoder.matches(password, userOpt.get().getPasswordHash())) {
            return userOpt;
        }
        return Optional.empty();
    }
}
