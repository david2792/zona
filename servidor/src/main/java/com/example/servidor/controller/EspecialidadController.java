package com.example.servidor.controller;

import com.example.servidor.model.Especialidad;
import com.example.servidor.repository.EspecialiadRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/referencial")
@CrossOrigin(origins = "*")
public class EspecialidadController {
    @Autowired
    private EspecialiadRepositorio especialidadRepository;

    @GetMapping("/especialidad")
    public List<Especialidad> listarTodos() {
        return especialidadRepository.findAll();
    }

    @GetMapping("/{id}")
    public Especialidad obtenerPorId(@PathVariable Integer id) {
        return especialidadRepository.findById(id).orElse(null);
    }

    @PostMapping("/especialidad")
    public Especialidad guardar(@RequestBody Especialidad especialidad) {
        return especialidadRepository.save(especialidad);
    }

    @PutMapping("/{id}")
    public Especialidad actualizar(@PathVariable Integer id, @RequestBody Especialidad especialidadDetalles) {
        Especialidad especialidad = especialidadRepository.findById(id).orElse(null);
        if (especialidad != null) {
            especialidad.setDescripcion(especialidadDetalles.getDescripcion());
            return especialidadRepository.save(especialidad);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        especialidadRepository.deleteById(id);
    }
}
