"use client"
import React, { useState } from "react";
import {NextResponse} from "next/server";

const AddEmployee = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const id = e.target[0].value
        const name = e.target[1].value
        const res = await fetch("/api/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                name
            }),
        });
        alert("employee added")
        }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="id" required />
                <input type="text" placeholder="name" required/>
                <button className={"btn btn-primary m-3"} type="submit">Add Employee</button>
            </form>
        </div>
    )
}
export default AddEmployee