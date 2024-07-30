package com.quicknotes.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Note extends BaseEntity<Long>{
    private String title;
    private String content;
    private LocalDate dateCreated;
    private LocalTime timeCreated;
    private String backgroundColor;
    private String textColor;
    @ManyToOne
    @JoinColumn
    private Folder folder;
}
