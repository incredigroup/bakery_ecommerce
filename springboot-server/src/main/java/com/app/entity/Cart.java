package com.app.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="cart_details_tbl")
public class Cart {
	
	
	
	//ordeitem ->price,qty,onetoone prod,manytoone order
	//orderepo-->    List<Order> findAllByUserOrderByCreatedDateDesc(User user);
	//order--> total,onetomany list<orderitems>,manytoone user

	
	//cart iteam-->qty,prod

	//cart -->list<cartitem>,totalcost
	
	//checkout-->pname,pid,qty,price,uid
	
	//orderitem-->price,qty,orderid,pid
	//order-->userid
	


	
	@Id
	@Column(name="cart_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int cartId;
	
	@OneToOne
	@JoinColumn(name="user_id")
	private User users;
	
	@OneToMany(cascade=CascadeType.ALL)
	List<CartItem> items;
	
	public Cart() {
		super();
	}

	
//
//	public Set<Product> getProd() {
//		return prod;
//	}
//
//	public void setProd(Set<Product> prod) {
//		this.prod = prod;
//	}

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public User getUsers() {
		return users;
	}

	public void setUsers(User users) {
		this.users = users;
	}


	public List<CartItem> getItems() {
		return items;
	}


	public void setItems(List<CartItem> items) {
		this.items = items;
	}

	
	
}
