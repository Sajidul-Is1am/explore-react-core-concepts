import { useState } from "react"

export default function Team(){
    const [team,setTeam] = useState(11)


    const handleAdd = () =>{
        let incrementPlayer = team+1;
        setTeam(incrementPlayer);
    }

    const handleRemove = () =>{
        let decrementPlayer = team -1;
        setTeam(decrementPlayer)
    }


     const teamStyls ={
        padding:"20px",
        margin:"20px",
        border:"2px solid purple",
        borderRadius:"20px"
     }
    return(
        <div style={teamStyls}>
            <h4>Players: {team}</h4>
            <button onClick={handleAdd} style={{marginRight:"20px"}}>Add player</button>
            <button onClick={handleRemove} style={{marginLeft:"20px"}}>Remove player</button>
        </div>
    )
}