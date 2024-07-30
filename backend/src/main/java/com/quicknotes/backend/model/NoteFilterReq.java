package com.quicknotes.backend.model;

public record NoteFilterReq(
    String date,
    String search,
    String folderName
) {
}
