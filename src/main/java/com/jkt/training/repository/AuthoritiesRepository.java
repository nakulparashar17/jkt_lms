package com.jkt.training.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.jkt.training.entity.Authorities;


public interface AuthoritiesRepository extends JpaRepository<Authorities,Integer>{
	public  Authorities findEmployeeById(String username);

}
