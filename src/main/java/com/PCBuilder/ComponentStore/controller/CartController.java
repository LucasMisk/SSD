package com.PCBuilder.ComponentStore.controller;

import com.PCBuilder.ComponentStore.exception.CartNotFoundException;
import com.PCBuilder.ComponentStore.model.Cart;
import com.PCBuilder.ComponentStore.model.Component;
import com.PCBuilder.ComponentStore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/carts")
public class CartController {
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping("/create")
    public Cart createCart() {
        return cartService.createCart();
    }

    @GetMapping("/{cartId}")
    public Optional<Cart> getCartById(@PathVariable long cartId) {
        return cartService.getCartById(cartId);
    }

    @PostMapping("/{cartId}/update-status")
    public Cart updateCartStatus(@PathVariable long cartId, @RequestParam String newStatus) {
        return cartService.updateCartStatus(cartId, newStatus);
    }

    @DeleteMapping("/{cartId}")
    public void deleteCart(@PathVariable long cartId) {
        try {
            cartService.deleteCart(cartId);
        } catch (CartNotFoundException e) {
            // Handle cart not found
            // You can return an appropriate HTTP response here
        }
    }
}
