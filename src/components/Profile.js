import React from 'react';
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Pages/Header";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <div>
            <Header />
            <div className="card card-container" style={{marginLeft:"50px"}}>
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.username}</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Id : </strong> {currentUser.id}
                </p>

                <p>
                    <strong>First Name : </strong> {currentUser.firstName}
                </p>

                <p>
                    <strong>Last Name : </strong> {currentUser.lastName}
                </p>

                <p>
                    <strong>Email:</strong> {currentUser.email}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {currentUser.roles &&
                        currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>

                <p>
                    <strong>Created At:</strong> {currentUser.createdAt}
                </p>

                <p>
                    <strong>Modified At:</strong> {currentUser.modifiedAt}
                </p>

                <p>
                    <strong>Is account enabled:</strong> {currentUser.enabled + ''}
                </p>

                <p>
                    <strong>Is user an approved seller:</strong> {currentUser.approvedSeller + ''}
                </p>
            </div>
                <div className="card card-container" style={{marginLeft:"50px"}}>

                    <h3>Address</h3>
                    <p>
                        <strong>Street:</strong> {currentUser.street}
                    </p>

                    <p>
                        <strong>City:</strong> {currentUser.city}
                    </p>

                    <p>
                        <strong>State:</strong> {currentUser.enabled + ''}
                    </p>

                    <p>
                        <strong>Zip Code:</strong> {currentUser.zipcode}
                    </p>
                </div>
                <div className="card card-container" style={{marginLeft:"50px"}}>
                    <h3>Payment Information</h3>
                    <p>
                        <strong>CardName:</strong> {currentUser.cardName}
                    </p>

                    <p>
                        <strong>CardType:</strong> {currentUser.cardType}
                    </p>

                    <p>

                        <strong>CardNumber:</strong> {currentUser.cardNumber}
                    </p>

                    <p>
                        <strong>CardCVV:</strong> {currentUser.cardCVV}
                    </p>

                </div>

                {/*<p>*/}
                {/*    <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}*/}
                {/*    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}*/}
                {/*</p>*/}



        </div>
    );
};

export default Profile;