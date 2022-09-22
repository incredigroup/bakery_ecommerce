package com.app.entity;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="order_tbl")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="order_id")
	private int orderId;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User users;
	
	@Column(name="order_date")
	private LocalDateTime orderDate;
	
	@Column(name="order_price")
	private DecimalFormat orderprice;
	
	private int discount;
	
	@Column(name="payment_mode")
	private String paymentMode;
	
	@Column(name="payment_status")
	private String paymentStatus;
	
	@ManyToOne
	@JoinColumn(name="product_id")
	private Product prod;
	
	@ManyToOne
	@JoinColumn(name="cart_id")
	private Cart carts;
	
	
	public Order( User users, LocalDateTime orderDate, DecimalFormat orderprice, int discount,
			String paymentMode, String paymentStatus, Product prod, Cart carts) {
		super();
		this.users = users;
		this.orderDate = orderDate;
		this.orderprice = orderprice;
		this.discount = discount;
		this.paymentMode = paymentMode;
		this.paymentStatus = paymentStatus;
		this.prod = prod;
		this.carts = carts;
	}

	public Cart getCarts() {
		return carts;
	}

	public void setCarts(Cart carts) {
		this.carts = carts;
	}

	public Product getProd() {
		return prod;
	}

	public void setProd(Product prod) {
		this.prod = prod;
	}

	

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public User getUsers() {
		return users;
	}

	public void setUsers(User users) {
		this.users = users;
	}

	public LocalDateTime getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDateTime orderDate) {
		this.orderDate = orderDate;
	}

	public DecimalFormat getOrderprice() {
		return orderprice;
	}

	public void setOrderprice(DecimalFormat orderprice) {
		this.orderprice = orderprice;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	
	
	

}
