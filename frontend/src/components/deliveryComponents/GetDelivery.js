import React from "react";
import{ useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../css/driver.css';

function GetDelivery() {
    const history = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [OrderID,setOrderID]=useState('');

    const [inputs,setInputs] = useState({
        ReciverName:"",
        Address:"",
        TelNo:"",
        Email:"",
        Instructions:"",
    })
         
    function  handleChange(e){
        setInputs(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
        
    }

    const sendData =(e)=>{
        e.preventDefault();
        setFormErrors(validate(inputs));
        setIsSubmit(true);
    }

    const getOrderID=async()=>{
        const res =await axios.get("http://localhost:8070/delivery/orderID",
        ).then((res)=>{
          const data =  res.data;
          setOrderID(data)
           
      })

    }
    useEffect(()=>{
        getOrderID()
    },[]);

    const sendRequest=async()=>{
        
    
       const res =await axios.post("http://localhost:8070/delivery/addDelivery",
            {
                OrderID:OrderID,
                ReciverName:inputs.ReciverName,
                Address:inputs.Address,
                TelNo:inputs.TelNo,
                Email:inputs.Email,
                Instructions:inputs.Instructions,    
            },).then(()=>{
                alert("You have successfully Add your delivery details.You can track your order status by order Id:"+OrderID);
                window.location.reload(false);
            }).catch(error => {
                alert(error);    
            })
        
        } 
        
        //call function sendRequest to submit data
        useEffect(()=>{
            if(Object.keys(formErrors).length === 0 && isSubmit){
                sendRequest(OrderID);
            }
        },[formErrors],[OrderID]);

        const validate =(values)=>{

            const errors={}
            
            if(!values.ReciverName){
                errors.ReciverName ="FirstName is required"
            } 
            if(!values.Email){
        
                errors.Email ="Email is required"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        
                errors.Email = 'Invalid email address'
            }
           
            if(!values.TelNo){
                errors.TelNo ="Mobile Number is required"
            }
            else if(values.TelNo.length!==10 ){
                errors.TelNo="Invalid MobileNo";
            }
            /*else if(isNaN(values.MobileNo)){
                errors.TelNo="Invalid MobileNo";
            }*/
            if(!values.Address){
                errors.Address ="Address is required"
            }
        
            return errors
        }
    return(
    
        <div id="delivery" class="Dsection2">
        <div class="Dsection2-center">
            <div class="Dcontainer">
                <div class="row">
                    <div class="delivery-form">
                        
                        
                            

            <form onSubmit={sendData}>
            <div class="form-header">
                    <h1 class="Dh1">Add Delivery Details</h1>
                    <h3 class="error">OrderID:{OrderID}</h3>
            </div>
                <div class="row">
               
                    <div class="col-md-6">      
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Reciver Name"name="ReciverName" value={inputs.ReciverName} onChange={handleChange}/>
                            <p class="error">{formErrors.ReciverName}</p>
                        </div>
                        <div class="form-group">
                            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Mobile Number *" name="TelNo" value={inputs.TelNo} onChange={handleChange}/>
                            <p class="error">{formErrors.TelNo}</p>
                        </div>            
                        
                    </div>
                                    
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="Email" class="form-control"  placeholder="Email "name="Email"value={inputs.Email} onChange={handleChange}/>
                            <p class="error">{formErrors.Email}</p>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control"   placeholder="Address *" name="Address" value={inputs.Address} onChange={handleChange}/>
                            <p class="error">{formErrors.Address}</p>
                        </div>
                        
                    </div>
                        
                    <div class="col-md-12 ">  
                        <div class="form-group">
                            <input type="text" class="form-control"  placeholder="Delivery Instructions "  name="Instructions"value={inputs.Instructions} onChange={handleChange}/>
                        </div> 
                    </div>
                        <div class="col-sm-12 text-center">
                            <input type="submit" className="btnD"value="ADD" />
                        </div>
                </div>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
    
}

export default GetDelivery;
