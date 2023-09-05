
async function getData(){
    const res=await fetch("http://localhost:3000/api/posts")
    if (!res.ok){
        throw new Error("failed")
    }
    return res.json();
}

async function GetEmployee(){
    const data=await getData()

    return(
        <div className="container">
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                </tr>
                </thead>
                <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}
export default GetEmployee