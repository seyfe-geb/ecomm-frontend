import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8080/api/miu/';
class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'users/all');
    }
    getBuyerBoard() {
        return axios.get(API_URL + 'users/buyer', { headers: authHeader() });
    }
    getSellerBoard() {
        return axios.get(API_URL + 'users/seller', { headers: authHeader() });
    }
    getAdminBoard() {
        return axios.get(API_URL + 'users/admin', { headers: authHeader() });
    }
    getProductById(pid) {
        return axios.get(API_URL + 'products/' + pid, { headers: authHeader() });
    }

    getProductsBySellerId(sid) {
        return axios.get(API_URL + 'products/seller/' + sid, { headers: authHeader() });
    }
    getBuyerOrders(id){
        return axios.get(API_URL + 'orders/buyer/' + id, {headers: authHeader()});
    }
    getOrdersBySellerId(sid) {
        return axios.get(API_URL + 'seller/orders/' + sid, { headers: authHeader() });
    }

    getAllProducts() {
        return axios.get(API_URL + 'products');
    }

    addProduct(productName, price, productDescription,
                quantity, productImage, userId){
        return axios.post(API_URL + 'products/addproduct',
                            {productName, price, productDescription,
                                quantity, productImage, userId},
                        { headers: authHeader() })
    }

    newOrder(price, quantity, productId, userId){
        return axios.post(API_URL + 'orders/neworder',
            {price, quantity, productId, userId},
            { headers: authHeader() })
    }

    setSelectedProduct(pid){
        axios.get(API_URL + 'products/' + pid)
            .then(response => localStorage.setItem("product", JSON.stringify(response.data)))
            .catch(error => console.log("Error fetchinng data!"));
    }
    getSelectedProduct(){
        return JSON.parse(localStorage.getItem('product'));
    }
    removeProduct() {
        localStorage.removeItem('product');
    }

    getAllSellers() {
        return axios.get(API_URL + 'users/sellers', { headers: authHeader() });
    }

    getUnapprovedSellers() {
        return axios.get(API_URL + 'users/sellers/unapproved', { headers: authHeader() });
    }

    getAllBuyers() {
        return axios.get(API_URL + 'users/buyers', { headers: authHeader() });
    }

    getUserById(uid) {
        return axios.get(API_URL + 'users/' + uid, { headers: authHeader() });
    }

    approveUser(id, approve) {
        return axios.put(API_URL + 'users',
            {id, approve},
            { headers: authHeader() })
    }
    getOrderProductDetailByOrderId(oid) {
        return axios.get(API_URL + 'orders/productdetail/' + oid, { headers: authHeader() });
    }
    deleteOrderById(id){
        return axios.delete(API_URL + 'orders/' + id, { headers: authHeader() });
    }

    getSellerOrders(id) {
        return axios.get(API_URL + 'orders/seller/' + id, {headers: authHeader()});
    }

    deleteProductById(id) {
        return axios.delete(API_URL + 'products/' + id, { headers: authHeader() });
    }

    getApprovedSellers() {
        return axios.get(API_URL + 'users/sellers/approved', { headers: authHeader() });
    }
}
export default new UserService();