import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <div className={"col text-center mb-5 mt-5"}>
        <h1>Welcome To Employee Management System</h1>
      </div>
      <div className={"col text-center"}>
        <Link href={"/addemployee"}>
          <button className={"btn btn-primary m-3"}>Add Employee</button>
        </Link>
        <Link href={"/deleteemployee"}>
          <button className={"btn btn-primary m-3"}>Delete Employee</button>
        </Link>
        <Link href={"/editemployee"}>
          <button className={"btn btn-primary m-3"}>Edit Employee</button>
        </Link>
        <Link href={"/getemployee"}>
          <button className={"btn btn-primary m-3"}>View Employee</button>
        </Link>
      </div>
    </div>
  )
}
