package com.jkt.training.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jkt.training.entity.Authorities;
import com.jkt.training.repository.AuthoritiesRepository;

@Service
public class AuthoritiesService {
  @Autowired
  private AuthoritiesRepository authRepository;
  
  public Authorities findEmployeeByEmpCode(String username) {
	  return authRepository.findEmployeeById(username);
  }
}
