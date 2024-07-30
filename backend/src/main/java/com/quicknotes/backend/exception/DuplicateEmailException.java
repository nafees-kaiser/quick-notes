package com.quicknotes.backend.exception;

public class DuplicateEmailException extends RuntimeException {
    public DuplicateEmailException() {}
    public DuplicateEmailException(String message) {
        super(message);
    }
}
