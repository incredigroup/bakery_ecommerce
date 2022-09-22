package com.app.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_info_tbl")
public class User {
	
	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;

	@Column(name="user_firstname")
	private String firstName;
	
	@Column(name="user_lastname")
	private String lastName;
	
	@Column(name="user_email_id")
	private String emailId;
	
	@Column(name="user_password")
	private String password;
	
	@Column(name="user_phone_no")
	private long phoneNo;
	
	@Column(name="user_role")
	private String role;
	
//	@OneToOne(mappedBy = "users",cascade = CascadeType.ALL)
//	private Address addr;
//	
//	@OneToOne(mappedBy = "users",cascade = CascadeType.ALL)
//	private Cart carts;
	
//	@OneToMany(mappedBy = "users",cascade = CascadeType.ALL)
//	private List<Order> orders;
//	
//	@OneToMany(mappedBy = "users",cascade = CascadeType.ALL)
//	private List<Review> reviews;

	public User(String firstName, String lastName, String emailId, String password, long phoneNo, String role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
		this.phoneNo = phoneNo;
		this.role = role;
		
	}


	public User() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	
	
	
	

}
