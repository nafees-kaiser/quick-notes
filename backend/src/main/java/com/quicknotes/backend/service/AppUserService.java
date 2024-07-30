package com.quicknotes.backend.service;

import com.quicknotes.backend.model.AppUser;

public interface AppUserService {
    AppUser registerUser(AppUser appUser);

    AppUser findUserByEmail(String email);
}
