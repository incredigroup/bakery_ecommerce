package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Address;
import com.app.entity.Order;
import com.app.repository.AddressRepository;
import com.app.service.OrderService;

@RestController
@RequestMapping(path="order")
public class OrderController {
	
	
	@Autowired
	OrderService oserv;
	
	@Autowired
	AddressRepository arep;
	
	@PostMapping("/add")
	public boolean addOrder(@RequestBody Order o)
	{
		Order o1=new Order(o.getUsers(),o.getOrderDate(),o.getOrderprice(),o.getDiscount(),o.getPaymentMode(),o.getPaymentStatus(),o.getProd(),o.getCarts());
		oserv.PlaceOrder(o1);
		return true;
	}
	
	@GetMapping("/history")
	public List<Order> OrderHistory(@PathVariable int userId)
	{
		 return oserv.getUserOrderHistory(userId);
	}
	
	@PostMapping("/address")
	public Address adddeliveryAddress(@RequestBody Address addr)
	{
		 return arep.save(addr);
	}
	
	

}
