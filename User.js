import React,{useState,useEffect} from 'react'
import axios from 'axios'
export const User = () => {
    const [name,setName] = useState('')
    const [data, setData] = useState([])

    useEffect(()=>{
        load()
    },[])
    async function load(){
        const response = await axios.get("http://localhost:8000/")
        setData(response.data)
        console.log(response.data)
    } 

    async function handleSubmit(e){
        e.preventDefault()
        if(!name){
            alert('field empty')
        }
        else{
        try {
            const response =  await axios.post("http://localhost:8000/create",{
                fname:name
            })
            load()
            console.log(response.data)
            setName('')
        } catch (error) {
            
        }
    }
    }

  return (
    <div>
        <form>
            <input type="text" value = {name} onChange={(e)=>setName(e.target.value)} required={true}/>
            <button onClick={handleSubmit}>Register</button>
        </form>

        {data && (
            <ul>{data.map((item)=>{
                return (
                    <li>{item.fname}</li>
                )
            })}</ul>
        )}
    </div>
  )
}
