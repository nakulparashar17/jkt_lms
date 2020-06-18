package com.jkt.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.jkt.training.entity.Users;
import com.jkt.training.repository.UsersRepository;
@Service
public class UsersService {
	
	@Autowired
	private UsersRepository userrepo;
	public Users getUsersInfo(){
		 return this.findUsersByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
	    }
	public Users findUsersByEmail(String email) {
    	return userrepo.findByEmail(email);
    }
	
  	public List<Users> getAllUsers()
	{
		return userrepo.findAll();
	}
	
	public Users findById(String id)
	{
		Optional<Users> result = userrepo.findById(id);
		Users user=null;
		if(result.isPresent())
		{
			user=result.get();
		}
		return user;
		
	}
	
//	public List<Employee> getManagerByEmpId(int id)
//	{
//		return emprepo.getAllByManagerId(id);
//	}
	
	public void addUsers(Users user)
	{
//		Optional<Employees> manager=Optional.ofNullable(employee.getManager())
//				.flatMap(managerFromrequest->emprepo.findByEmpName(managerFromrequest.getEmpName()).;
		userrepo.save(user);
	}
	
	
//	//mapping
//	public void addMan(Employees employee)
//	{
//		emprepo.save(employee);
//	}

	public void updateUsers(Users user,String EmpId)
	{
	
		if(userrepo.existsById(EmpId))
			userrepo.save(user);
	
	}
	
	public void deleteEmp(int EmpId)
	{
		Users user=userrepo.getOne(EmpId);
		userrepo.delete(user);
	}



}
