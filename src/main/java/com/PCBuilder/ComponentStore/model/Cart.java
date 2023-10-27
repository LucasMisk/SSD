package com.PCBuilder.ComponentStore.model;

import java.io.Serializable;
import java.util.ArrayList;
import jakarta.persistence.*;

@Entity
public class Cart implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long id;
    @OneToMany
    private ArrayList<Component> components;

    private CartStatus cartStatus;

    public Cart(long id, ArrayList<Component> components, CartStatus cartStatus) {
        this.id = id;
        this.components = components;
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

    public ArrayList<Component> getComponents() {
        return components;
    }

    public void setComponents(ArrayList<Component> components) {
        this.components = components;
    }

    public CartStatus getCartStatus() {
        return cartStatus;
    }

    public void setCartStatus(CartStatus cartStatus) {
        this.cartStatus = cartStatus;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", components=" + components.toString() +
                ", cartStatus=" + cartStatus +
                '}';
    }
}
