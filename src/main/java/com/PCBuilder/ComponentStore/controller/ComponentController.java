package com.PCBuilder.ComponentStore.controller;

import com.PCBuilder.ComponentStore.model.Component;
import com.PCBuilder.ComponentStore.service.ComponentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/component")
public class ComponentController {
    private final ComponentService componentService;

    public ComponentController(ComponentService componentService) {
        this.componentService = componentService;
    }

    @GetMapping("/allComponents")
    public ResponseEntity<List<Component>> getAllComponents() {
        List<Component> components = componentService.findAllComponents();
        return new ResponseEntity<>(components, HttpStatus.OK);
    }

    @GetMapping("/findComponent/{id}")
    public ResponseEntity<Component> getComponentById(@PathVariable("id") Long id) {
        Component component = componentService.findComponentById(id);
        return new ResponseEntity<>(component, HttpStatus.OK);
    }

    @PostMapping("/addComponent")
    public ResponseEntity<Component> addComponent(@RequestBody Component component) {
        Component newComponent = componentService.addComponent(component);
        return new ResponseEntity<>(newComponent, HttpStatus.CREATED);
    }

    @PutMapping("/updateComponent")
    public ResponseEntity<Component> updateComponent(@RequestBody Component component) {
        Component newComponent = componentService.updateComponent(component);
        return new ResponseEntity<>(newComponent, HttpStatus.OK);
    }

    @DeleteMapping("/deleteComponent/{id}")
    public ResponseEntity<?> deleteComponent(@PathVariable("id") Long id) {
        componentService.deleteComponent(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
