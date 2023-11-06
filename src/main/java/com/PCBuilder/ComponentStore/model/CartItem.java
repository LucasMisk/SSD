package com.PCBuilder.ComponentStore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class CartItem{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @JsonIgnore
    @ManyToOne
    private Component component;

    @JsonIgnore
    @ManyToOne
    private Cart cart;

    private int quantity;

    public CartItem(Component component, Cart cart, int quantity) {
        this.component = component;
        this.cart = cart;
        this.quantity = quantity;
    }

    public CartItem() {

    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Component getComponent() {
        return component;
    }

    public void setComponent(Component component) {
        this.component = component;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "CartItem{" +
                "id=" + id +
                ", component=" + component +
                ", cart=" + cart +
                ", quantity=" + quantity +
                '}';
    }
}