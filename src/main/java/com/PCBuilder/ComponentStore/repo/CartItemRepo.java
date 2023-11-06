package com.PCBuilder.ComponentStore.repo;

import com.PCBuilder.ComponentStore.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepo extends JpaRepository<CartItem, Long> {
    // You can add custom query methods if needed
}
