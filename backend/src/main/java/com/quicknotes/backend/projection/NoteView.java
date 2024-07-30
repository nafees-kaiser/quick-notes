package com.quicknotes.backend.projection;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;
import java.time.LocalTime;

public interface NoteView {
    Long getId();
    String getTitle();
    String getContent();
    @JsonFormat(pattern = "dd/MM/yyyy")
    LocalDate getDateCreated();
    @JsonFormat(pattern = "hh:mm a")
    LocalTime getTimeCreated();
    String getBackgroundColor();
    String getTextColor();
    FolderView getFolder();
}
