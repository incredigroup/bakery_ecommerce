package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Review;
import com.app.repository.ReviewRepository;

@Service
public class ReviewService {
	
	@Autowired
	ReviewRepository rrep;
	
	public boolean add(Review r)
	{
		rrep.save(r);
		return true;
	}

	public List<Review> list(int userId)
	{
		return rrep.findByUserId(userId);
	}
}
