import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials=true

function DriverLogout(){

    const history = useNavigate();
    const sendlogin = async()=>{
        try{
        const res =await axios.post("http://localhost:8070/drivers/logout",null,{
              withCredentials: true
          }).then((res)=>{
            const data =  res.status;
            if(data== 200)
             {
                history("/DriverLogin");
             }
        
        })
      }catch(err){
          alert(err);};
            
     
      
    }
      useEffect(()=>{
        sendlogin()
      },[])

    }

export default DriverLogout;
