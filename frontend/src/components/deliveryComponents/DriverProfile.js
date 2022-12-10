import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import '../../css/driver.css';
axios.defaults.withCredentials=true;
function DriverProfile(){
  const [delivery, setDelivery] =useState('');
    const [user,setUser]=useState('');
    const [Name,setName]=useState('');
    const [input,setInput]=useState('');
    const [status,setStatus]=useState('');
    
    
    console.log(Name);
    console.log(user);
    
    const sendRequest = async()=>{
        try{
          
        const res = await axios.get("http://localhost:8070/drivers/user",{
              withCredentials: true,
          }).then((res)=>{
            const data =  res.data;
            setUser(data)
            setName(data.FirstName+" "+data.LastName);
        })
      }catch(err){ alert(err)};
            
      
    }
      useEffect(()=>{
        sendRequest()
      },[])

      
     
      //Get Delivery By driver Name
      const getDeliveries = async()=>{
        
        try{
        const res = await axios.post("http://localhost:8070/delivery/order/",{
          driverName: Name  
      }
        ).then((res)=>{
            const data =  res.data;
            setDelivery(data)
            console.log(data) 
        })
    }catch(err){ 
      
      console.log(err)};
            
    
    }

    useEffect(()=>{
        getDeliveries(Name);
        

    },[Name])

    const onlineStatus = async(id,value)=>{
      setStatus(value)
      try{
      const res = await axios.put("http://localhost:8070/drivers/updateStatus/"+id
      ).then((res)=>{
          alert('update successfully') 
      })
  }catch(err){ 
    
    console.log(err)};
          
  
  }

  useEffect(()=>{
      getDeliveries(Name);
      

  },[Name])

    
      
    
       
         
    function  handleChange(e){
      setInput(prev=>({
          ...prev,[e.target.name]:e.target.value
      }))
    
    }
    
    function Update(id){
      try{
        axios.put("http://localhost:8070/delivery/status/"+id,{
           CurrentStatus: input.CurrentStatus,
        }).then((res)=>{
           const data =  res.data;
           alert("Update Status Successfully")
           window.location.reload(false);
           
       })
      }catch(err){ console.log(err)};
    }

    return(
        
        
      <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">FunkeyPop Delivery</a>
 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="#" style={{color:'white'}}>Home </a>
      </li>
      

      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'white'}}>
          Delivery
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/track">Track your Delivery</a>
          
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/DriverySection">Deliver With FunkyPop</a>
        </div>
      </li>
      
    </ul>
    <ul class="nav  navbar-right">
    
      <li><a class="nav-link"  href="#" style={{color:'white'}}>{user.FirstName} {user.LastName}</a></li>
      <li><a href="/DriverLogout" style={{color:'white'}}>Logout</a></li>
    </ul>
  </div>
</nav>
        
        
      

      <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-4">
					<h2 class="heading-section">Assigned Deliveries</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
               
					<div class="table-wrap">   
              <div class="table-responsive">
 
         
                <table class="table table-sm" style={{backgroundColor:'#F5F5F5'}}>
           
                <thead class="thead-dark">
      
              <tr>

                <th>Order ID</th>
                <th>Reciver Name</th>
                <th>Tel Number</th>
                <th>Address</th>
                <th>Email</th>
                <th>Instructions</th>
                <th>Order Placed Date</th>
                <th>Order Estimate Date</th> 
                <th>Status</th>
                <th>Current Status</th>
                <th>Update Status</th>
                

              </tr>
              </thead>
          
          <tbody>
            {delivery && delivery.map((deliveryData, index) => (
              <tr key={index}>
                <td>{deliveryData.OrderID}</td>
                <td>{deliveryData.ReciverName}</td>
                <td>{deliveryData.TelNo}</td>
                <td>{deliveryData.Address}</td>
                <td>{deliveryData.Email}</td>
                <td>{deliveryData.Instructions}</td>
                <td>{deliveryData.OrderPlacedDate}</td>
                <td>{deliveryData.EssitimateDate}</td>
                <td>{deliveryData.Status.map((data, index) => (<p key={index}>{data.Status},{data.Date}</p>))}</td>
                <td>{deliveryData.CurrentStatus}</td>
                <td className="d-flex justify-content-between">
                  
                    <select class="custom-select"  name="CurrentStatus" value={input.CurrentStatus} onChange={handleChange} >
                    <option  value={deliveryData.CurrentStatus} selected disabled>{deliveryData.CurrentStatus}</option>
                    
                    <option value="Order Placed">Order Placed</option>
                    <option value="Order Processing">Order Processing</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Canceled">Canceled</option>
                   
                  
                  </select>
                  <br/>
                  <br/>
                  
                  <button className="btn btn-dark" onClick={() => { Update(deliveryData._id); } }>Update</button>
                 
  
                </td>

              </tr>
            ))}
          </tbody>

        </table>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default DriverProfile;
