import React, {useEffect, useState} from 'react'
import DateTime from './DateTime'

export default function InputPage({input, setInput, setArrayInp, arrayInp}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.includes("[") && input.includes("]")){
            const textToObj = JSON.parse(input)
            setArrayInp(textToObj)

        }else{
            setArrayInp(input)
        }
        
}

  return (
    <div style={{display: "flex", flexDirection:"column",flexWrap: "nowrap", alignContent: "center", justifyContent: "center",alignItems: "center",position: "relative", borderRadius:" 2px", border: "solid black", width: "fit-content", margin: "10px auto"}}>
    
        <form onSubmit={handleSubmit} style={{margin:"10px"}}>
            <input type="text" name="name" onChange={(e)=> setInput(e.target.value)} style={{width:"350px"}}/>
            <input type="submit" value="Submit"  />
        </form>
        { typeof arrayInp === "object"  ? 
        <>
        {arrayInp.map((value, index)=>{
            return(
                <div key={index} style={{margin:"10px"}}>
                    <span>{value}</span>
                </div>
            )
        })}
        </>
        : arrayInp ?
         <div style={{margin:"10px"}}>{arrayInp}</div>
        :<DateTime/>}
    </div>
  )
}
