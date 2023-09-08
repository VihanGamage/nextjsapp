"use client"
import React, { useState } from "react";
import {NextResponse} from "next/server";

const DeleteEmployee = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const id = e.target[0].value
        console.log(id)
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
            method: "DELETE",
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
                <button className={"btn btn-primary m-3"} type="submit">Delete Employee</button>
            </form>
        </div>
    )
}
export default DeleteEmployee