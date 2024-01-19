package com.example.servidor.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Especialidad {

    @Id
    @Column (name = "idespecialidad")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer idespecialiad;

    @Column (name = "descripcion")
    private String descripcion;

    // Lombok generará los getters y setters

    @PrePersist
    @PreUpdate
    private void preGuardarActualizar() {
        if (descripcion != null) {
            descripcion = descripcion.toUpperCase();
        }
    }
}
