package com.PCBuilder.ComponentStore.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Component implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long id;
    private String componentType;
    private String brand;
    private String model;
    private String details;
    private String imageUrl;
    private float price;

    public Component() {

    }

    public Component(long id, String componentType, String brand, String model, String details, String imageUrl, float price) {
        this.id = id;
        this.componentType = componentType;
        this.brand = brand;
        this.model = model;
        this.details = details;
        this.imageUrl = imageUrl;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public String getType() {
        return componentType;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public String getDetails() {
        return details;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public float getPrice(){return price;}

    public void setId(long id) {
        this.id = id;
    }

    public void setType(String componentType) {
        this.componentType = componentType;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setPrice(float price) {this.price = price;}
    @Override
    public String toString() {
        return "Component{" +
                "id=" + id +
                ", type=" + componentType +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", details='" + details + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
