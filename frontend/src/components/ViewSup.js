import React, {useState, useEffect } from 'react';
import {NavLink}from 'react-router-dom'
import jspdf from 'jspdf'
import "jspdf-autotable"



const ViewSup=()=>{

  const[searchTerm,setsearchTerm]=useState("");//search

//view data

   const [getuserdata,setUserdata]=useState([]);
   const [ldt,setDLTdata]=useState([]);
  console.log(getuserdata);



  const getdata=async(e)=>{
 

    
    const res =await fetch("http://localhost:8070/supplier",{

      method:"GET",
      headers:{"Content-Type":"application/json"},

      
    });

 const data= await res.json();
 console.log(data);

   if (res.status===404 ||!data)
{
  console.log("error");

}else{
 setUserdata(data);
  console.log("data fetched");
}
}

  useEffect(()=>{
    getdata();
  },[]) 




  //delete supplier

const deleteuser = async (id) => {

    const res2 = await fetch(`http://localhost:8070/supplier/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
  
    const deletedata = await res2.json();
    console.log(deletedata);
  
    if (res2.status === 422 || !deletedata) {
        console.log("error");
    } else {
        console.log("user deleted");
        setDLTdata(deletedata)
        getdata();
    }
  
  
  }

  function generatePDF() {
    const doc = new jspdf();
    const tableColumn = ["Supplier ID", "Company Name", "Address", "Company Phone", "Email", "Contact Name", "Mobile", "Type"];
    const tableRows = [];

    getuserdata.slice(0).reverse().map(pdf => {
        const pdfData = [
            pdf.supplierId,
            pdf.companyName,
            pdf.address,
            pdf.companyPhone,
            pdf.contactName,
            pdf.mobile,
            pdf.type
        ];
        tableRows.push(pdfData);
    });

    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35 });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.text("SUPPLIER-Details-Report", 14, 15).setFontSize(12);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
    doc.save(`SUPPLIER-Details-Report_${dateStr}.pdf`);

}
  
  





    return(

<div>{/* className="container" */}
<section className="ftco-section">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-12 text-center mb-5">

{/* //search */}
<nav class="navbar navbar-dark bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search"   placeholder="Search" onChange={(e)=>{setsearchTerm(e.target.value);}} aria-label="Search"  />

  </form>
</nav>
<div className="row">
  <div className="col-md-12">
 <div className="table-wrap">

        <table className="table text-light">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Supplier ID</th>
      <th scope="col">Company Name</th>
      <th scope="col">Address</th>
      <th scope="col">Company Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Contact Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Type</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>

    {getuserdata.filter((val)=>{//search feature
     if(searchTerm===''){
      return val;
     }else if(
      val.supplierId.toLowerCase().includes(searchTerm.toLowerCase())||
      val.companyName.toLowerCase().includes(searchTerm.toLowerCase())||
      val.address.toLowerCase().includes(searchTerm.toLowerCase())||
      val.email.toLowerCase().includes(searchTerm.toLowerCase())||
      val.contactName.toLowerCase().includes(searchTerm.toLowerCase())||
      val.type.toLowerCase().includes(searchTerm.toLowerCase())
     ){
      return val;
     }
    }).map((element,id)=>{

        return(

            <>
            <tr>
            <th scope="row">{id+1}</th>
      <td>{element.supplierId}</td>
      <td>{element.companyName}</td>
      <td>{element.address}</td>
      <td>{element.companyPhone}</td>
      <td>{element.email}</td>
      <td>{element.contactName}</td>
      <td>{element.mobile}</td>
      <td>{element.type}</td>
      <td></td>
      <td></td>
      <td className="d-flex justify-content-between">
      <NavLink to={`updateSup/${element._id}`}> <button className="btn btn-dark" >Update</button></NavLink>
      
      <button className="btn btn-danger" onClick={() => deleteuser(element._id)}>Delete</button>
      </td>


            </tr>
            </>
        )
    })}

    

     
  
 
  </tbody>
</table>
<button className="btn btn-dark float-left"  onClick={generatePDF}>Generate Report</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

    )
}



export default ViewSup;
