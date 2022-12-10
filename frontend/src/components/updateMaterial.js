import React , {useState,useEffect} from 'react';
import Axios from "axios";


export default function UpdateMaterial(){

    const [materialType, setmName] = useState('');
    const [unitPriceKG, setPrice] = useState();
    const [supplierId, setSupplier] = useState('');
    const [quantity, setQty] = useState('');
    const [ID , setID] = useState(null);

    const sendDataToUpdate =()=>{
        Axios.put('http://localhost:8070/material/update/'+ID,
        {
            materialType,unitPriceKG,supplierId,quantity
        }
        )
    }

    useEffect(()=>{
       
        setmName(localStorage.getItem('materialType'));
        setPrice(localStorage.getItem('unitPriceKG'));
        setSupplier(localStorage.getItem('supplierId'));
        setQty(localStorage.getItem('quantity'));
        setID(localStorage.getItem('ID'));
    },[]);

    return (
        <div id="booking" className="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <div className="form-header">
                                <h1>Update Materials</h1>
                            </div>
                            <form onSubmit={sendDataToUpdate}>

                                <div className="form-group">
                                    <span className="form-label">Material Name</span>
                                    <input className="form-control" type="text" value={materialType} name="mname" onChange={(e) => setmName(e.target.value)}  />
                                </div>
                                <div className="form-group">
                                    <span className="form-label">Price per KG </span>
                                    <input className="form-control" type="text" value={unitPriceKG} name="price" onChange={(e) => setPrice(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <span className="form-label">Supplier Name</span>
                                    <input className="form-control" type="text" value={supplierId} name="supplier" onChange={(e) => setSupplier(e.target.value)}/>
                                </div>


                                <div className="col-sm-7">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <span className="form-label">Quantity(KG)</span>
                                                <select className="form-control" onChange={(e) => {
                                                    setQty(e.target.value);
                                                }}>
                                                    <option>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                    <option>50</option>
                                                    <option>60</option>
                                                    <option>70</option>
                                                    <option>80</option>
                                                    <option>90</option>
                                                    <option>100</option>
                                                </select>
                                                <span className="select-arrow"></span>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="form-btn">
                                    <button className="submit-btn">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
