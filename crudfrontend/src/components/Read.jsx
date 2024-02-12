import React,{useState,useEffect} from "react";
import "./Read.css";
import  axios  from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



const Read = () => {
  //const notify = () => toast.delete("ya dude deleted data!");
    const[data,setData]=useState([])

    let fetchData= async()=>{
      try {

        let responce=await axios.get("https://65c9a3e23b05d29307deb466.mockapi.io/crudFrontend")
        console.log(responce.data)
        setData(responce.data)
        
      } catch (error) {
        console.log('fetching data failed',error)
        
      }

    }

    useEffect( ()=>{
      
      fetchData();

    },[])


    let  deleteHandler=(id)=>{
      axios.delete(`https://65c9a3e23b05d29307deb466.mockapi.io/crudFrontend/${id}`)
      .then(()=>{
        fetchData()
        showSuccessNotification("Item deleted successfully");
      })

    }


    const showSuccessNotification = (message) => {
      toast.error(message, {
        position: toast.POSITION,
      });
    };

    let setDataToLocalStorage=(id,name,email)=>{
      // window.localStorage.setItem('id',id);
      // localStorage.setItem('name',name);
      // localStorage.setItem('email',email);
      // console.log(id,name,email);
      // localStorage.setItem('id', JSON.stringify(id));
      // localStorage.setItem('name', JSON.stringify(name));

      // sessionStorage.setItem("id", "id");

      localStorage.setItem("id", id);
      localStorage.setItem("name",name);
      localStorage.setItem("email", email);

  //     localStorage.setItem('id', JSON.stringify(id));
  // localStorage.setItem('name', JSON.stringify(name));
  // localStorage.setItem('email', JSON.stringify(email));
   console.log(id, name, email);


 



    }
  return (
    <div>
      <h2>Read A List</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>Email address</th>

              <div>
               <div> OpeRation</div>
              </div>
            </tr>
          </thead>
          {/* <tbody>//tr,td

            {data.map((item)=>(
              <tr key={item.id}></tr>
              <td></td>
            ))}

          </tbody> */
          // ToSetDataToLocalStorage WHAT WE NEED THE DATA THAT WE HAVE TO TAKE FROM STATE 
          // onclick={()=>setDataToLocalStorage(item.id,item.name,item.email)}
          
          
          }

          <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <Link to={'/update'}>
                
              <button onClick={()=>setDataToLocalStorage(item.id,item.name,item.email)}>update</button>
              </Link>

              <button className="btn-red" onClick={()=>{deleteHandler(item.id)}}>Delete</button>
              
            </tr>
          ))}
        </tbody>

        </table>
      </div>
    </div>
  );
};

export default Read;
