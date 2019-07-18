package com.reactspring.dashboardapp.web;

import com.reactspring.dashboardapp.domain.ProjectTask;
import com.reactspring.dashboardapp.domain.User;
import com.reactspring.dashboardapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;

@RestController
@RequestMapping("/api/user")
//@CrossOrigin
public class UserController {

    @Autowired
    private UserService userservice;

    @GetMapping("/username={username}&&password={password}")
    public ResponseEntity<?> validateUser(@PathVariable String username, @PathVariable String password)
    {
        String message="";
        User user=userservice.findByUsername(username);
        if(user==null) {
            message = "User does not exist. Please register to login to the application";
        }
        else if(user.getUsername().equals(username) && !user.getPassword().equals(password))
            message= "Invalid password. Please try again";
        else
            return new ResponseEntity<User>(user, HttpStatus.OK);

        return new ResponseEntity<String>(message,HttpStatus.OK);
    }


  @PostMapping("/register")
  public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result)
  {
      if(result.hasErrors())
      {
          HashMap<String,String> errors=new HashMap<String,String>();
          for(FieldError error: result.getFieldErrors()){
              errors.put(error.getField(), error.getDefaultMessage());
          }

          return new ResponseEntity<HashMap<String,String>>(errors, HttpStatus.BAD_REQUEST);
      }
      User newUser=userservice.saveOrUpdateUser(user);
      return new ResponseEntity<User>(newUser, HttpStatus.CREATED);

  }

}
