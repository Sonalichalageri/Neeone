import react, { useEffect } from "react";
import "./EditUser.scss";
import Select, { Options } from "react-select";
import React, { useState } from "react";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SideBar from "../SideBar/SideBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios, {AxiosError} from 'axios';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditUser = () => {

  const{userId} = useParams<any>();   
  
  const [customerName, setName] = useState<any>("");
  const [customerEmail, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [confirmPassword, setConfirmPassword] = useState<any>("");
  const [role, setRole] = useState<any>("");
  const [mobile, setMobile] = useState<any>("");
  const [status, setStatus] = useState<any>("");
  
  const roleList: any = [
    { value: '1', label: 'Admin' },
    { value: '2', label: 'Support' },
    { value: '3', label: 'Developer' },
  ];

  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();

  const switchMenu = (e:any) => {
      navigate("/admin/manageuser"); 
  }
 

  const UpdateUser = () => {

    if(password !=confirmPassword){
      toast.error('New Password and Confirm Password must be same.');
      return false;
    }

    const customerData = { 
      customerId:userId, 
      customerName:customerName, 
      customerEmail:customerEmail, 
      password:password, 
      confirmPassword:confirmPassword, 
      role:role,
      status:status, 
      mobileNo:mobile
    };
  
      axios.put(`http://localhost:8080/customer/update/${userId}`, customerData, {
          headers: { "Content-Type": "application/json" }
      })
      .then(response => {
          // console.log("New Student added");
          toast.success('User Updated Successfully.');
          
          setTimeout(()=>{
            navigate("/admin/manageuser");
          },2000);
      })
      .catch(error => {
          console.error("Error Occured while update", error);
          // Handle error (e.g., display error message)
      });
  };

 
  // To get user details by userid 
  const getUserDetails = async () => {

    // Make a GET request to retrieve all customers
    await axios.get(`http://localhost:8080/customer/find/${userId}`, {
        headers: { "Content-Type": "application/json" }
    })
    .then((response) => {
        // console.log(response.data);

        if(response.data!=undefined){
            // console.log(response.data.customerName);

            setName(response.data.customerName);
            setEmail(response.data.customerEmail);
            setRole(response.data.role);
            setMobile(response.data.mobileNo);
            setStatus(response.data.status);
            setPassword(response.data.password);
            setConfirmPassword(response.data.password);
        }
        // // Handle successful response
        // console.log("List of all customers:", response.data);
      //  setUserList([]);
        // setUserList(response.data);
        // // You can then do something with the list of customers, like updating state or displaying them in your UI
    })
    .catch((error) => {
        // Handle error
        // console.error("Error retrieving customers:", error);
        // You can handle the error, display an error message, or perform other actions as needed
    });
};

  const handleSelect = (e:any) => {
    
    setRole(e.value);
  }

 
  useEffect(()=>{

      getUserDetails();

  },[]);

  return (
    <>
      <SideBar />
      
      <div className="body-content">
        <div className="card-body">
          <div className="card-header">
          <span className="align-icon"><PersonAddAltOutlinedIcon/></span>
            <span>Edit User</span>
          </div>
          <div className="card-content">
            <div className="card-discription">
              <span>
                A new user be added by filling in the
              <span className="bold">'Name','Email','Role','Password'.</span>
              </span>
              <span>
                If the<span className="bold"> Email ID </span>of new user is the same as previously added
                one,then the user cannot be added
              </span>
            </div>
            <div className="user-detail">
              <div className="user-detail1">
                <label htmlFor="name">Name<span className="red">*</span></label>
                <input type="text" placeholder="" id="name" value={customerName} onChange={(e)=>{setName(e.target.value)}} />

                <label htmlFor="email">Email<span className="red">*</span></label>
                <input type="email" id="email" name="email" value={customerEmail} onChange={(e)=>{setEmail(e.target.value)}} />

                <label htmlFor="role">Role<span className="red">*</span></label>
                <Select
                  options={roleList}
                  onChange={(e)=> handleSelect(e) }
                  value={ roleList.find((x:any)=> x.value === role ) }
                  
                />

                <div className="input-radio">
                  <label>Status<span className="red">*</span></label>

                  <input type="radio" id="status" name="status" checked={status ? true : false } onClick={() => { setStatus(true); }} />
                  <label htmlFor="active">Active</label>

                  <input type="radio" id="status" name="status" checked={!status ? true : false } onClick={() => { setStatus(false); }} />
                  <label htmlFor="deactive">Deactive</label>
                </div>

              </div>
              <div className="user-detail2">
                <label htmlFor="password">Password<span className="red">*</span></label>
                <input type="text" id="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  />

                <label htmlFor="confirm-password">Confirm password<span className="red">*</span></label>
                <input type="text" id="confirmpassword" name="confirmpassword" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />

                <label htmlFor="mobile">Mobile No : <span className="red">*</span></label>
                <input type="number" id="mobile" name="mobile" placeholder="Mobile No" value={mobile} onChange={(e)=> setMobile(e.target.value) } />
                
                
              </div>
            </div>
          </div>
          <div className="footer">
          <ToastContainer />
            <button className="btn bg-grey" onClick={UpdateUser}>Update</button>
            <button className="btn" onClick={(e)=> switchMenu(e) } >Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
