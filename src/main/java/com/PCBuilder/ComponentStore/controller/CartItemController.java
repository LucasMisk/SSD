package com.PCBuilder.ComponentStore.controller;

import com.PCBuilder.ComponentStore.model.Cart;
import com.PCBuilder.ComponentStore.model.CartItem;
import com.PCBuilder.ComponentStore.model.Component;
import com.PCBuilder.ComponentStore.service.CartItemService;
import com.PCBuilder.ComponentStore.service.CartService;
import com.PCBuilder.ComponentStore.service.ComponentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart-items")
public class CartItemController {

    private final CartItemService cartItemService;
    private final ComponentService componentService;
    private final CartService cartService;


    @Autowired
    public CartItemController(CartItemService cartItemService, ComponentService productService, CartService cartService) {
        this.cartItemService = cartItemService;
        this.componentService = productService;
        this.cartService = cartService;
    }

    @PostMapping
    @CrossOrigin
    public CartItem createCartItem(@RequestParam Long productId, @RequestParam Long shoppingCartId, @RequestParam int quantity) {
        Component product = componentService.findComponentById(productId);
        Cart cart = cartService.getCartById(shoppingCartId).orElseThrow();
        return cartItemService.createCartItem(product, cart, quantity);
    }

    @PutMapping("/{cartItemId}")
    @CrossOrigin
    public void updateCartItemQuantity(@PathVariable Long cartItemId, @RequestParam int newQuantity) {
        cartItemService.updateCartItemQuantity(cartItemId, newQuantity);
    }

    @DeleteMapping("/{cartItemId}")
    @CrossOrigin
    public void removeCartItem(@PathVariable Long cartItemId) {
        cartItemService.removeCartItem(cartItemId);
    }
}
