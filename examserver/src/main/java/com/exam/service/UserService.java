package com.exam.service;

import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.model.exam.Quiz;

import java.util.Set;
import java.util.stream.Collectors;

public interface UserService {

    //creating user
    public User createUser(User user, Set<UserRole> userRoles) throws Exception;

    //get user by username
    public  User getUser(String username);

    //delete user by id
    public void deleteUser(Long userId);

    //update user by username
    public User updateUser (User user);





}
