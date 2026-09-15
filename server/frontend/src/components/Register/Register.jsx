import React, { useState } from "react";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        console.log(userData);
    };

    return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <h2 className="text-center mb-4">
                        Sign-up
                    </h2>

                    <form onSubmit={handleSubmit}>

                        {/* Username */}
                        <div className="form-group mb-3">
                            <label htmlFor="userName">
                                Username
                            </label>

                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                className="form-control"
                                placeholder="Enter Username"
                                value={userName}
                                onChange={(e) =>
                                    setUserName(e.target.value)
                                }
                                required
                            />
                        </div>

                        {/* First Name */}
                        <div className="form-group mb-3">
                            <label htmlFor="firstName">
                                First Name
                            </label>

                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={(e) =>
                                    setFirstName(e.target.value)
                                }
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="form-group mb-3">
                            <label htmlFor="lastName">
                                Last Name
                            </label>

                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="form-control"
                                placeholder="Enter Last Name"
                                value={lastName}
                                onChange={(e) =>
                                    setLastName(e.target.value)
                                }
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="form-group mb-3">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="form-group mb-3">
                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                            />
                        </div>

                        {/* Register Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Register
                            </button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Register;
