import http from "../http-common";

class LeavesDataService {
    getAll() {
        return http.get("/leaves");
    }

    getAllemp(id) {
        return http.get(`/employees/${id}/leaves`);
    }
    get(id) {
        return http.get(`/employees/${id}/leaves/${id}`);
    }
    create(data) {
        return http.post(`/leaves`, data);
    }

    update(id, data) {
        return http.put(`/employees/${id}/leaves/${id}`, data);
    }

    findByActive(active) {
        return http.get(`/leaves?active=${active}`);
    }

    delete(id) {
        return http.delete(`/employees/${id}/leaves/${id}`);
    }
}

export default new LeavesDataService();