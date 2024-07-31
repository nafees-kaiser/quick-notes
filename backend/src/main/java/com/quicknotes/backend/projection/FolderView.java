package com.quicknotes.backend.projection;

public interface FolderView {
    Long getId();
    String getName();
    String getIconColor();
    String getBgColor();
    AppUserView getAppUser();
}
