package com.quicknotes.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class AppUser extends BaseEntity<Long>{
    private String fullName;
    @Column(unique = true)
    private String email;
    private String password;
}
