package com.govdatos.service;

import com.govdatos.model.Politica;

import java.util.List;

public interface PoliticaService {
    List<Politica> listar();
    Politica crear(Politica politica);
    Politica obtenerPorId(Long id);
    void eliminar(Long id);
}
