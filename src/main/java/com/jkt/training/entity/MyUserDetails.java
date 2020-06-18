//package com.jkt.training.entity;
//
//import java.util.Arrays;
//import java.util.Collection;
//import java.util.List;
//import java.util.stream.Collectors;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.OneToMany;
//import javax.persistence.OneToOne;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import com.jkt.training.repository.AuthoritiesRepository;
//@Entity
//public class MyUserDetails  implements UserDetails{
//
////	@Autowired 
////	private Employee emp;
//	 @Id
//	    @GeneratedValue(strategy = GenerationType.AUTO)
//	    private Long id;
//
//	    private String username;
//
//	    private String password;
//
//	    private boolean accountNonExpired;
//
//	    private boolean accountNonLocked;
//
//	    private boolean credentialsNonExpired;
//
//	    private boolean enabled;
//        
//	    //private List<GrantedAuthority> authorities;
////	    @OneToMany
////	    private Authorities authorities;
//	    public MyUserDetails() {
//	        super();
//	    }
//	    
//	    
//	    public MyUserDetails(String username, String password, boolean accountNonExpired,
//	    		boolean accountNonLocked, boolean credentialsNonExpired, boolean enabled) {
//			this.username = username;
//			this.password = password;
//			this.accountNonExpired = accountNonExpired;
//			this.accountNonLocked = accountNonLocked;
//			this.credentialsNonExpired = credentialsNonExpired;
//			this.enabled = enabled;
////			this.authorities = (Authorities) Arrays.stream(authorities.getAuthority().split(""))
////					.map(SimpleGrantedAuthority::new)
////					.collect(Collectors.toList());
//		}
//
//
////		public Long getId() {
////	        return id;
////	    }
////
////	    public void setId(Long id) {
////	        this.id = id;
////	    }
//
//	    @Override
//	    public String getUsername() {
//	        return username;
//	    }
//
//	    public void setUsername(String username) {
//	        this.username = username;
//	    }
//
//	    @Override
//	    public String getPassword() {
//	        return password;
//	    }
//
//	    public void setPassword(String password) {
//	        this.password = password;
//	    }
//
//	    @Override
//	    public boolean isAccountNonExpired() {
//	        return accountNonExpired;
//	    }
//
//	    @Override
//	    public boolean isAccountNonLocked() {
//	        return accountNonLocked;
//	    }
//
//	    @Override
//	    public boolean isCredentialsNonExpired() {
//	        return credentialsNonExpired;
//	    }
//
//	    @Override
//	    public boolean isEnabled() {
//	        return enabled;
//	    }
//
//
//		@Override
//		public Collection<? extends GrantedAuthority> getAuthorities() {
//			// TODO Auto-generated method stub
//			return null;
//		}
//
////		@Override
////		public Collection<? extends GrantedAuthority> getAuthorities() {
////			
////			return (Collection<? extends GrantedAuthority>) authorities;
////		}
////		Authorities employeeAuthorityList = AuthoritiesRepository.findEmployeeByEmpCode(username);
////		List<SimpleGrantedAuthority> authorities = ((Collection<GrantedAuthority>) employeeAuthorityList).stream()
////		.map(authority -> new SimpleGrantedAuthority(authority.getAuthority())).distinct()
////		.collect(Collectors.toList());
//	     
//
//}
