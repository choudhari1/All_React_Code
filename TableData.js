import axios from 'axios'
import React,{useEffect, useState} from 'react'

export const TableData = () => {
    const [name,setName] = useState('')
    const [lname,setLname] = useState('')
const [data, setData] = useState([])


useEffect(()=>{
    loadData()
},[])

async function loadData(){
    const response = await axios.get("http://localhost:8000/")
    setData(response.data)
}

async function submit(e){
    try{
        var id = 0
    e.preventDefault()
    await axios.post("http://localhost:8000/create-data",{
        id:id+1,
        name:name,
        lname:lname
    })
    loadData()
    setName('')
    setLname('')
}
catch(err){
    console.log(err)
}
}

async function deleteUser(id){
    const data = await axios.delete(`http://localhost:8000/delete/${id}`)
    console.log('delete data',data)
    loadData()
}

async function EditUser(user){
    setName(user.name)
    setLname(user.lname)
}

// async function update(e){
//     e.preventDefault()
//     try{
//         await axios.patch(`http://localhost:8000/update/${}`,{
//             name:name,
//             lname:lname
//         })
//     }
//     catch(er){
//         console.log(er)
//     }
// }
  return (
    <>
    
    {/* <div>{data.map((items)=>{
        return (
            <>
            <li>{items.name}</li>
            <li>{items.lname}</li>
            </>
        )
    })}</div> */}
    <table>
        <thead>
            <tr>
            <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
            </tr>
        </thead>

        {data && (
            data.map((items)=>{
                return(
                    <>
                    <tbody>
                        <tr>
                        <td>{items._id}</td>
                            <td>{items.name}</td>
                            <td>{items.lname}</td>
                            <td>
                            <button onClick={()=>EditUser(items)}>Edit</button>
                            <button onClick={()=>deleteUser(items._id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    </>
                )
            })
        )}
    </table>
    <br/>
    <br/>
    <form>
        <label>FName:&nbsp;&nbsp;</label>
    <input type="text" value = {name} onChange={(e)=>setName(e.target.value)}/><br/>
    <label>LName:&nbsp;&nbsp;</label>
    <input type="text" value = {lname} onChange={(e)=>setLname(e.target.value)}/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={submit}>submit</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button >update</button>
    </form>
    </>
  )
}
