package com.jkt.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jkt.training.entity.EmployeeCredential;
import com.jkt.training.repository.EmployeeCredentialRepository;

@Service
public class EmployeeCredentialService {
	@Autowired
	private EmployeeCredentialRepository employeeCredentialRepository;
	
	
	 public Optional<EmployeeCredential> findOneByEmpCode(String username) {
		return employeeCredentialRepository.findOneByempCode(username); 
	 }
	 public void addEmpCred(EmployeeCredential empCred) {
		 employeeCredentialRepository.save(empCred);
	 }
	public List<EmployeeCredential> getAllempCred() {
		
		return employeeCredentialRepository.findAll();
	}
}
