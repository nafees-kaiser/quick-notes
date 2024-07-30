package com.quicknotes.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dateCreated;
    @JsonFormat(pattern = "hh:mm a")
    private LocalTime timeCreated;
    private String backgroundColor;
    private String textColor;
    @ManyToOne
    @JoinColumn
    private Folder folder;
}
