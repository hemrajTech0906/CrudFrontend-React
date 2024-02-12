import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import './Create.css'


const Create = () => {
 
  const notify = () => toast.success("ya dude created data!");

    const [input,setInput]=useState({
        name:"",
        email:"",
    })
   
    let history=useNavigate()

    let handleInputData=(e)=>{
        // setInput(e.target.value)
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        })

    }
      // we have to store the data in dummy is just line anykingofdatabase
      // we have used axois 
    let submitHandler =async(e)=>{
      if (!input.name.trim() || !input.email.trim()) {
        // If name or email is empty, show a toast message
        
         alert('Please enter details here')
        return toast.error('Name and email are required'); // imp before that it will empty data submit return
      }
        e.preventDefault();

        // showSuccessNotification("please fill the values of input fields")

        try {
            let responce= await axios.post('https://65c9a3e23b05d29307deb466.mockapi.io/crudFrontend',input)
            console.log(responce.data)
            setInput(responce.data)
            // notify("done1")
            showSuccessNotification("please fill the values of input fields")
           
        } catch (error) {
            console.log('Error submitting on data',error)
        }
        

        history('/read')

    }

            // not working--->This logic-->validation not pass it not showing toast


  //  const showSuccessNotification = (message) => {
  //   if(!input.name.trim() ||!input.email.trim()){
       
  //     toast.error(message, {
  //       position: toast.POSITION,
  //     });
      
  //       return;

  //   }
        
  //     };

    

    

    
  return (
    <div className='container'>
        <form onSubmit={submitHandler} >
        
          <br></br>
          <br></br>
            <label htmlFor='name'>Name:</label>
            <input type="text" name="name" value={input.name} onChange={handleInputData}/>
            <br></br>
            <br></br>
            <label htmlFor="email">Email:</label>
            <input type="email" value={input.email} name="email" onChange={handleInputData}/>
            <br></br>
            <br></br>

         
          <div>
          <button type="submit" onClick={notify} >Submit</button>
        
      </div>

        
        </form>
       <div>
        {input.name}
        <br></br>
        {input.email}
       </div>
    </div>
  )
}

export default Create