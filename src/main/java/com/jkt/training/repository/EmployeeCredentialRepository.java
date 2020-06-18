package com.jkt.training.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jkt.training.entity.EmployeeCredential;

public interface EmployeeCredentialRepository extends JpaRepository <EmployeeCredential, String>{
   public Optional<EmployeeCredential> findOneByempCode(String username);

}
