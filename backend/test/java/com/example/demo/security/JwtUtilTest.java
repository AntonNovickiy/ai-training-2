package com.example.demo.security;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class JwtUtilTest {
    private final JwtUtil jwtUtil = new JwtUtil();

    @Test
    void generateAndValidateToken() {
        String email = "test@example.com";
        String token = jwtUtil.generateToken(email);
        assertTrue(jwtUtil.validateToken(token));
        assertEquals(email, jwtUtil.getEmailFromToken(token));
    }

    @Test
    void invalidToken_returnsFalse() {
        assertFalse(jwtUtil.validateToken("invalid.token.value"));
    }
}
