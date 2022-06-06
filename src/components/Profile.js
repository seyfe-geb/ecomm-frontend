import React from 'react';
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Pages/Header";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <div>
            <Header />
            <div className="card card-container" style={{marginLeft:"500px"}}>
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

                <p>
                    <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>


            </div>
        </div>
    );
};

export default Profile;