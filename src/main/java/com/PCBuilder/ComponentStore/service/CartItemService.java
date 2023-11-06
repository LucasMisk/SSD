package com.PCBuilder.ComponentStore.service;

import com.PCBuilder.ComponentStore.model.Cart;
import com.PCBuilder.ComponentStore.model.CartItem;
import com.PCBuilder.ComponentStore.model.Component;
import com.PCBuilder.ComponentStore.repo.CartItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
public class CartItemService {

    private final CartItemRepo cartItemRepo;

    @Autowired
    public CartItemService(CartItemRepo cartItemRepo) {
        this.cartItemRepo = cartItemRepo;
    }

    @Transactional
    public CartItem createCartItem(Component product, Cart cart, int quantity) {
        CartItem cartItem = new CartItem();
        cartItem.setComponent(product);
        cartItem.setCart(cart);
        cartItem.setQuantity(quantity);
        return cartItemRepo.save(cartItem);
    }

    @Transactional
    public void updateCartItemQuantity(Long cartItemId, int newQuantity) {
        Optional<CartItem> optionalCartItem = cartItemRepo.findById(cartItemId);
        if (optionalCartItem.isPresent()) {
            CartItem cartItem = optionalCartItem.get();
            cartItem.setQuantity(newQuantity);
            cartItemRepo.save(cartItem);
        }
    }

    @Transactional
    public void removeCartItem(Long cartItemId) {
        cartItemRepo.deleteById(cartItemId);
    }
}
