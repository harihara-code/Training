package com.example.demo;

import org.springframework.stereotype.Component;

@Component
public class Order {
	private Integer orderName;

	public Integer getOrderName() {
		return orderName;
	}

	public void setOrderName(Integer orderName) {
		this.orderName = orderName;
	}
	
}
