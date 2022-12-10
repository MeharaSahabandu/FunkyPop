import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from 'react-to-print';

 function DeliveryReport() {
    const [delivery, setDelivery] =useState('');
    const [searchID, setSearchID] =useState('');
    const [drivers, setDrivers] =useState('');
    const [assign,setAssign] = useState('');
    const [show, setShow] = useState(false);
    const [status, setStatus] = useState('All');
    const [search, setSearch] =useState('');
    const [q, setQ] = useState("");
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Delivery Report',
        onAfterPrint: () => alert('Print Success')

    });
    

    

    const getDeliveries = async()=>{
        try{
        const res =await axios.get("http://localhost:8070/delivery/AllDeliveries",
        ).then((res)=>{
            const data =  res.data;
            setDelivery(data)
        })
    }catch(err){ console.log(err)};
            
    
    }

useEffect(()=>{
    getDeliveries();

},[])


    var NoofDeliveries = 0;
    var NoOfDeliveredDeliveries = 0;
    var NoOfNewDeliveries = 0;
    var onTime=0;
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
   

    function countDeliveries(status){
        
        if (status=='Order Placed'){
           NoOfNewDeliveries += 1;

        }
        else if (status=='Delivered'){
            NoOfDeliveredDeliveries += 1;
 
         }
        

    }

    function check(eDate,status,Date){
        
       
       if (status=='Delivered'){
            if(eDate >=Date){
                onTime += 1;
            }
 
         }
        
        

    }

   console.log(onTime);

    return (
        
           
                
                    
                   
      <section class="ftco-section">
        

      <div className="container" >
            <div ref={componentRef} style={{ width: '100%', margin:'15px',height: window.innerHeight }}>
			<div class="row justify-content-center">
               
				<div class="col-md-6 text-center mb-4">
					<h2 class="heading-section text-light">FunkeyPop Delivery Report</h2>
                    
				
				</div>
                
               
			</div>
            
			<div class="row">
				<div class="col-md-12">
              
					<div class="table-wrap">   
              <div class="table-responsive">
 
         
                <table class="table text-light" >
           
                <thead class="thead-light">
               
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Order Placed Date</th>
                    <th scope="col">Order Estimate Date</th>
                    <th scope="col">Driver Info</th>
                    <th scope="col">Status</th>
                    <th scope="col">Current Status</th>

                  </tr>
                
                </thead>
          
          <tbody>
            
            {delivery && delivery.map((deliveryData, index) => (
              <tr key={NoofDeliveries = index+1} >
                <td>{deliveryData.OrderID}</td>
                <td>{deliveryData.OrderPlacedDate}</td>
                <td>{deliveryData.EssitimateDate}</td>
                <td>{deliveryData.DriverName}</td>
                <td>{deliveryData.Status.map((data, index) => (<p key={index} onLoad={check(deliveryData.EssitimateDate,data.Status,data.Date)}>{data.Status},{data.Date}</p>))}</td>
                <td onLoad={countDeliveries(deliveryData.CurrentStatus)}>{deliveryData.CurrentStatus}</td>
               

              </tr>
            ))}
            
          </tbody>
          

        </table>
            
       </div>
       </div>
       </div>
       </div>
     	<div class="row text-light">
       <div class="col-md-3 " >
            <h4 style={{float:'left'}}>No Of Deliveries:{NoofDeliveries}</h4>
                 
            <h4 style={{float:'left'}}>No Of Delivered Deliveries:{NoOfDeliveredDeliveries}</h4>
            <h4 style={{float:'left'}}>Ontime Delivered:{onTime}</h4>
           
            <h4 style={{float:'left'}}>No Of New Deliveries:{NoOfNewDeliveries}</h4>
            <h4 style={{float:'left'}}>Date-Created:{date}</h4>
            </div>
            </div>
       </div>
       <div class="row justify-content-center">
                
				<div class="col-md-3 text-center mb-4">
                <a href="/deliveries"  type="button" className="btn btnx btn-light">BACK</a>
				</div>
                <div class="col-md-3 text-center mb-4">
                <button onClick={handlePrint} type="button" className="btn btnx btn-light">Download Report</button>
                    
				
				</div>
       </div>
       </div>
       </section>
      
            
        
    )
}

export default DeliveryReport
