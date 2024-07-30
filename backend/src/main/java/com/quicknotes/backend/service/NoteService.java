package com.quicknotes.backend.service;

import com.quicknotes.backend.model.Note;
import com.quicknotes.backend.model.NoteFilterReq;
import com.quicknotes.backend.projection.NoteView;

import java.util.List;

public interface NoteService {
    Note addNote(String email, Note note);

    void deleteNote(Long id);

    Note findNoteById(Long id);

    Note updateNote(Long id, String email, Note note);

    List<NoteView> getAllNotes(String email, NoteFilterReq req);
}
