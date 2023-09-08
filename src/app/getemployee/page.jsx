import 'bootstrap/dist/css/bootstrap.min.css';

async function getData(){
    const res=await fetch("http://localhost:3000/api/posts",{
        cache:"no-store",
    });
    if (!res.ok){
        throw new Error("failed")
    }
    return res.json();
}

async function GetEmployee(){
    const data=await getData()
    console.log("data")

    return(
        <div>
            <table className={"m-5"}>
                <thead>
                <tr>
                    <th className={"fs-4"}>ID</th>
                    <th className={"fs-4"}>NAME</th>
                </tr>
                </thead>
                <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td className={"text-danger fs-5"}>{user.id}</td>
                        <td className={"text-primary fs-5"}>{user.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}
export default GetEmployee