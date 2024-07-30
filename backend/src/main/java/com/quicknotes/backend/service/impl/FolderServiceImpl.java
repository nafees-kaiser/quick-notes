package com.quicknotes.backend.service.impl;

import com.quicknotes.backend.exception.DuplicateFolderNameException;
import com.quicknotes.backend.model.AppUser;
import com.quicknotes.backend.model.Folder;
import com.quicknotes.backend.repository.FolderRepository;
import com.quicknotes.backend.service.AppUserService;
import com.quicknotes.backend.service.FolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FolderServiceImpl implements FolderService {
    @Autowired
    FolderRepository folderRepository;
    @Autowired
    AppUserService appUserService;

    @Override
    public Folder addFolder(String email, Folder folder) {
        try{
            AppUser appUser = appUserService.findUserByEmail(email);
            folder.setAppUser(appUser);
            return folderRepository.save(folder);
        } catch (Exception e){
            throw new DuplicateFolderNameException("Folder name cannot be duplicated");
        }
    }

    @Override
    public Folder findFolderByNameAndAppUser(String email, String folderName) {
        AppUser appUser = appUserService.findUserByEmail(email);
        return folderRepository.findByNameAndAppUser(folderName, appUser);
    }


}
