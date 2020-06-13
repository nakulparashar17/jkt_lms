package com.jkt.training.controller;

import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.jkt.training.entity.Employees;
import com.jkt.training.repository.EmployeeRepository;
import com.jkt.training.service.EmployeeService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class EmployeesController {

  	@Autowired
	private EmployeeService empser;
  	
  	@Autowired
  	private EmployeeRepository emprepo;

  	@GetMapping("/employees")
	public List<Employees> getAllEmployees()
	{
		return empser.getAllEmployees();
	}
	
	@GetMapping("/employees/{id}")
	public Optional<Employees> getEmpbyId(@PathVariable int id)
	{
		return empser.getEmployee(id);
	}
	
	@GetMapping("/employees/{id}/managers")
	public List<Employees> getManagerByEmpId(@PathVariable int id)
	{
		return empser.getManagerByEmpId(id);
	}
	
	@PostMapping(path="/employees",consumes = "application/json")
	public String addEmp(@RequestBody Employees employee)
	{
		Employees isExist=empser.findEmployeeByEmail(employee.getEmail());
		if(isExist!=null) {
			return "already added by this email";
		}
		else {
			empser.addEmp(employee);
			return "New Employee Added";
		}
	}
	
//	@PostMapping(path="/employees/{eid}/manager",consumes = "application/json")
//	public String addMan(@RequestBody Employees employee ,@PathVariable int eid)
//	{
//		employee.setManager(new Employees(0,"","","",0,eid));
//		empser.addMan(employee);
//		//System.out.println(employee.toString());
//		return "New Employee Added";
//	}
	
	
	  @RequestMapping(method=RequestMethod.PUT, value="/employees/{id}")
	    public Employees update(@PathVariable int id, @RequestBody Employees employee) {
	        Optional<Employees> optemployee = emprepo.findById(id);
	        Employees c = optemployee.get();
	        if(employee.getName() != null)
	            c.setName(employee.getName());
	        if(employee.getEmail() != null)
	            c.setEmail(employee.getEmail());
	        if(employee.getPassword() != null)
	            c.setPassword(employee.getPassword());
	        if(employee.getEarnedleaves() != 0)
	            c.setEarnedleaves(employee.getEarnedleaves());
	        emprepo.save(c);
	        return c;
	    }
	  
	  @RequestMapping(method=RequestMethod.DELETE, value="/employees/{id}")
	    public String delete(@PathVariable int id) {
	        Optional<Employees> optemployee = emprepo.findById(id);
	        Employees employee = optemployee.get();
	        emprepo.delete(employee);

	        return "";
	    }
}
