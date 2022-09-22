package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>{

		@Query(value="select * from Order_tbl where user_id=:id",nativeQuery = true)
		public List<Order> findByUserId(int id);
		
		//public List<Order> findByProductId(int id);
}
