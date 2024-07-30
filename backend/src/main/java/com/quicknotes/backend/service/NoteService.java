package com.quicknotes.backend.service;

import com.quicknotes.backend.model.Note;

public interface NoteService {
    Note addNote(String email, Note note);
}
