import './App.css';

import Navbar from'./components/Navbar';
import ViewSup from'./components/ViewSup';
import Dashboard from'./components/Dashboard';
import '../src/css/dashboard.css';
import'../src/css/formStyles.css';
import RegisterSup from './components/RegisterSup';
import UpdateSup from './components/UpdateSup';
import ViewStockO from './components/ViewStockO';
import AddStockO from './components/AddStockO';
import UpdateStockO from './components/UpdateStockO';


import Header from './components/EmpHeader';
import RegEmp from './components/RegEmp';
import '../src/css/RegEmp.css';


import Salary from './components/Sal';
import Atten from './components/Atten';
import './css/Atten.css';







import './css/ReadEmp.css'
//import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddSal from './components/AddSal';
import ViewSal from './components/ViewSal';
import Emp from './components/Emp';
import RemEmp from './components/RemEmp';
import Read from './components/ReadEmp';
import AddMaterial from './components/addMaterialForm';
import InvenHeader from './components/InvenHeader';
import EmpLogin from './components/EmpLogin';

import UpdateEmp from './components/UpdateEmp';
import MaterialTable from './components/materialTable';
import UpdateMaterial from './components/updateMaterial';
import UpdateSal from './components/UpdateSal';
import UpdateExpense from './components/updateExp';

import MaterialNav from './components/materialNav';

import FinanceNav from './components/FinanceNav';
import ViewExpense from './components/ViewExpense';
import AddExpense from './components/AddExpense';
import ExpenseReport from './components/ExpenseReport';
import ViewStock from './components/StockReport';
import ExpenseHeader from './components/ExpenseNav';

import React from "react";
import AllItemsCart from './components/FetchCart';
import ViewProduct from './components/ViewProduct';
import CartHeader from './components/CartHeader';
import ViewCart from './components/ReadCart';
import UpdateCarts from './components/UpdateCarts';

//member managemet.
import AddMember from './components/AddMember';
import MemberHeader from './components/MemberHeader';
import MemberList from './components/MemberList';
import PRManagerHeader from './components/PRManagerHeader';
import Inspect from './components/Inspect';
import MemberLogin from './components/MemberLogin';
import MemberProfilePage from './components/MemberProfilePage';
import UpdateMember from './components/UpdateMember';
import MemberListReport from './components/MemberListReport';

import PurchaseReport from './components/PurchaseReport';
import MaterialReport from './components/materialReport';
//new
import ReadAttendance from './components/ReadAttendance'; 
import NavigateEmployee from './components/NavigateEmployee';
import AttendanceHeader from './components/AttendanceHeader';
import LoginHeader from './components/LoginHeader';
import SalReport from './components/SalReport';

import LoginHeaderN from './components/LoginHeaderN';


//Delivery
import Deliveries from './components/deliveryComponents/Deliveries';
import AllDrivers from './components/deliveryComponents/Driver';
import DeliveryHeader from './components/deliveryComponents/DeliveryHeader';
import GetDelivery from './components/deliveryComponents/GetDelivery';
import DriverSignup from './components/deliveryComponents/DriverSignup';
import DriverLogin from './components/deliveryComponents/DriverLogin';
import ViewDriver from './components/deliveryComponents/viewDriver';
import UpdateDriver from './components/deliveryComponents/UpdateDriver';
import Track from './components/deliveryComponents/Track';
import DriverProfile from './components/deliveryComponents/DriverProfile';
import DriverLogout from './components/deliveryComponents/Driverlogout';
import DeliveryReport from './components/deliveryComponents/deliveryReport';
import DeliveryManager from './components/deliveryComponents/DeliveryManager';
import DeliverySection from './components/deliveryComponents/DeliveryMenuSection';
import DriverSection from './components/deliveryComponents/DriverSection';
import DriverHeader from './components/deliveryComponents/DriverHeader';


import MainHome from './components/mainPage';



// have removed fiance from path line 59

function App() {
  return (
    <Router>

      <div className='App'>

        <Routes>

          <Route path="/viewSupplier" element={<><Navbar/><ViewSup/></>}/>
          <Route path="/home" element={<><Navbar/><Dashboard/></>}/>
          <Route path="/addsup" element={<><Navbar/><RegisterSup/></>}/>
          <Route path="/updateSup/:id" element={<><Navbar/><UpdateSup/></>}/>
          <Route path="/viewOrder" element={<><Navbar/><ViewStockO/></>}/>
          <Route path="/addOrder" element={<><Navbar/><AddStockO/></>}/>
          <Route path="/updateStock/:id" element={<><Navbar/><UpdateStockO/></>}/>

          <Route path="/add" element={<><AttendanceHeader /><RegEmp /></>} />
          <Route path="/Sal" element={<><AttendanceHeader /><Salary /></>}/>
          <Route path="/atten" element={<><AttendanceHeader /><Atten /></>} />
          <Route path="/AddSal" element={<><AttendanceHeader /><AddSal /></>} />
          <Route path="/ViewSal" element={<><Header /><ViewSal /></>} />
          <Route path="/Emp" element={<><AttendanceHeader/><Emp /></>}/>
          <Route path="/RemoveEmp" element={<RemEmp />} />

          <Route path='/navE' element={<><LoginHeaderN/><NavigateEmployee/></>}/>


          <Route path='SalReport' element={<SalReport/>}/>

          <Route path="/Read" element={<><Header /><Read /></>}/>
          <Route path='/loginEmp' element={<><LoginHeader /><EmpLogin></EmpLogin></>}/>
          <Route path='/update' element={<><Header/><UpdateEmp/></>}/>

      
          <Route path="/finance" element={<FinanceNav />} /> 
          <Route path="/view" element={<><ExpenseHeader/><ViewExpense /></>} />
          <Route path="/addExp" element={<AddExpense />} />
          <Route path="/updateExp" element={<UpdateExpense />} />
          <Route path="/expenseReport" element={<ExpenseReport />} />
          <Route path="/stockReport" element={<><ExpenseHeader/><ViewStock /></>} />

          <Route path="/addmat" element={<><InvenHeader /><AddMaterial /></>} />
          <Route path="/materials" element={<><InvenHeader /><MaterialTable/></>}/>
          <Route path="/updatemat" element={<><InvenHeader /><UpdateMaterial/></>}/>
          <Route path="/updateSal" element={<UpdateSal/>}/>
          
          <Route path="/AllCarts" element={<><CartHeader/><AllItemsCart/></>}/>
          <Route path="/viewPro" element={<><CartHeader/><ViewProduct/></>}/>
          <Route path="/ReadCart" element={<><CartHeader/><ViewCart/></>}/>
          <Route path="/updateCarts" element={<><CartHeader/><UpdateCarts/></>}/>

          <Route path="/memberSignup" element={<><MemberHeader/><AddMember/></>}/>
          <Route path="/getMemberList" element={<><PRManagerHeader/><MemberList/></>}/>
          <Route path="/inspectMember/:id" exact element={<Inspect/>}/>
          <Route path='/MemberLogin' element={<><MemberHeader/><MemberLogin/></>}/>
          <Route path="/memberProfile" element={<><MemberProfilePage></MemberProfilePage></>}/>
          <Route path="/updateMember" element={<><MemberHeader/><UpdateMember/></>}/>
          <Route path="/memberListReport" element={<><PRManagerHeader/><MemberListReport/></>}/>
          
          <Route path="/checkout" element={<><CartHeader/><PurchaseReport/></>}/>
          
                                           
          <Route path="/viewAttendance" element={<><Header/><ReadAttendance/></>}/>
        
          <Route path="/viewAttendance" element={<ReadAttendance/>}/>
          <Route path="/" element={<MainHome/>}/>
        
          
          <Route path="/matReport" element={<><InvenHeader /><MaterialReport/></>}/>
          <Route path="/MatNavi" element={<MaterialNav/>}/>

          <Route path="/AllDrivers" element={<><DeliveryHeader/><AllDrivers/></>}/>
          <Route path="/Deliveries" element={<><DeliveryHeader/><Deliveries/></>}/>
          <Route path="/Delivery" element={<><DeliveryHeader/><GetDelivery/></>}/>
          <Route path="/DriverSignup" element={<><DriverHeader/><DriverSignup/></>}/>
          <Route path="/DriverLogin" element={<>< DriverHeader/><DriverLogin/></>}/>
          <Route path="/ViewDriver/:id" element={<><DeliveryHeader/><ViewDriver/></>}/>
          <Route path="/UpdateDriver/:id" element={<><DeliveryHeader/><UpdateDriver/></>}/>
          <Route path="/Track" element={<><DeliveryHeader/><Track/></>}/>
          <Route path="/DriverProfile" element={<DriverProfile/>}/>
          <Route path="/DriverLogout" element={<DriverLogout/>}/>
          <Route path="/DeliveryReport" element={<DeliveryReport/>}/>
          <Route path="/DeliveryManager" element={<><DeliveryHeader/><DeliveryManager/></>}/>
          <Route path="/DriverSection" element={<><DeliveryHeader/><DriverSection/></>}/>
          <Route path="/DeliverySection" element={<><DeliveryHeader/><DeliverySection/></>}/>
         

          <Route path="/mainpage" element={<MainHome/>}/>

        </Routes>

        
      </div>

    </Router>
  );
}

export default App;
