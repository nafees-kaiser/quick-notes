package com.quicknotes.backend.exception;

public class NoteNotFoundException extends RuntimeException {
    public NoteNotFoundException() {}
    public NoteNotFoundException(String message) {
        super(message);
    }
}
