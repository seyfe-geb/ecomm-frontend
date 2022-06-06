import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";
class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "signin", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
    }
    register(firstName, lastName, email, username, password, role,
             street, city, state, zipcode,
             cardName, cardType, cardNumber, cardCVV) {
        return axios.post(API_URL + "signup", {
            firstName, lastName, email, username, password, role,
            street, city, state, zipcode,
            cardName, cardType, cardNumber, cardCVV
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}
export default new AuthService();