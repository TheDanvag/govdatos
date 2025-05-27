package com.govdatos.controller;

import com.govdatos.model.Politica;
import com.govdatos.service.PoliticaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/politicas")
@CrossOrigin(origins = "*")
public class PoliticaController {

    private final PoliticaService service;

    public PoliticaController(PoliticaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Politica> listar() {
        return service.listar();
    }

    @PostMapping
    public Politica crear(@RequestBody Politica politica) {
        return service.crear(politica);
    }

    @GetMapping("/{id}")
    public Politica obtener(@PathVariable Long id) {
        return service.obtenerPorId(id);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}
