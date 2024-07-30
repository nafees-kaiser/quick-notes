package com.quicknotes.backend.service;

import com.quicknotes.backend.model.Folder;
import com.quicknotes.backend.model.Note;

public interface FolderService {
    Folder addFolder(String email, Folder folder);

    Folder findFolderByNameAndAppUser(String email, String folderName);
}
