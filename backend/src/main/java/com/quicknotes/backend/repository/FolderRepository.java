package com.quicknotes.backend.repository;

import com.quicknotes.backend.model.AppUser;
import com.quicknotes.backend.model.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FolderRepository extends JpaRepository<Folder, Long> {
    Folder findByNameAndAppUser(String folderName, AppUser appUser);
}
