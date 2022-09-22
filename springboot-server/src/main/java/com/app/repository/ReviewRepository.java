package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.Order;
import com.app.entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer>{

	@Query(value="select * from customer_review_tbl where user_id=:id",nativeQuery = true)
	public List<Review> findByUserId(int id);
}
