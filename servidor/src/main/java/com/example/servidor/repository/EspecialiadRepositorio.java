package com.example.servidor.repository;

import com.example.servidor.model.Especialidad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EspecialiadRepositorio extends JpaRepository<Especialidad,Integer> {
}
