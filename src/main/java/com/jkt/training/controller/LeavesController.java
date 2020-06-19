package com.jkt.training.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jkt.training.entity.Employees;
import com.jkt.training.entity.LeavesTrack;
import com.jkt.training.repository.EmployeeRepository;
import com.jkt.training.repository.LeaveRepository;
import com.jkt.training.service.LeaveService;

@CrossOrigin(origins = "http://localhost:8000")
@RestController
public class LeavesController {

	@Autowired
	private LeaveService service;
	
	@Autowired
	private LeaveRepository repository;
	
	@Autowired
	private EmployeeRepository repo;
	
	@GetMapping("/leaves")
	public List<LeavesTrack> getAllLeaves(){
		return service.getAllLeaves();
	}
	
	@PutMapping(path = "/leaves/{id}/acceptreject/{flag}",consumes = "application/json")
	public  LeavesTrack rejectApproved(@RequestBody LeavesTrack leave,@PathVariable int id,@PathVariable String flag){
		Optional<LeavesTrack> lea=service.getLeavesById(id);
		System.out.println(flag);
		LeavesTrack l=lea.get();
		System.out.print(l.getReason());
		Employees emp=l.getEmployee();
		if(flag.equals("success")) {
			emp.setEarnedleaves(emp.getEarnedleaves()-l.getDuration());
			repo.save(emp);
			l.setEmployee(emp);
			l.setActive(false);
			l.setAcceptRejectFlag(true);
		}
		else{
			l.setActive(false);
			l.setAcceptRejectFlag(false);
		}
		repository.save(l);
	
		return l;
	}
	
	@GetMapping("/employees/{eid}/leaves")
	public List<LeavesTrack> getAllLeavesByEmployeeId(@PathVariable int eid){
		return service.getAllLeavesByEmployeeId(eid);
	}
	
	@GetMapping("employees/{eid}/leaves/{l_id}")
	public ResponseEntity<?> getLeavesById(@PathVariable int l_id) {
		Optional<LeavesTrack> leaves= service.getLeavesById(l_id);
		return leaves.map(response->ResponseEntity.ok().body(response))
			   .orElse(new ResponseEntity<LeavesTrack>(HttpStatus.NOT_FOUND));
	}
	
	@GetMapping("/leaves/{l_id}")
	public Optional<LeavesTrack> getLeaveById(@PathVariable int l_id) {
		Optional<LeavesTrack> leaves= service.getLeavesById(l_id);
		return leaves;
	}
	
	@GetMapping("/leaves/active")
	public List<LeavesTrack> getAllActiveLeaves(){
		return service.getAllActiveLeaves();
	}
	
	@GetMapping("/leaves/approved")
	public List<LeavesTrack> getAllApprovedLeaves(){
		return repository.getAllApprovedLeaves();
	}
	
	@GetMapping("/leaves/rejected")
	public List<LeavesTrack> getAllRejectedLeaves(){
		return repository.getAllRejectedLeaves();
	}
	
	@PostMapping(path = "/leaves",consumes = "application/json")
	public ResponseEntity<LeavesTrack> applyLeaves(@Valid @RequestBody LeavesTrack leaves)throws URISyntaxException{
		LeavesTrack result=service.applyLeaves(leaves);
		return ResponseEntity.created(new URI("/api/leaves"+result.getId())).body(result);

	}
	
	//employee with leaves
	@PostMapping(path = "/employees/{eid}/leaves",consumes = "application/json")
	public ResponseEntity<LeavesTrack> applyEmployeeLeaves(@Valid @RequestBody LeavesTrack leaves,@PathVariable int eid)throws URISyntaxException{
		leaves.setEmployee(new Employees(eid));
		LeavesTrack result=service.applyLeaves(leaves);
		return ResponseEntity.created(new URI("/leaves"+result.getId())).body(result);
	}
	
	@PutMapping(path = "/leaves/{l_id}",consumes = "application/json")
	ResponseEntity<LeavesTrack> updateLeaves(@Valid @RequestBody LeavesTrack leaves,@PathVariable int l_id){
		//LeavesTrack result=service.updateLeaves(leaves,l_id);;
		LeavesTrack result=service.applyLeaves(leaves);
		return ResponseEntity.ok().body(result);
	}
	
	@PutMapping(path = "/employees/{eid}/leaves/{l_id}",consumes = "application/json")
	ResponseEntity<LeavesTrack> updateLeavesByEmployeeId(@Valid @RequestBody LeavesTrack leaves,@PathVariable int l_id,@PathVariable int eid){
		//LeavesTrack result=service.updateLeaves(leaves,l_id);;
		leaves.setEmployee(new Employees(eid));
		LeavesTrack result=service.applyLeaves(leaves);
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping("/employees/{eid}/leaves/{l_id}")
	ResponseEntity<?> deleteLeaves(@PathVariable int l_id){
		service.deleteLeaves(l_id);
		return ResponseEntity.ok().build();
	}
}
