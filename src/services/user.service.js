import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/miu/';
class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }
    getBuyerBoard() {
        return axios.get(API_URL + 'buyer', { headers: authHeader() });
    }
    getSellerBoard() {
        return axios.get(API_URL + 'seller', { headers: authHeader() });
    }
    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
    addProduct(productName, price, productDescription,
                quantity, productImage, userId){
        return axios.post(API_URL,
                            {productName, price, productDescription,
                                quantity, productImage, userId},
                        { headers: authHeader() })
    }
}
export default new UserService();