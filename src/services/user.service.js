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
    getProductById(pid) {
        return axios.get(API_URL + 'product/' + pid, { headers: authHeader() });
    }

    getAllProducts() {
        return axios.get(API_URL + 'products');
    }

    addProduct(productName, price, productDescription,
                quantity, productImage, userId){
        return axios.post(API_URL + 'seller/addproduct',
                            {productName, price, productDescription,
                                quantity, productImage, userId},
                        { headers: authHeader() })
    }

    newOrder(price, quantity, productId, userId){
        return axios.post(API_URL + 'buyer/neworder',
            {price, quantity, productId, userId},
            { headers: authHeader() })
    }

    setSelectedProduct(pid){
        axios.get(API_URL + 'product/' + pid, { headers: authHeader() })
            .then(response => localStorage.setItem("product", JSON.stringify(response.data)))
            .catch(error => console.log("Error fetchinng data!"));
    }
    getSelectedProduct(){
        return JSON.parse(localStorage.getItem('product'));
    }
    removeProduct() {
        localStorage.removeItem('product');
    }
}
export default new UserService();