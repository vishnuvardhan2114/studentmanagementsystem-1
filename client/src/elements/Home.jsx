import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa"

function Home() {
    const [data, setData] = useState(() => fetchrecords())
    const [deleted, setDeleted] = useState(true)
    async function fetchrecords() {
        const data = await axios.get('http://localhost:5000/')
            .then((res) => res.data)
            .catch((err) => console.log(err))
        console.log(data)
        return data;
    }
    async function updatedata() {
        const responce = await fetchrecords()
        console.log(typeof responce)
        setData(responce)

    }
    useEffect(() => {
        updatedata()
    }, [])
    useEffect(() => {
        if (deleted) {
            setDeleted(false)
            axios.get('/students')
                .then((res) => {
                    setData(res.data)
                })
                .catch((err) => console.log(err))
        }
    }, [deleted])

    function handleDelete(id) {
        axios.delete(`/delete/${id}`)
            .then((res) => {
                setDeleted(true)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="container">
            <h3>Student Management System</h3>
            <div className="container mt-4 d-flex justify-content-between align-items-center" style={{ marginBottom: "20px" }}>
                <InputGroup className=" me-3" style={{ width: "20%" }} >
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        style={{
                            borderRadius: "5px",
                            backgroundColor: "#F0F0F0",
                            borderColor: "#F0F0F0",
                        }}
                    />
                    <InputGroup.Text
                        style={{
                            backgroundColor: "#F0F0F0",
                            borderColor: "#F0F0F0",
                        }}
                    >
                        <FaSearch />
                    </InputGroup.Text>

                </InputGroup>

                <div className='d-flex justify-content-end '>
                    <Link className='btn btn-dark ' to='/create'>Add</Link>
                </div></div>
            <table className="container-fluid">
                <thead>
                    <tr>
                        <th className="py-10 px-2">ID</th>
                        <th>FirstName</th>
                        <th>LastName </th>
                        <th>Location </th>
                        <th>Email </th>
                        <th>DOB </th>
                        <th>education  </th>
                        <th>Action  </th>
                        <th>Delete  </th>
                    </tr>
                </thead>
                <tr>
                    <td colSpan="9">
                        <hr />
                    </td>
                </tr>

                <tbody>
                    {
                        data.map((student) => {
                            return (<tr>
                                <td className="text-center" >{student.ID}</td>
                                <td className="text-center">{student.first_name}</td>
                                <td className="text-center">{student.last_name}</td>
                                <td className="text-center">{student.location}</td>
                                <td className="text-center">
                                    <a href={"mailto:" + student.email}>  {student.email}</a></td>
                                <td className="text-center">{student.DOB}</td>
                                <td className="text-center">{student.education}</td>
                                <td>
                                    <Link className='text-center' to={`/edit/${student.id}`}>Edit</Link>
                                    <button onClick={() => handleDelete(student.id)} className='btn mx-2 btn-danger'>Delete</button>
                                </td>

                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home