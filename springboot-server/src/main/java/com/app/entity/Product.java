package com.app.entity;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="product_tbl")
public class Product {
	
	@Id
	@Column(name="product_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int prodId;
	
	@Column(name="product_name")
	private String prodName;
	
	@Column(name="category_name")
	private String categoryName;
	
	@Column(name="product_selling_price")
	private float sellingPrice;
	
	private int stock;
	
	@Column(name="product_img")
	private byte[] img;
	
//	@ManyToMany(cascade=CascadeType.MERGE)
//	@JoinTable(name="product_order_tbl", joinColumns= 
//	@JoinColumn(name="product_id" ,referencedColumnName = "product_id"),
//	inverseJoinColumns =@JoinColumn(name="order_id",referencedColumnName = "order_id"))
//	List<Order> orders;
	
	public Product(int prodId, String prodName, String categoryName, float sellingPrice, int stock) {
	super();
	this.prodId = prodId;
	this.prodName = prodName;
	this.categoryName = categoryName;
	this.sellingPrice = sellingPrice;
	this.stock = stock;
	}

	
	public Product() {
		super();
	}


	public int getProdId() {
		return prodId;
	}

	public void setProdId(int prodId) {
		this.prodId = prodId;
	}

	public String getProdName() {
		return prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public float getSellingPrice() {
		return sellingPrice;
	}

	public void setSellingPrice(float sellingPrice) {
		this.sellingPrice = sellingPrice;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public byte[] getImg() {
		return img;
	}

	public void setImg(byte [] img) {
		this.img = img;
	}

}
