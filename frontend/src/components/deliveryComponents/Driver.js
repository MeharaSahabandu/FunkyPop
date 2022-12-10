import React,{useState,useEffect}from "react";

import axios from "axios";
import { NavLink } from "react-router-dom";
import '../../css/driver.css';



function AllDrivers(){
    
    const [drivers, setDrivers] =useState('');
    
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  
        const getDrivers = async()=>{
            try{
            const res =await axios.get("http://localhost:8070/drivers/",
              ).then((res)=>{
                const data =  res.data;
                setDrivers(data)
                 console.log(data) 
            })
          }catch(err){ console.log(err)};
                
          
        }

    useEffect(()=>{
        getDrivers();
   
     },[])

    function DeleteDriver(id){
        if (window.confirm("Are you sure to Delete the item?")) {
        axios.delete("http://localhost:8070/drivers/delete/"+id).then((res)=>{
                setDrivers((drivers)=>
                drivers.filter((_,i) => i !== id));
                window.location.reload(false);
                 
            }).catch((err)=>{
                alert(err);
            })
        }

    }
   
        
      
    


    return(

        
     <div class="row">
            
           
        <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-4">
					<h2 class="heading-section text-light">Delivery Drivers</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
               
					<div class="table-wrap">   
                    <div class="table-responsive">
 
         
                    <table class="table text-light">
           
                    <thead class="thead-light text-light">
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">NIC</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Account Status</th>
                        <th scope="col">Driver Status</th>
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                
                <tbody>
                    {drivers && drivers.map((driverData, index) => (
                        <tr key={index} >
                            <td >{index+1}</td>
                            <td>{driverData.FirstName} {driverData.LastName}</td>
                            <td>{driverData.Gender}</td>
                            <td>{driverData.Age}</td>
                            <td>{driverData.NIC}</td>
                            <td>{driverData.MobileNo}</td>
                            <td>{driverData.Email}</td>
                            <td>{driverData.Account}</td>
                            <td>{driverData.Status}</td>
                            <td>{driverData.VehicleType}</td>
                            
                            <td className="d-flex justify-content-between">
                            <button className="btn btn-dark"><a href={'/ViewDriver/'+driverData._id} style={{color:'white',textDecoration:'none'}}>View</a></button>
                                
                                <button className="btn btn-dark"><a href={'/UpdateDriver/'+driverData._id} style={{color:'white',textDecoration:'none'}}> Update</a></button>
                                <button className="btn btn-danger" onClick={(()=>DeleteDriver(driverData._id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            </div>  
            </div> 
            </div> 
            </div> 
            <div class="row justify-content-center">
			<div class="col-md-3 text-center mb-4">
                <a href="/DeliveryManager"  type="button" className="btn btnx btn-light">BACK</a>
            </div>
            </div>   
            </div>
            </section>
            </div> 
        
    )

}

export default AllDrivers;
