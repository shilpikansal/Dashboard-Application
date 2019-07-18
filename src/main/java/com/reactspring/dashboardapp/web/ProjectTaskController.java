package com.reactspring.dashboardapp.web;

import com.reactspring.dashboardapp.domain.ProjectTask;
import com.reactspring.dashboardapp.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/board")
//@CrossOrigin
public class ProjectTaskController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @PostMapping("")
    public ResponseEntity<?> addProjectTasktoBoard(@Valid  @RequestBody ProjectTask projectTask, BindingResult result)
    {
        if(result.hasErrors())
        {
            HashMap<String,String> errors=new HashMap<String,String>();
            for(FieldError error: result.getFieldErrors()){
                errors.put(error.getField(), error.getDefaultMessage());
            }

            return new ResponseEntity<HashMap<String,String>>(errors, HttpStatus.BAD_REQUEST);
        }

        ProjectTask newPT=projectTaskService.saveOrUpdateProjectTask(projectTask);
        return new ResponseEntity<ProjectTask>(newPT, HttpStatus.CREATED);
    }


    @GetMapping("/all/{user_id}")
    public List<ProjectTask> getAllPTsById(@PathVariable Long user_id)
    {
        return (List<ProjectTask>)projectTaskService.findByUserId(user_id);

    }

    @GetMapping("/{pt_id}")
    public ResponseEntity<?> getPTById(@PathVariable Long pt_id){
        ProjectTask projectTask = projectTaskService.findById(pt_id);
        return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
    }

    @DeleteMapping("/{pt_id}")
    public ResponseEntity<?> deleteProjectTask(@PathVariable Long pt_id){
        projectTaskService.delete(pt_id);

        return new ResponseEntity<String>("Project Task deleted", HttpStatus.OK);
    }


}
