package com.quicknotes.backend.service;

import com.quicknotes.backend.model.Folder;
import com.quicknotes.backend.model.Note;
import com.quicknotes.backend.projection.FolderView;

import java.util.List;

public interface FolderService {
    Folder addFolder(String email, Folder folder);

    Folder findFolderByNameAndAppUser(String email, String folderName);

    List<FolderView> fetchAllFolders(String email);

    Folder updateName(Long id, String email, Folder folder);

    void deleteFolder(Long id, String email);
}
