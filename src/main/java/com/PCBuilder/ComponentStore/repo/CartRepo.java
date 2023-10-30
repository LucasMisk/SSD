package com.PCBuilder.ComponentStore.repo;

import com.PCBuilder.ComponentStore.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {
    // You can define custom query methods here if needed
}
