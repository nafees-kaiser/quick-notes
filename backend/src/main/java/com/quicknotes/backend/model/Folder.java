package com.quicknotes.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Table(uniqueConstraints = {
        @UniqueConstraint(
                name = "appUserAndNameConstraint",
                columnNames = {"name", "app_user_id"}
        )
})
@Entity
public class Folder extends BaseEntity<Long> {
    @Column
    private String name;
    @ManyToOne
    @JoinColumn(name = "app_user_id")
    private AppUser appUser;
}
