package com.quicknotes.backend.projection;

public interface FolderView {
    Long getId();
    String getName();
    AppUserView getAppUser();
}
