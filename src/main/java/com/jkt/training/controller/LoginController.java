package com.jkt.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.jkt.training.entity.Employees;
import com.jkt.training.service.EmployeeService;
//import com.jkt.training.service.LeaveService;

@Controller
public class LoginController {
	
	@Autowired
	private EmployeeService eservice;
	
	//@Autowired
//	private LeaveService lservice;
	
	@RequestMapping(value = {"/login" }, method = RequestMethod.POST)
	 public ModelAndView login(ModelAndView mav) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		Employees employee = eservice.findEmployeeByEmail(auth.getName());
		mav.addObject("employee", employee);
		if (!(auth instanceof AnonymousAuthenticationToken)) {
		    mav.setViewName("home");
		    return mav;
		}
		mav.setViewName("login");
		return mav;
	  }
	
	@PostMapping(path="/emplogin",consumes = "application/json")
	public ResponseEntity<String> empLogin(@RequestBody Employees employee){
		Employees emp=eservice.findEmployeeByEmail(employee.getEmail());
		if(emp!=null) {
			String pass=emp.getPassword();
			if(pass.equals(employee.getPassword())) {
				return ResponseEntity.ok().body("succesfully logged in");
			}
		}
		else {
			return ResponseEntity.ok().body("enter correct details");
		}
		return null;
	}
}
