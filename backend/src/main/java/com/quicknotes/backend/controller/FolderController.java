package com.quicknotes.backend.controller;

import com.quicknotes.backend.model.Folder;
import com.quicknotes.backend.projection.FolderView;
import com.quicknotes.backend.service.FolderService;
import com.quicknotes.backend.utils.Convertion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/user")
public class FolderController {
    @Autowired
    FolderService folderService;

    @PostMapping("/add-folder")
    public ResponseEntity<?> addFolder(@RequestHeader("email") String email, @RequestBody Folder folder) {
        try {
            Folder newFolder = folderService.addFolder(email, folder);
            FolderView folderView = Convertion.covertToView(newFolder, FolderView.class);
            return new ResponseEntity<>(folderView, HttpStatus.CREATED);
        }
        catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/all-folders")
    public ResponseEntity<?> allFolders(@RequestHeader("email") String email) {
        try {
            List<FolderView> folderViewList = folderService.fetchAllFolders(email);
            return new ResponseEntity<>(folderViewList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update-name/{id}")
    public ResponseEntity<?> updateName(@PathVariable Long id, @RequestHeader("email") String email, @RequestBody Folder folder) {
        try {
            Folder newFolder = folderService.updateName(id, email, folder);
            FolderView folderView = Convertion.covertToView(newFolder, FolderView.class);
            return new ResponseEntity<>(folderView, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete-folder/{id}")
    public ResponseEntity<?> deleteFolder(@PathVariable Long id, @RequestHeader("email") String email) {
        try {
            folderService.deleteFolder(id, email);
            return new ResponseEntity<>("Folder has been deleted",HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

}
