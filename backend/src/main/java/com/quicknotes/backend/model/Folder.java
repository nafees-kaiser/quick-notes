package com.quicknotes.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(
                name = "appUserAndNameConstraint",
                columnNames = {"name", "appUser"}
        )
})
public class Folder extends BaseEntity<Long> {
    //    @Column
    private String name;
    @ManyToOne
    @JoinColumn
    private AppUser appUser;
}
