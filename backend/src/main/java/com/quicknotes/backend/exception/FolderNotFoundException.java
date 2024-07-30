package com.quicknotes.backend.exception;

public class FolderNotFoundException extends RuntimeException {
    public FolderNotFoundException() {}
    public FolderNotFoundException(String message) {
        super(message);
    }
}
