package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Cart;
import com.app.entity.Product;
import com.app.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	public ProductRepository prep;
	
	public List<Product> getAll()
	{
		Product p=new Product();
		return prep.findAll();
		
	}
	
	public List<Product> findByName(String name)
	{
		return prep.findByProdName( name);
	}
	
	public List<Product> findByCategory(String cat)
	{
		return prep.findByCategoryName(cat);
	}
	
	public boolean addProudct(Product p)
	{
		prep.save(p);
		return true;
	}
	
	
	public boolean deleteProudct(int id)
	{
		prep.deleteById(id);
		return true;
	}
	
	

}
