import axios from 'axios';

const API_URL = 'http://localhost:8080/api/authenticate';

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL, {
        username,
        password
      })
      .then((response) => {
        if (response) {
          localStorage.setItem('user', response.data);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return localStorage.getItem('user');
  }
}

export default new AuthService();
