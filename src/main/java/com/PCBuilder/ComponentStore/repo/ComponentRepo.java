package com.PCBuilder.ComponentStore.repo;

import com.PCBuilder.ComponentStore.model.Component;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ComponentRepo extends JpaRepository<Component, Long> {

    Optional<Component> findComponentById(Long id);
}
