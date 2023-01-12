import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

    const [newBook, setNewBook] = useState({
        title: "",
        dscr: "",
        price: null,
        cover: "",
    })

    const navigate = useNavigate();
    const location = useLocation();

    const bookId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setNewBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/books/" + bookId, newBook)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1>Update book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title" />
            <input type="text" placeholder="dscr" onChange={handleChange} name="dscr" />
            <input type="number " placeholder="price" onChange={handleChange} name="price" />
            <input type="text" placeholder="cover" onChange={handleChange} name="cover" />
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    ) 
}

export default Update