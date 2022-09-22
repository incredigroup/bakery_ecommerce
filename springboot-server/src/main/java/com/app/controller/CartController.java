package com.app.controller;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DO.CartDO;
import com.app.entity.Cart;
import com.app.entity.CartItem;
import com.app.entity.Product;
import com.app.repository.CartItemRepository;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;
import com.app.service.CartService;

@RestController
@RequestMapping(path="cart")
public class CartController {

	@Autowired
	CartService cserv;
	
	@Autowired
	UserRepository urep;
	
	@Autowired
	ProductRepository prep;
	
	@Autowired
	CartItemRepository citerep;
	
	
	
	@PostMapping("/add")
	public boolean add(@RequestBody CartDO c)
	{
		
		CartItem c1=new CartItem(c.getQty());
		c1.setUsers(urep.findById(c.getUserId()).get());
		c1.setProd(prep.findById(c.getProductId()).get());
		CartItem savedc1=citerep.save(c1);
		
		List<CartItem> list=new ArrayList<CartItem>();
		list.add(savedc1);
		
		Cart c2=new Cart();
		c2.setItems(list);
		return cserv.addToCart(c2);
		
		
//		Set<Product> list=new LinkedHashSet<Product>();
//		Cart c1=new Cart(c.getQty());
//		c1.setUsers(urep.findById(c.getUserId()).get());
//		Set<Product> list=new LinkedHashSet<Product>();
//		list.add(prep.findById(c.getProductId()).get());
//		c1.setProd(list);
	
	}
	
	@DeleteMapping("/delete")
	public boolean remove(@RequestBody Cart c)
	{
		
		return cserv.removeFromCart(c);
	}
	
	@PutMapping("/update")
	public boolean update(@RequestBody Cart c)
	{
		return cserv.updateCart(c);
	}
}
