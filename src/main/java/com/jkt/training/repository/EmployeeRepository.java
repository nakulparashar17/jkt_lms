package com.jkt.training.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jkt.training.entity.Employees;

public interface EmployeeRepository extends JpaRepository<Employees, Integer> {
	
	public List<Employees> getAllByManagerId(int mid);
	
	public Employees findByEmail(String email);
	
	@Query(nativeQuery = true, value = "select * from employees where manager_id!=0")
	public List<Employees> getAllManager();
}
