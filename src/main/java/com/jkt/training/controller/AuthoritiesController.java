package com.jkt.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.jkt.training.entity.Authorities;
import com.jkt.training.service.AuthoritiesService;

@Controller
public class AuthoritiesController {
	@Autowired
	private AuthoritiesService authService;
	
	@GetMapping("/authority/{emp_code}")
	public Authorities getEmployeeByEmpCode(@PathVariable String emp_code) {
		return authService.findEmployeeByEmpCode(emp_code);
	}
}
