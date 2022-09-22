package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DO.UserDO;
import com.app.entity.User;
import com.app.service.UserServices;

@CrossOrigin("*")
@RestController
@RequestMapping(path="user")
public class UserController {
	
	@Autowired
	UserServices userv;
	
	public UserController()
	{
		System.out.println("User controller created");
	}
	

	@PostMapping("/register")
	public User registerUser(@RequestBody User u)
	{
		User u1=new User(u.getFirstName(),u.getLastName(),u.getEmailId(),u.getPassword(),u.getPhoneNo(),u.getRole());
		return userv.addUser(u1);

	}
	
	@PostMapping("/loginCust")
	public String checkLoginCust(@RequestBody UserDO u)
	{
		return userv.checkLoginCustomer(u.getEmailId(), u.getPassword());
	}
	
	
	@PostMapping("/loginAd")
	public String checkLoginAdmin(@RequestBody UserDO u)
	{
		return userv.checkLoginAdmin(u.getEmailId(), u.getPassword());
		
	}
	
	
	@GetMapping("/getAll")
	public List<User> getAllCustomer()
	{
		return userv.getAllCustomers();
	}
	
	
	@PutMapping("changepwd/{uname}/{oldpwd}/{newpwd}")
	public User changePassword(@PathVariable String uname,@PathVariable String oldpwd,@PathVariable String newpwd)
	{
		User u=userv.changePassword(uname, oldpwd, newpwd);
		return u;
	}




}
