package com.quicknotes.backend.controller;

import com.quicknotes.backend.model.Folder;
import com.quicknotes.backend.service.FolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
public class FolderController {
    @Autowired
    FolderService folderService;

    @PostMapping("/add-folder")
    public ResponseEntity<?> addFolder(@RequestHeader("email") String email, @RequestBody Folder folder) {
        try {
            Folder newFolder = folderService.addFolder(email, folder);
            return new ResponseEntity<>(newFolder, HttpStatus.CREATED);
        }
        catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
