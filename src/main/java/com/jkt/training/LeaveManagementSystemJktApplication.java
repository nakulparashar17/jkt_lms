package com.jkt.training;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class LeaveManagementSystemJktApplication {

	public static void main(String[] args) {
		SpringApplication.run(LeaveManagementSystemJktApplication.class, args);
	}

}
