package com.PCBuilder.ComponentStore.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
public class Cart implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long id;
    @OneToMany(mappedBy = "cart")
    private List<CartItem> cartItems;

    private String cartStatus;

    public Cart(long id, List<CartItem> cartItems, String cartStatus) {
        this.id = id;
        this.cartItems = cartItems;
        this.cartStatus = cartStatus;
    }

    public Cart() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<CartItem> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItem> cartItems) {
        this.cartItems = cartItems;
    }

    public String getCartStatus() {
        return cartStatus;
    }

    public void setCartStatus(String cartStatus) {
        this.cartStatus = cartStatus;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", components=" + cartItems.toString() +
                ", cartStatus=" + cartStatus +
                '}';
    }
}
