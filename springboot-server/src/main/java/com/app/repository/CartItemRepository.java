package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Integer>{

}
