package com.quicknotes.backend.service.impl;

import com.quicknotes.backend.exception.DuplicateEmailException;
import com.quicknotes.backend.exception.UserNotFoundException;
import com.quicknotes.backend.model.AppUser;
import com.quicknotes.backend.repository.AppUserRepository;
import com.quicknotes.backend.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AppUserServiceImpl implements AppUserService {
    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public AppUser registerUser(AppUser appUser) {
        appUser.setRole("ROLE_USER");
        String password = appUser.getPassword();
        appUser.setPassword(passwordEncoder.encode(password));
        try {
            appUser = appUserRepository.save(appUser);
            return appUser;
        } catch (Exception e) {
            throw new DuplicateEmailException("Email already exists.");
        }
    }

    @Override
    public AppUser findUserByEmail(String email) {
        AppUser appUser = appUserRepository.findByEmail(email);
        if (appUser == null) {
            throw new UserNotFoundException("User not found.");
        }
        return appUser;
    }

    @Override
    public AppUser loginUser(AppUser appUser) {
        String email = appUser.getEmail();
        String password = appUser.getPassword();
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);
        authenticationManager.authenticate(authenticationToken);
        return findUserByEmail(email);
    }

    @Override
    public AppUser changePassword(AppUser appUser) {
        AppUser toUpdate = findUserByEmail(appUser.getEmail());
        String password = appUser.getPassword();
        toUpdate.setPassword(passwordEncoder.encode(password));
        return appUserRepository.save(toUpdate);
    }
}
