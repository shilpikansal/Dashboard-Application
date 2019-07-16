package com.reactspring.dashboardapp.service;

import com.reactspring.dashboardapp.domain.User;
import com.reactspring.dashboardapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findByUsername(String username)
    {
        User user=userRepository.findByUsername(username);
        return user;
    }

    public User saveOrUpdateUser(User user)
    {
        return userRepository.save(user);
    }

}
