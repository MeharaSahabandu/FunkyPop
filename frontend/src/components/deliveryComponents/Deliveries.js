import React,{useState,useEffect}from "react";
import axios from "axios";
import '../../css/driver.css';


  function Deliveries() {
    const [delivery, setDelivery] =useState('');
    const [searchID, setSearchID] =useState('');
    const [drivers, setDrivers] =useState('');
    const [assign,setAssign] = useState('');
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState('All');
    const [search, setSearch] =useState('');
    const [q, setQ] = useState("");
   
   
    //Get All Deliveries
        const getDeliveries = async()=>{
            try{
            const res =await axios.get("http://localhost:8070/delivery/AllDeliveries",
            ).then((res)=>{
                const data =  res.data;
                setDelivery(data)
                console.log(data) 
            })
        }catch(err){ console.log(err)};
                
        
        }

    useEffect(()=>{
        getDeliveries();

    },[])

    
    
   
//Delete Delivery
  function DeleteDelivery(id){
    if (window.confirm("Are you sure to Delete the item?")) {
    axios.delete("http://localhost:8070/delivery/delete/"+id).then((res)=>{
            setDelivery((delivery)=>
            delivery.filter((_,i) => i !== id));
            window.location.reload(false);
             
        }).catch((err)=>{
            alert(err.message);
        })
      }
}


  
  




//display relevent order
const Drivers=async()=>{
   
      try{
      const res =await axios.get("http://localhost:8070/drivers/activeDrivers",
        ).then((res)=>{
          const data =  res.data;
          setDrivers(data)
           console.log(data) 
      })
    }catch(err){ console.log(err)};
           

}

useEffect(()=>{
  Drivers();

},[])

function  handleChange(e){
  setAssign(prev=>({
      ...prev,[e.target.name]:e.target.value
  }))

}

function Assign(id){
  try{
    axios.put("http://localhost:8070/delivery/driver/"+id,{
        DriverName: assign.driver,
    }).then((res)=>{
       const data =  res.data;
       alert("Assigned Driver Successfully")
       window.location.reload(false);
       
   })
  }catch(err){ console.log(err)};
};
    
function genReport(){
  
}
  

    return(   
       <div class="row">
      <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-3 text-center mb-4">
					<h2 class="heading-section text-light" >Deliveries</h2>
				</div>
        
			</div>
			<div class="row">
				<div class="col-md-12">
        <form>
      
      
                
        <div class="col-md-3 text-center mb-4">
          <input type="text"  class="form-control" placeholder="Search using OderID" value={searchID} onChange={e => setSearchID(e.target.value)}/>
        </div>
       
        
      
    </form>
       
					<div class="table-wrap">   
              <div class="table-responsive">
 
         
                <table class="table text-light">
           
                <thead class="thead-light text-light">
               
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Reciver Name</th>
                    <th scope="col">Tel Number</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">Instructions</th>
                    <th scope="col">Order Placed Date</th>
                    <th scope="col">Order Estimate Date</th>
                    <th scope="col">Driver Info</th>
                    <th scope="col">Status</th>
                    <th scope="col">Current Status</th>
                    <th scope="col">Assign driver</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
          
          <tbody>
            
            {delivery && delivery.filter(deliveryData=>deliveryData.OrderID.includes(searchID)).map((deliveryData, index) => (
              <tr key={index}>
                <td >{index+1}</td>
                <td>{deliveryData.OrderID}</td>
                <td>{deliveryData.ReciverName}</td>
                <td>{deliveryData.TelNo}</td>
                <td>{deliveryData.Address}</td>
                <td>{deliveryData.Email}</td>
                <td>{deliveryData.Instructions}</td>
                <td>{deliveryData.OrderPlacedDate}</td>
                <td>{deliveryData.EssitimateDate}</td>
                <td>{deliveryData.DriverName}</td>
                <td>{deliveryData.Status.map((data, index) => (<p key={index}>{data.Status},{data.Date}</p>))}</td>
                <td>{deliveryData.CurrentStatus}</td>
                <td>
                <div class="form-group">
                <select class="custom-select"  name="driver" value={assign.DriverName} onChange={handleChange} >
                  <option  value=""  >Assign Driver</option>
                  {drivers && drivers.map((driverData, index) => (
                  
                  <option key={index} value={driverData.FirstName+" " +driverData.LastName}>{driverData.FirstName} {driverData.LastName}</option>
                  ))}      
                </select>
                
                  <br/>
                  
                 </div>
                </td>
                <td className="d-flex justify-content-between" >
                <button type="button" className="btn btn-dark" onClick={() => {Assign(deliveryData._id); } }>Assign</button> 
                <button type="button" className="btn btn-danger" onClick={(() => DeleteDelivery(deliveryData._id))}>Delete</button>
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
        <div class="col-md-3 text-center  mb-4">
       
       <a href={'/DeliveryReport'}  type="button" className="btn btnx btn-light" >Generate Report</a>
       </div>
			</div>
       </div>
       </section>
        </div>
        
    ) ;
  };


export default Deliveries;
