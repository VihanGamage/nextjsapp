// "use client"
// import React, { useState, useEffect } from "react";
// import axios from "axios";
//
// function Addemployee(){
//
//     const [user,setUser]=useState({
//         id:"",
//         name:"",
//         departmentId:"",
//     },)
//
//     const onInputChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     }
//
//     const onSubmit =async (e) => {
//         e.preventDefault();
//         await axios.post("http://localhost:8080/employee",user)
//
//     }
//
//     return(
//         <div>
//             <form onSubmit={onSubmit}>
//                 <label>Employee ID :
//                     <input type="text" name="id" value={user.id} onChange={onInputChange} />
//                 </label>
//                 <label>Employee Name :
//                     <input type="text" name="name" value={user.name} onChange={onInputChange} />
//                 </label>
//                 <label>Department Id :
//                     <input type="text" name="departmentId" value={user.departmentId} onChange={onInputChange} />
//                 </label>
//                 <button type="submit">Add Employee</button>
//             </form>
//         </div>
//     )
// }
// export default Addemployee