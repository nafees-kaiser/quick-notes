package com.quicknotes.backend.service.impl;

import com.quicknotes.backend.exception.FolderNotFoundException;
import com.quicknotes.backend.exception.NoteNotFoundException;
import com.quicknotes.backend.model.Folder;
import com.quicknotes.backend.model.Note;
import com.quicknotes.backend.model.NoteFilterReq;
import com.quicknotes.backend.projection.NoteView;
import com.quicknotes.backend.repository.CustomNoteRepository;
import com.quicknotes.backend.repository.NoteRepository;
import com.quicknotes.backend.service.FolderService;
import com.quicknotes.backend.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class NoteServiceImpl implements NoteService {
    @Autowired
    private NoteRepository noteRepository;
    @Autowired
    private FolderService folderService;
//    @Autowired
//    private CustomNoteRepository customNoteRepository;

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

    @Override
    public void deleteNote(Long id) {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new NoteNotFoundException("Note does not exist"));
        noteRepository.delete(note);
    }

    @Override
    public Note findNoteById(Long id) {
        return noteRepository.findById(id)
                .orElseThrow(() -> new NoteNotFoundException("Note does not exist"));
    }

    @Override
    public Note updateNote(Long id, String email, Note note) {
        Note toUpdate = findNoteById(id);
        if(note.getTitle() != null) {
            toUpdate.setTitle(note.getTitle());
        }
        if(note.getContent() != null) {
            toUpdate.setContent(note.getContent());
        }
        if(note.getBackgroundColor() != null){
            toUpdate.setBackgroundColor(note.getBackgroundColor());
        }
        if(note.getTextColor() != null){
            toUpdate.setBackgroundColor(note.getTextColor());
        }
        if(note.getFolder() != null){
            Folder folder = folderService.findFolderByNameAndAppUser(email, note.getFolder().getName());
            if(folder == null) {
                folder = folderService.addFolder(email, note.getFolder());
            }
            toUpdate.setFolder(folder);
        }
//
        toUpdate.setDateCreated(LocalDate.now());
        toUpdate.setTimeCreated(LocalTime.now());
        return noteRepository.save(toUpdate);
    }

    @Override
    public List<NoteView> getAllNotes(String email, NoteFilterReq req) {
        return noteRepository.noteFilter(email, req);
    }
}


