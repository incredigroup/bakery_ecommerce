package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Product;
import com.app.service.ProductService;

@RestController
@RequestMapping(path="product")
public class ProductController {
	
	@Autowired
	ProductService pserv;
	
	
	@PostMapping("/add")
	public boolean addProduct(@RequestBody Product p)
	{
		return pserv.addProudct(p);
	}

	@GetMapping("/findbycat/{cat}")
	public List<Product> findByCategory(@PathVariable String cat)
	{
		return pserv.findByCategory(cat);
	}
	
	@GetMapping("/findbyName/{pname}")
	public List<Product> findByName(@PathVariable String pname)
	{
		return pserv.findByName(pname);
	}
	
	@GetMapping("getAll")
	public List<Product> getAll()
	{
		return pserv.getAll();
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean remove(@PathVariable int id)
	{
		return pserv.deleteProudct(id);
	}
}
