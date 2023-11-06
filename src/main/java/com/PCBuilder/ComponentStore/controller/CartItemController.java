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
    public CartItem createCartItem(@RequestParam Long productId, @RequestParam Long shoppingCartId, @RequestParam int quantity) {
        // You need to fetch the Product and ShoppingCart entities here from their respective services or repositories.
        // Then, call the CartItemService to create the cart item.
        // Make sure to validate the existence of the product and shopping cart.
        // For brevity, I'm assuming you already have methods to fetch these entities.

        Component product = componentService.findComponentById(productId);
        Cart cart = cartService.getCartById(shoppingCartId).orElseThrow();
        return cartItemService.createCartItem(product, cart, quantity);
    }

    @PutMapping("/{cartItemId}")
    public void updateCartItemQuantity(@PathVariable Long cartItemId, @RequestParam int newQuantity) {
        cartItemService.updateCartItemQuantity(cartItemId, newQuantity);
    }

    @DeleteMapping("/{cartItemId}")
    public void removeCartItem(@PathVariable Long cartItemId) {
        cartItemService.removeCartItem(cartItemId);
    }
}
