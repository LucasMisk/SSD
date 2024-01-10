package com.PCBuilder.ComponentStore.controller;

import com.PCBuilder.ComponentStore.model.User;
import com.PCBuilder.ComponentStore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    @CrossOrigin
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/all")
    @CrossOrigin
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{userId}")
    @CrossOrigin
    public User getUserById(@PathVariable long userId) {
        return userService.getUserById(userId);
    }

    @GetMapping("/by-email")
    @CrossOrigin
    public User getUserByEmail(@RequestParam String email) {
        return userService.getUserByEmail(email);
    }

    @PutMapping("/update")
    @CrossOrigin
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @DeleteMapping("/delete/{userId}")
    @CrossOrigin
    public void deleteUser(@PathVariable long userId) {
        userService.deleteUser(userId);
    }
}
