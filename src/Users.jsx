import { useEffect, useState } from "react"

export default function Users(){
    const [Users,setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(respons => respons.json())
        .then(data => setUser(data))
    },[]);

    return(
        <div>
            <h1>Users : {Users.length}</h1>
        </div>
    )
}