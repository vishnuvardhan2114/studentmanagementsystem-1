import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        location: '',
        email: '',
        dob: '',
        education: '',
        about: '',
    });

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        axios.post('/add_user', values)
            .then((res) => {
                navigate('/');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    return (
        <div className="container">
            <div className="row">
                <h3 className="text-center display-4 my-4">Update Student Details</h3>
                <div className="d-flex justify-content-end my-3">
                    <Link to="/" className="btn btn-dark">Home</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            value={values.firstname}
                            required
                            onChange={handleInputChange}
                            className="form-control"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input
                            type="text"
                            name="lastname"
                            value={values.lastname}
                            required
                            onChange={handleInputChange}
                            className="form-control"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={values.location}
                            required
                            onChange={handleInputChange}
                            className="form-control"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            required
                            onChange={handleInputChange}
                            className="form-control"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">DOB</label>
                        <input
                            type="date"
                            name="dob"
                            value={values.dob}
                            required
                            onChange={handleInputChange}
                            className="form-control"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="education" className="form-label">Education</label>
                        <input
                            type="text"
                            name="education"
                            value={values.education}
                            required
                            onChange={handleInputChange}
                            className="form-control"
                            style={{ maxWidth: '300px' }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="about" className="form-label">About</label>
                        <textarea
                            name="about"
                            value={values.about}
                            onChange={handleInputChange}
                            className="form-control"
                            rows="4"
                            style={{ maxWidth: '500px' }}
                        ></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-dark mx-3">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
