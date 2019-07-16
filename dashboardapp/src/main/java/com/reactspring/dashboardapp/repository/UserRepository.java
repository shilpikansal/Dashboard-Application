package com.reactspring.dashboardapp.repository;

import com.reactspring.dashboardapp.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,String> {

    User findByUsername(String username);
}
