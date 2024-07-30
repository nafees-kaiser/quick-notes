package com.quicknotes.backend.controller;

import com.quicknotes.backend.model.Note;
import com.quicknotes.backend.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/user")
public class NoteController {
    @Autowired
    private NoteService noteService;

    @PostMapping("/add-note")
    public ResponseEntity<?> addNote(@RequestHeader("email") String email, @RequestBody Note note) {
        try{
            Note newNote = noteService.addNote(email, note);
            return new ResponseEntity<>(newNote, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
