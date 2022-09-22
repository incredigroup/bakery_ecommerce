package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Order;
import com.app.repository.CartRepository;
import com.app.repository.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	public OrderRepository orep;
	
	@Autowired
	public CartRepository crep;
	
	public boolean PlaceOrder(Order o1)
	{
		orep.save(o1);
		return true;
	}
	
	public List<Order> getUserOrderHistory(int userId)
	{
		return orep.findByUserId(userId);
		
	}

}
