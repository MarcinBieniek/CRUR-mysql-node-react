import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {

    const [newBook, setNewBook] = useState({
        title: "",
        dscr: "",
        price: null,
        cover: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/books", newBook)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1>Add new book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title" />
            <input type="text" placeholder="dscr" onChange={handleChange} name="dscr" />
            <input type="number " placeholder="price" onChange={handleChange} name="price" />
            <input type="text" placeholder="cover" onChange={handleChange} name="cover" />
            <button onClick={handleClick}>Add</button>
        </div>
    ) 
}

export default Add