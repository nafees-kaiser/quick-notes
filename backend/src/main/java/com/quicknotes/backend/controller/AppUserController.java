package com.quicknotes.backend.controller;

import com.quicknotes.backend.model.AppUser;
import com.quicknotes.backend.projection.AppUserView;
import com.quicknotes.backend.service.AppUserService;
import com.quicknotes.backend.utils.Convertion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class AppUserController {
    @Autowired
    private AppUserService appUserService;

    @PostMapping("/registration")
    public ResponseEntity<?> registerUser(@RequestBody AppUser appUser) {
        try {
            AppUser newAppUser = appUserService.registerUser(appUser);
            AppUserView appUserView = Convertion.covertToView(newAppUser, AppUserView.class);
            return new ResponseEntity<>(appUserView, HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody AppUser appUser) {
        try {
            AppUser newAppUser = appUserService.loginUser(appUser);
            AppUserView appUserView = Convertion.covertToView(newAppUser, AppUserView.class);
            return new ResponseEntity<>(appUserView, HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/user/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody AppUser appUser) {
        try {
            AppUser newAppUser = appUserService.changePassword(appUser);
            return new ResponseEntity<>("Password changed successfully", HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
