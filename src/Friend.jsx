export default function Friend({fnd}){
    const {name,email} = fnd
    return(
        <div className="box">
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )
}