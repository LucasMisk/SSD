package com.PCBuilder.ComponentStore.service;

import com.PCBuilder.ComponentStore.exception.ComponentNotFoundException;
import com.PCBuilder.ComponentStore.model.Component;
import com.PCBuilder.ComponentStore.repo.ComponentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComponentService {
    private final ComponentRepo componentRepo;

    @Autowired
    public ComponentService(ComponentRepo componentRepo) {
        this.componentRepo = componentRepo;
    }

    public Component addComponent(Component component) {
        return componentRepo.save(component);
    }

    public List<Component> findAllComponents() {
        return componentRepo.findAll();
    }

    public Component updateComponent(Component component) {
        return componentRepo.save(component);
    }

    public Component findComponentById(Long id) {
        return componentRepo.findComponentById(id).orElseThrow(() -> new ComponentNotFoundException("Component with id " + id + " was not found"));
    }

    public void deleteComponent(Long id) {
        componentRepo.deleteById(id);
    }
}
