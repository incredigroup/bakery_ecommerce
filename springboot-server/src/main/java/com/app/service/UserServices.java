package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.entity.User;
import com.app.repository.UserRepository;

@Service
public class UserServices {
	
	@Autowired 
	UserRepository urep;
	
	public User addUser(User u)
	{
		return urep.save(u);
	}
	
	
	public String checkLoginCustomer(String email,String pass)
	{
		System.out.println("e"+email+"pas"+pass);
		User u=urep.CheckLoginCustomer(email, pass);
		
		
		if(u!=null)
		{
//			if(u.getRole().equals("customer"))
//			{
//				System.out.println(u.getFirstName());
//				return u;
//			}
			return "valid";
		}
		
		return "invalid";
	
	}

	public String checkLoginAdmin(String email,String pass)
	{
		User u=urep.CheckLoginAdmin(email, pass);
		
		if(u!=null)
		{
//			if(u.getRole().equals("admin"))
//			{
//				System.out.println(u.getFirstName());
//				return u;
//			}
			return "authorized";
		}
		
		return "unauthorized";

	}
	
	public List<User> getAllCustomers()
	{
		return urep.findAll();
	}
	
	public User changePassword(String email,String oldpwd,String newpwd)
	{
		
		User u=urep.findByEmailId(email);
		
		if(u!=null)
		{
			if(u.getPassword().equals(oldpwd))
			{
				u.setPassword(newpwd);
				System.out.println(u.getFirstName());
				urep.save(u);
				return u;
			}
		}
		
		 return null;
	
		
	}
}
