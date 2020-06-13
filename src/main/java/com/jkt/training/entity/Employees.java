package com.jkt.training.entity;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotEmpty;

import javax.validation.constraints.Email;

@Entity
public class Employees {

  	@Id
  	@SequenceGenerator(name = "gen",initialValue = 6000)
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "gen" )
	private int id;
	
  	@NotEmpty(message = "Provide a Employee Name!")
  	private String name;
  	
  	@NotEmpty(message = "Email cannot be Empty!!")
  	@Email(message = "Please provide a valid email!")
	private String email;

  	@NotEmpty(message = "Password cannot be Empty!!")
  	private String password;
	
	private int earnedleaves;
	
	@ManyToOne(cascade = CascadeType.REMOVE)
	@JoinColumn(name = "manager_id")
	private Employees manager;
	
	public Employees()
	{
		super();
	}
	
	public Employees(int id) {
		super();
		this.id = id;
	}


	public Employees(int id, String name, String email, String password, int earnedleaves,
			int mid) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.earnedleaves = earnedleaves;
		this.manager =new Employees(mid);
	}

	public Employees(int id, @NotEmpty(message = "Provide a Employee Name!") String name,
			@NotEmpty(message = "Email cannot be Empty!!") @Email(message = "Please provide a valid email!") String email,
			@NotEmpty(message = "Password cannot be Empty!!") String password, int earnedleaves) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.earnedleaves = earnedleaves;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getEarnedleaves() {
		return earnedleaves;
	}

	public void setEarnedleaves(int earnedleaves) {
		this.earnedleaves = earnedleaves;
	}

	public Employees getManager() {
		return manager;
	}

	public void setManager(Employees manager) {
		this.manager = manager;
	}

	@Override
	public String toString() {
		return "Employees [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", earnedleaves=" + earnedleaves + ", manager=" + manager + "]";
	}
	

}
