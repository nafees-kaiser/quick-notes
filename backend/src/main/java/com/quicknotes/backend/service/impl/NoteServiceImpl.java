package com.quicknotes.backend.service.impl;

import com.quicknotes.backend.exception.FolderNotFoundException;
import com.quicknotes.backend.model.Folder;
import com.quicknotes.backend.model.Note;
import com.quicknotes.backend.repository.NoteRepository;
import com.quicknotes.backend.service.FolderService;
import com.quicknotes.backend.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;

@Service
public class NoteServiceImpl implements NoteService {
    @Autowired
    private NoteRepository noteRepository;
    @Autowired
    private FolderService folderService;

    @Override
    public Note addNote(String email, Note note) {
        try{
            String folderName = note.getFolder().getName();
            Folder folder = folderService.findFolderByNameAndAppUser(email, folderName);
            if(folder == null) {
                folder = folderService.addFolder(email, note.getFolder());
            }
            note.setFolder(folder);
            note.setDateCreated(LocalDate.now());
            note.setTimeCreated(LocalTime.now());
            return noteRepository.save(note);
        }catch (Exception e){
            throw new FolderNotFoundException("Folder does not exist");
        }
    }
}
