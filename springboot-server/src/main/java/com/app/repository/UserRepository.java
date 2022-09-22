package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	public User findByEmailId(String email);
	
	@Query(value="select * from user_info_tbl where user_email_id=:email and user_password=:pass and user_role='customer' ",nativeQuery = true)
	public User CheckLoginCustomer(String email,String pass);
	
	
	@Query(value="select * from user_info_tbl where user_email_id=:email and user_password=:pass and user_role='admin' ",nativeQuery = true)
	public User CheckLoginAdmin(String email,String pass);
	
}
