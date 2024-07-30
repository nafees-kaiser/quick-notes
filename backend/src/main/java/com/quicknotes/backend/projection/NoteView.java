package com.quicknotes.backend.projection;

import java.time.LocalDate;
import java.time.LocalTime;

public interface NoteView {
    Long getId();
    String getTitle();
    String getContent();
    LocalDate getDateCreated();
    LocalTime getTimeCreated();
    String getBackgroundColor();
    String getTextColor();
    FolderView getFolder();
}
