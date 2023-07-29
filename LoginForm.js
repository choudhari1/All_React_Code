import React,{useState, useEffect} from 'react'
import axios from "axios"
export const LoginForm = () => {
    const [name, setName] = useState('')
    const [password, setPasswrod] = useState('')

    // useEffect(()=>{
    //     ApiCall()
    // },[email,password])

    // function handleSubmit(e){
    //     e.preventDeafault()
    //     if(!email && !password){
    //     alert(' field is required')
    //     // setEmail(email)
    //     // setPasswrod(password)
    //     }else{
    //         //alert()
    //         ApiCall()
    //     }
    // }

  async function handleSubmit(e){
    e.preventDefault()
    // try {
    //     const response = await axios.post("https://iplayon-1xqo.onrender.com/users",{
    //         op: "validateLogin",
    //         apiUser: "KTTA1",
    //         apiKey: "dd5e611bf286042db7257ee998e5112b",
    //         emailAddress: email,
    //         password: password,
    //         typeOfLogin:"1"
    //     })
    //     alert("user successfully registerd")
    //     setEmail("")
    //     setPasswrod("")
    //     console.log('api is called on click of button')
    // } catch (error) {
    //     alert(error)
    //     console.log("error while fetching ",error)

    // }   
    
      
    // }
    // console.log("email is ", email)
    // console.log("password is ", password)
    try {
      const response = await axios.post("http://localhost:8000/create",{
        fname:name
      })
    } catch (error) {
      
    }
  }
  return (
    <div>
        <form>
            <label>Email</label>
            <input type = "text" value = {name} onChange = {(event)=>{setName(event.target.value)}} required={true}/> 
            <label>Password</label>
            <input type = "password" value = {password} onChange = {(event)=>{setPasswrod(event.target.value)}} required={true}/>   
            <button   onClick={handleSubmit}>submitt</button>
         </form>

    </div>
  )
}
