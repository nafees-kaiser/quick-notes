package com.quicknotes.backend.service.impl;

import com.quicknotes.backend.model.AppUser;
import com.quicknotes.backend.repository.AppUserRepository;
import com.quicknotes.backend.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserServiceImpl implements AppUserService {
    @Autowired
    private AppUserRepository appUserRepository;
    @Override
    public AppUser registerUser(AppUser appUser) {
        return appUserRepository.save(appUser);
    }

    @Override
    public AppUser findUserByEmail(String email) {
        return appUserRepository.findByEmail(email);
    }

}
