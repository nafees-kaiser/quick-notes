package com.quicknotes.backend.exception;

public class DuplicateFolderNameException extends RuntimeException {
    public DuplicateFolderNameException() {}
    public DuplicateFolderNameException(String message) {
        super(message);
    }
}
