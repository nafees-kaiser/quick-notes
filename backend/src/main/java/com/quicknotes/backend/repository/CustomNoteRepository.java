package com.quicknotes.backend.repository;

import com.quicknotes.backend.model.NoteFilterReq;
import com.quicknotes.backend.projection.NoteView;

import java.util.List;

public interface CustomNoteRepository {
    List<NoteView> noteFilter(String email, NoteFilterReq req);
}
