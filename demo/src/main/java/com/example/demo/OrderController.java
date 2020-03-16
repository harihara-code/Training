package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class OrderController {
	@Autowired
	private Order o;
	
	@GetMapping("/order")
	public String order() { 
		return "order";
	}
	
	@GetMapping("/ordertest") 
	public String ordertest() {
		o.setOrderName(100);
		System.out.println(o.getOrderName());
		Logger log = LoggerFactory.getLogger(this.getClass());
		log.debug("inside ordertest()");
		return "home";
	}
	
}
