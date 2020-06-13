package com.jkt.training.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "leaves_track")
public class LeavesTrack {

	@Id
	@SequenceGenerator(name = "sen")
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "sen" )
	private int id;
	
	@NotEmpty(message = "please select type of leave")
	private String type;
	
	@NotEmpty(message = "please provide reason for leave")
	private String reason;
	
	@Temporal(TemporalType.DATE)
	@NotNull(message = "please provide start date")
	private Date fromDate;
	
	@Temporal(TemporalType.DATE)
	@NotNull(message = "please provide end date")
	private Date toDate;
	
	private int duration;
	
	private boolean acceptRejectFlag;
	
	private boolean active;
	
	@ManyToOne
	private Employees employee;

	public LeavesTrack() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public LeavesTrack(int id, @NotNull(message = "please select type of leave") String type,
			@NotNull(message = "please provide reason for leave") String reason,
			@NotNull(message = "please provide start date") Date fromDate,
			@NotNull(message = "please provide end date") Date toDate, int duration, boolean acceptRejectFlag,
			boolean active) {
		super();
		this.id = id;
		this.type = type;
		this.reason = reason;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.duration = duration;
		this.acceptRejectFlag = acceptRejectFlag;
		this.active = active;
	}

	
	public LeavesTrack(int id, @NotEmpty(message = "please select type of leave") String type,
			@NotEmpty(message = "please provide reason for leave") String reason,
			@NotNull(message = "please provide start date") Date fromDate,
			@NotNull(message = "please provide end date") Date toDate, int duration, boolean acceptRejectFlag,
			boolean active, int eid) {
		super();
		this.id = id;
		this.type = type;
		this.reason = reason;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.duration = duration;
		this.acceptRejectFlag = acceptRejectFlag;
		this.active = active;
		this.employee = new Employees(eid);
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Employees getEmployee() {
		return employee;
	}



	public void setEmployee(Employees employee) {
		this.employee = employee;
	}



	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public Date getFromDate() {
		return fromDate;
	}

	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}

	public Date getToDate() {
		return toDate;
	}

	public void setToDate(Date toDate) {
		this.toDate = toDate;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public boolean isAcceptRejectFlag() {
		return acceptRejectFlag;
	}

	public void setAcceptRejectFlag(boolean acceptRejectFlag) {
		this.acceptRejectFlag = acceptRejectFlag;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}



	@Override
	public String toString() {
		return "LeavesTrack [id=" + id + ", type=" + type + ", reason=" + reason + ", fromDate=" + fromDate
				+ ", toDate=" + toDate + ", duration=" + duration + ", acceptRejectFlag=" + acceptRejectFlag
				+ ", active=" + active + "]";
	}		
}
