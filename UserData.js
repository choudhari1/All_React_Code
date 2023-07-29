import React,{useState,useEffect} from 'react'
import axios from 'axios'
export const UserData = () => {
const [data,setData] = useState([])

useEffect(()=>{
loadData()
},[])

async function loadData(){
  const res = await axios.get("http://localhost:4000")
  setData(res.data)
}
console.log('from state',data)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        {data && (
          data.map((items)=>{
            return (
              <tbody key={items._id}>
                <tr >
                  <td >{items._id}</td>
                  <td>{items.name}</td>
                </tr>
              </tbody>
            )
          })
        )}
      </table>
    </div>
  )
}
