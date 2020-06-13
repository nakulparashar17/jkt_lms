import axios from 'axios';


const USER_API_BASE_URL = 'http://localhost:8000/employees';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchEmployeeById(id) {
        return axios.get(USER_API_BASE_URL + '/' + id);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post("" + USER_API_BASE_URL, user);
    }

    editEmployee(employee) {
        return axios.put(USER_API_BASE_URL + '/' + employee.id, employee);
    }

}

export default new ApiService();