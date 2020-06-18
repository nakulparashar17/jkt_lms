package com.jkt.training.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
@Entity
public class EmployeeCredential {
	@Id
	@NotEmpty(message = "Provide a Employee Code!")
	@Column(name="emp_code")
	private String empCode;
	private String email;
	private int skey;
	private int email_sent_count;
	private boolean active;
	
	
	
	public String getEmpCode() {
		return empCode;
	}
	public void setEmpCode(String empCode) {
		this.empCode = empCode;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getSkey() {
		return skey;
	}
	public void setSkey(int skey) {
		this.skey = skey;
	}
	public int getEmail_sent_count() {
		return email_sent_count;
	}
	public void setEmail_sent_count(int email_sent_count) {
		this.email_sent_count = email_sent_count;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	
	@Override
	public String toString() {
		return "EmployeeCredential [empCode=" + empCode + ", email=" + email + ", skey=" + skey + ", email_sent_count="
				+ email_sent_count + ", active=" + active + "]";
	}
	
	
}
