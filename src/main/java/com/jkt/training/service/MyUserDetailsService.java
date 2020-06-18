//package com.jkt.training.service;
//
//import java.util.Collection;
//import java.util.List;
//import java.util.Optional;
//import java.util.stream.Collectors;
//
//import javax.persistence.EntityNotFoundException;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.jkt.training.entity.Authorities;
//import com.jkt.training.entity.Employee;
//import com.jkt.training.entity.EmployeeCredential;
//import com.jkt.training.entity.MyUserDetails;
//import com.jkt.training.repository.AuthoritiesRepository;
//import com.jkt.training.repository.EmployeeCredentialRepository;
//import com.jkt.training.repository.EmployeeRepository;
//
//@Service
//public class MyUserDetailsService implements UserDetailsService {
// @Autowired
// private EmployeeCredentialRepository employeeCredentialRepository;
// @Autowired
// private AuthoritiesRepository authRepository;
// @Autowired
// private EmployeeRepository emprepo;
//	
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		Optional<EmployeeCredential> employeeCredentialObj = employeeCredentialRepository.findOneByempCode(username);
//		Optional<Employee> employeeObj=emprepo.findOneById(username);
//		if (employeeCredentialObj.isPresent()) {
//		Authorities empAuthorityList= authRepository.findEmployeeById(username);	
//		//List<Authorities> employeeAuthorityList = authorityRepository.findByEmployeeEmpCode(username);
//		List<SimpleGrantedAuthority> authorities = ((Collection<SimpleGrantedAuthority>) empAuthorityList).stream()
//		.map(authority -> new SimpleGrantedAuthority(authority.getAuthority())).distinct()
//		.collect(Collectors.toList());
//		EmployeeCredential employeeCredential = employeeCredentialObj.get();
//		
//		return new MyUserDetails(employeeCredential.getEmail(),employeeObj.get().getPassword(),employeeObj.isPresent()
//				&&"Y".equalsIgnoreCase(employeeObj.get().getEmail()),employeeObj.isPresent(),
//				employeeObj.isPresent(),employeeObj.isPresent());
////		return new MyUserDetails(employeeCredential.getEmp_code(), employeeObj.getPassword(), employeeObj.isPresent()
////		&& "Y".equalsIgnoreCase(employeeObj.get().getEmail()),
////		authorities);
//		} else
//		throw new EntityNotFoundException("Invalid Username");
//		}
//		
//	
//
//}
