"use client"
import React, { useState } from "react";
import {NextResponse} from "next/server";

const AddEmployee = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const id = e.target[0].value
        const name = e.target[1].value
        console.log(id,name)
        const res = await fetch("http://localhost:3000/api/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                name
            }),
        });
        // const data=await res.json()
        // console.log(data)
        }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="id" required />
                <input type="text" placeholder="name" required/>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    )
}
export default AddEmployee