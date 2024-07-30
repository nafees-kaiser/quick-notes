package com.quicknotes.backend.controller;

import com.quicknotes.backend.model.Note;
import com.quicknotes.backend.model.NoteFilterReq;
import com.quicknotes.backend.projection.NoteView;
import com.quicknotes.backend.service.NoteService;
import com.quicknotes.backend.utils.Convertion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class NoteController {
    @Autowired
    private NoteService noteService;

    @PostMapping("/add-note")
    public ResponseEntity<?> addNote(@RequestHeader("email") String email, @RequestBody Note note) {
        try{
            Note newNote = noteService.addNote(email, note);
            NoteView noteView = Convertion.covertToView(newNote, NoteView.class);
            return new ResponseEntity<>(noteView, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete-note/{id}")
    public ResponseEntity<?> deleteNote(@RequestHeader("email") String email, @PathVariable Long id) {
        try{
            noteService.deleteNote(id);
            return new ResponseEntity<>("Note deleted successfully",HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/fetch-note/{id}")
    public ResponseEntity<?> fetchNote(@RequestHeader("email") String email, @PathVariable Long id) {
        try{
            Note note = noteService.findNoteById(id);
            NoteView noteView = Convertion.covertToView(note, NoteView.class);
            return new ResponseEntity<>(noteView, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update-note/{id}")
    public ResponseEntity<?> updateNote(@PathVariable Long id, @RequestHeader("email") String email, @RequestBody Note note) {
        try{
            Note updatedNote = noteService.updateNote(id, email, note);
            NoteView noteView = Convertion.covertToView(updatedNote, NoteView.class);
            return new ResponseEntity<>(noteView, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/all-notes")
    public ResponseEntity<?> getAllNotes(@RequestHeader("email") String email, @RequestBody NoteFilterReq req) {
        try{
            List<NoteView> noteViews = noteService.getAllNotes(email, req);
            return new ResponseEntity<>(noteViews, HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }


}
