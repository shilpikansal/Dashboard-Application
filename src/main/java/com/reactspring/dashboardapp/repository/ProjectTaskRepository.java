package com.reactspring.dashboardapp.repository;

import com.reactspring.dashboardapp.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface ProjectTaskRepository  extends CrudRepository<ProjectTask,Long>  {
    ProjectTask getById(Long id);
    Iterable<ProjectTask> findByUserId(Long user_id);
}

