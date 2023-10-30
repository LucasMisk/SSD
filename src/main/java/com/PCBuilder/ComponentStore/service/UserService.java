package com.PCBuilder.ComponentStore.service;

import com.PCBuilder.ComponentStore.exception.ComponentNotFoundException;
import com.PCBuilder.ComponentStore.exception.UserNotFoundException;
import com.PCBuilder.ComponentStore.model.User;
import com.PCBuilder.ComponentStore.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepo userRepository;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepository = userRepo;
    }

    public User createUser(User user) {
        // You can add business logic or validation here before saving the user.
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("Component with id " + userId + " was not found"));
    }

    public User getUserByEmail(String userEmail) {
        return userRepository.findUserByEmail(userEmail).orElseThrow(() -> new UserNotFoundException("Component with email " + userEmail + " was not found"));
    }

    public void updateUser(User user) {
        // You can add business logic or validation here before updating the user.
        userRepository.save(user);
    }

    public void deleteUser(long userId) {
        userRepository.deleteById(userId);
    }
}
