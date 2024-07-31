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
    private String iconColor;
    private String bgColor;
    @ManyToOne
    @JoinColumn(name = "app_user_id")
    private AppUser appUser;
}
