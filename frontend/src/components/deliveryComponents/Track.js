import React from "react";
import{ useState,useEffect } from "react";
import axios from "axios";
import '../../css/track.css';
function Track(){
    const [delivery, setDelivery] =useState('');
    const [input,setInput]=useState('');
    console.log(input)
    const Search = async()=>{

        console.log(input)
        try{
        const res =await axios.post("http://localhost:8070/delivery/orderID/",{
            OrderID:input
        }
        ).then((res)=>{
            const data =  res.data;
            setDelivery(data)
            console.log(data) 
        })
    }catch(err)
    { console.log(err)};
    
       
    }

    function  handleChange(e){
        setInput(e.target.value,
                  
        ) 
        
    }

    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

    
    return(

       
       
            

                
            
            
  
        
		
        <>
        <section class="ftco-section text-light">
		<div class="container">
        <div class="row justify-content-center">
             <div class="col-md-3 text-center mb-4">
            	
                <form>
                    <input type="search" class="form-control  " placeholder="Search" name="input"  value={input} onChange={handleChange} />
                    <button type="button" class="btn btnx btn-light" onClick={Search}>search</button>
                </form>
            </div>
        </div>
        </div>
         </section>
          
            
           

            
            
                    
                    
                
           
            {delivery && delivery.map((deliveryData, index) => (
            <><table class='track text-light'key={index}>
                    <tbody>
                        <tr><td colSpan={5} style={{textAlign:'center',padding:'10px'}} ><h1>OrderID - {deliveryData.OrderID}</h1></td></tr>
                        <tr>
                            <td>ReciverName </td>
                            <td>- {deliveryData.ReciverName}</td>
                            <td ></td>
                            <td>Order Placed Date </td>
                            <td>- {deliveryData.OrderPlacedDate}</td>
                        </tr>
                        <tr>
                            <td>Address </td>
                            <td>- {deliveryData.Address}</td>
                            <td></td>
                            <td>Order Estimate Date  </td>
                            <td>- {deliveryData.EssitimateDate}</td>

                        </tr>
                        <tr>
                            <td>Tel Number </td>
                            <td>- {deliveryData.TelNo}</td>
                            <td ></td>
                            <td>Delivery Driver </td>
                            <td>- {deliveryData.DriverName}</td>
                        </tr>
                        <tr>
                            <td>Email </td>
                            <td>- {deliveryData.Email}</td>
                            <td></td>
                            <td>Current Status</td>
                            <td  style={{color:'red' }}>- {deliveryData.CurrentStatus}</td>
                        </tr>
                        <tr>
                            <td>Delivery Instructions</td>
                            <td>- {delivery.Instructions}</td>

                        </tr>
                        <tr><td colSpan={5}></td></tr>
                   <tr><td colSpan={5} style={{padding:'20px'}} >
               
                <div class="col">

                        <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                            {deliveryData.Status.map((data, index) => (
                                <div class="timeline-step" key={index}>
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover">
                                        <div class="inner-circle"></div>
                                        <p class="h6 mt-3 mb-1">{data.Status}</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">{data.Date}</p>
                                    </div>
                                </div>))}




                        </div>

                    </div>
                    </td>
                    </tr>
                    <tr><td colSpan={5} style={{textAlign:'center' }} ><h4>Created on - {date}</h4></td></tr>
                    </tbody>
                </table>
                    
                    </>

            ))}
             </>



            

)}

export default Track