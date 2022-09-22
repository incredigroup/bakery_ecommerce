package com.app.DO;

import java.util.List;

import com.app.entity.Product;

public class CartDO {

	private int cartId;
	
	private int qty;
	
	private int userId;
	
	private int productId;
	

	public CartDO(int cartId, int qty, int userId, int productId) {
		super();
		this.cartId = cartId;
		this.qty = qty;
		this.userId = userId;
		this.productId = productId;
	}

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	
	
	
	
}
