package com.jkt.training.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jkt.training.entity.Users;

public interface UsersRepository extends JpaRepository<Users, Integer>{
	public Users findByEmail(String email);
	//public Optional<Employee> findOneById(String username);

	public Optional<Users> findById(String id);

	public boolean existsById(String empId);
}
