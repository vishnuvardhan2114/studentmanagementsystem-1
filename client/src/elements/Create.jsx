import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        location: '',
        email: '',
        dob: '',
        education: ''
    })

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        axios.post('/add_user', values)
            .then((res) => {

                navigate('/')
                console.log(res)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="ml-[6%]  bg-white">
            <div className='row'>
                <h3 className="text-center text-3xl font-bold ">Update Student Details</h3>
                <div className='d-flex justify-content-end my-3'>
                    <Link to='/' class='btn btn-dark '>Home</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-group my-3 mt-2'>
                        <label htmlFor='firstname'>FirstName</label>
                        <input type='text' name='firstname' required onChange={(e) => setValues({ ...values, firstname: e.target.value })} />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='lastname'>LastName</label>
                        <input type='text' name='lastname' required onChange={(e) => setValues({ ...values, lastname: e.target.value })} />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='location'>Location</label>
                        <input type='text' name='location' required onChange={(e) => setValues({ ...values, location: e.target.value })} />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' required onChange={(e) => setValues({ ...values, email: e.target.value })} />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='dob'>DOB</label>
                        <input type='date' name='dob' required onChange={(e) => setValues({ ...values, dob: e.target.value })} />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='education'>Education</label>
                        <input type='email' name='education' required onChange={(e) => setValues({ ...values, education: e.target.value })} />
                    </div>
                    <div className="mt-[50px] flex">
                        <label className="text-[20px] font-semibold block">
                            About <span className="pl-10">:</span>
                            <input name="about"
                                value={values.about}
                                onChange={(e) => setValues({ ...values, education: e.target.value })} />
                        </label>
                    </div>
                    <div className='form-group my-3 mx-3 '>
                        <button type='submit' className='btn btn-dark'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create