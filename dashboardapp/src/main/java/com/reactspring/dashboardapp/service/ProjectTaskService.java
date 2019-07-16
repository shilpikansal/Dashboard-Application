package com.reactspring.dashboardapp.service;

import com.reactspring.dashboardapp.domain.ProjectTask;
import com.reactspring.dashboardapp.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectTaskService{
    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    public ProjectTask saveOrUpdateProjectTask(ProjectTask projectTask){
        if(projectTask.getStatus()==null || projectTask.getStatus()=="")
            projectTask.setStatus("TO_DO");
        return projectTaskRepository.save(projectTask);
    }

    public Iterable<ProjectTask> findByUserId(Long user_id)
    {
        Iterable<ProjectTask> result=(List<ProjectTask>) projectTaskRepository.findByUserId(user_id);
        return result;
    }


    public ProjectTask findById(Long id){
        return projectTaskRepository.getById(id);
    }

    public void delete(Long id){
        ProjectTask projectTask = findById(id);
        projectTaskRepository.delete(projectTask);
    }

}
