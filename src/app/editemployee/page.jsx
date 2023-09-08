"use client"
import React, { useState } from "react";
import {NextResponse} from "next/server";

const EditEmployee = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const id = e.target[0].value
        const name = e.target[1].value
        console.log(id,name)
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                name
            }),
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="id" required />
                <input type="text" placeholder="name" required/>
                <button type="submit">Edit Employee</button>
            </form>
        </div>
    )
}
export default EditEmployee