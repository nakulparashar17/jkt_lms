//package com.jkt.training.controller;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//
//import com.jkt.training.entity.Employee;
//import com.jkt.training.entity.EmployeeCredential;
//import com.jkt.training.repository.EmployeeCredentialRepository;
//import com.jkt.training.service.EmployeeCredentialService;
//
//@Controller
//public class EmployeeCredentialContoller {
//	@Autowired
//	private EmployeeCredentialService employeeCredentialService;
//	@Autowired
//	private EmployeeCredentialRepository employeeCredentialRepository;
//	
//	@GetMapping("/employeecredential/{empCode}")
//	public Optional<EmployeeCredential> getEmpbyId(@PathVariable String empCode)
//	{
//		return employeeCredentialService.findOneByEmpCode(empCode);
//	}
//	@GetMapping("/employeecredential")
//	public List<EmployeeCredential> getAllempCred(){
//		return employeeCredentialService.getAllempCred();
//	}
//	@PostMapping(path="/employeecredential",consumes = "application/json")
//	public String addEmpCred(@RequestBody EmployeeCredential empCred)
//	{
//		Optional<EmployeeCredential> isExist=employeeCredentialService.findOneByEmpCode(empCred.getEmpCode());
//				
//		if(isExist!=null) {
//			return "already added by this empcode";
//		}
//		else {
//			employeeCredentialService.addEmpCred(empCred);
//			return "New Employee Added";
//		}
//	
//	}
//}
