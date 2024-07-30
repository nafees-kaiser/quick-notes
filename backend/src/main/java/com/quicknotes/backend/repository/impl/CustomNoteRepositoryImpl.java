package com.quicknotes.backend.repository.impl;

import com.quicknotes.backend.model.Note;
import com.quicknotes.backend.model.NoteFilterReq;
import com.quicknotes.backend.projection.NoteView;
import com.quicknotes.backend.repository.CustomNoteRepository;
import com.quicknotes.backend.utils.Convertion;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.util.List;

public class CustomNoteRepositoryImpl implements CustomNoteRepository {
    @PersistenceContext
    private EntityManager em;

    @Override
    public List<NoteView> noteFilter(String email, NoteFilterReq req) {
        StringBuilder sql = new StringBuilder();
        if(req.folderName() != null && !req.folderName().isEmpty()){
            sql.append(" AND f.name = :folder_name ");
        }
        if (req.date() != null && !req.date().isEmpty()) {
            switch (req.date()) {
                case "today":
                    sql.append(" AND n.dateCreated = CURRENT_DATE");
                    break;
                case "this week":
                    sql.append(" AND n.dateCreated >= :start_week AND n.dateCreated < :end_week");
                    break;
                case "this month":
                    sql.append(" AND n.dateCreated >= :start_month AND n.dateCreated < :end_month");
                    break;
                default:
                    sql.append(" AND n.dateCreated = TO_DATE(:date, 'dd/MM/yyyy')");
            }

        }
        if(req.search() != null && !req.search().isEmpty()) {
            sql.append(" AND (lower(n.title) LIKE :search OR lower(n.content) LIKE :search OR lower(f.name) LIKE :search)");
        }

        sql.append(" ORDER BY n.dateCreated DESC, n.timeCreated DESC, n.title ASC");

        TypedQuery<Note> query = em.createQuery("SELECT n FROM Note n INNER JOIN Folder f on f.id = n.folder.id INNER JOIN AppUser a on a.id = f.appUser.id WHERE a.email = :email" + sql.toString(), Note.class);
        query.setParameter("email", email);
        if(req.folderName() != null && !req.folderName().isEmpty()){
            query.setParameter("folder_name", req.folderName());
        }
        if(req.date() != null && !req.date().isEmpty()){
            switch (req.date()) {
                case "today":
                    break;
                case "this week":
                    LocalDate date = LocalDate.now();
                    LocalDate startWeek = date.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
                    LocalDate endWeek = startWeek.plusWeeks(1);
                    query.setParameter("start_week", startWeek);
                    query.setParameter("end_week", endWeek);
                    break;
                case "this month":
                    LocalDate date1 = LocalDate.now();
                    LocalDate startMonth = date1.with(TemporalAdjusters.firstDayOfMonth());
                    LocalDate endMonth = startMonth.plusMonths(1);
                    query.setParameter("start_month", startMonth);
                    query.setParameter("end_month", endMonth);
                    break;
                default:
                    query.setParameter("date", req.date());
            }
        }
        if(req.search() != null && !req.search().isEmpty()) {
            query.setParameter("search", "%" + req.search().trim().toLowerCase() + "%");
        }
        List<Note> notes = query.getResultList();
        return notes.stream()
                .map(note -> Convertion.covertToView(note, NoteView.class))
                .toList();
    }
}

