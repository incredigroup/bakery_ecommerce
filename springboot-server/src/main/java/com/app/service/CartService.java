package com.app.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Cart;
import com.app.entity.Product;
import com.app.entity.User;
import com.app.repository.CartRepository;
import com.app.repository.ProductRepository;

@Service
public class CartService {
	
	@Autowired
	CartRepository crep;
	
	@Autowired
	ProductRepository prep;
	
	//HashMap<Integer,Integer> prodQty=new HashMap<Integer,Integer>();
	
	
	public boolean addToCart(Cart c)
	{
			crep.save(c);
			return true;
			
			//Product p=prep.findById(pr.getProdId()).get();
			//Cart c=crep.findByProduct(prodId);
			
//			if(c !=null)
//			{
//				p.setQuantity(p.getQuantity()+qty);
//				crep.save(c);
//			}
//			else
//			{
//				java.util.List<Product> prod=c.getProd();
//				foreach(Product p :)
//				prod.add(p);
//				c.setProd(prod);
//				crep.save(c);
//			}
		
			
		
		
	}
	
	public boolean updateCart(Cart c)
	{
//		if(prodQty.containsKey(p.getProdId()))
//		{
//			prodQty.put(p.getProdId(), prodQty.get(p.getProdId())+qty);
//		}
//		else
//			prodQty.put(p.getProdId(), qty);
//		
//		
		Cart c1=crep.findById(c.getCartId()).get();
		c1.setQuantity(c.getQuantity());
		crep.save(c1);
		return true;
		
	}
	
	public boolean removeFromCart(Cart c)
	{
		crep.deleteById(c.getCartId());
		return true;
//		Product p=prep.findById(prodId).get();
//		
//		if(c !=null)
//		{
//			java.util.List<Product> prod=c.getProd();
//			prod.remove(p);
//			c.setProd(prod);
//			crep.save(c);
//			return true;
//		}
//	
//		return false;
	}
	
	
	
	

}
