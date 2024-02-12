import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import './Update.css'

const Update = () => {
    const [input,setInput]=useState({
        id:0,
        name:'',
        email:'',
    })
    let history=useNavigate()

    useEffect(()=>{
        // setInput(localStorage.getItem("id","name","email"))
        const storeID = localStorage.getItem("id");
        const storeName = localStorage.getItem("name");
        const storeEmail = localStorage.getItem("email");
        console.log(storeID, storeName, storeEmail,"-------hk--------")
        

        setInput({
            id:storeID,
            name:storeName,
            email:storeEmail
        })
    },[])

    let handleInputData=(e)=>{
       setInput({
        ...input,
        [e.target.name]: e.target.value,
       })
    }

   
    // }

    /////----------->put api ->update here came id so we use template literals
    // already i have save data setInput and i wont to access from input state id becoz 
    // const[input,setInput]=useState store here i.e why i have to access to the from {input.id}


    let submitHandler =async(e)=>{
        e.preventDefault();
        // console.log(id)
        try {
            let responce= await axios.put(`https://65c9a3e23b05d29307deb466.mockapi.io/crudFrontend/${input.id}`,input)
            console.log(responce.data)
            setInput(responce.data)
            showSuccessNotification(" data successfully updated")

        } catch (error) {
            console.log('Error submitting on data',error)
        }
        // .then(()=>{
        //     history('/read')
        // })
        history('/read')

    }


    const showSuccessNotification = (message) => {
        toast.info(message, {
          position: toast.POSITION,
        });
      };

  return (
    <div className='container11'>
        <h2>Update data</h2>
         <form>
            <label htmlFor='name'>Name:</label>
            <input type="text" name="name" value={input.name} onChange={handleInputData}/>
            <br></br>
            <br></br>
            <label htmlFor="email">Email:</label>
            <input type="email" value={input.email} name="email" onChange={handleInputData}/>
            <br></br>
            <br></br>

          <button type="submit" onClick={submitHandler} >update</button>

        
        </form>
       <div>
        {input.name}
        <br></br>
        {input.email}
       </div>
    </div>
  )
}

export default Update