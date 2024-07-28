import react from "react";
import "./BodyContent.scss";
import Select, { Options } from "react-select";
import React, { useState } from "react";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SideBar from "./SideBar";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BodyContent = () => {

  const [customerName, setName] = useState<any>("");
  const [customerEmail, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [confirmPassword, setConfirmPassword] = useState<any>("");
  const [role, setRole] = useState<any>({value:""});
  const [userStatus, setuserStatus] = useState<boolean>(true);
  const [mobile, setMobile] = useState<any>('');


  const roleList: any = [
    { value: '1', label: 'Admin' },
    { value: '2', label: 'Support' },
    { value: '3', label: 'Developer' },
  ];

  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();

  const switchMenu = (e: any) => {
    navigate("/admin/manageuser");
  }


  const handleClick = () => {

    if (password != confirmPassword) {
      toast.error('New Password and Confirm Password must be same.');
      return false;
    }

    const customer = { 
      customerName:customerName, 
      customerEmail:customerEmail, 
      password:password, 
      confirmPassword:confirmPassword, 
      role:role,
      status:userStatus, 
      mobileNo:mobile
    };

    console.log(customer);

    axios.post("http://localhost:8080/customer/create", customer, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log("New Student added");
        toast.success('User Created Successfully.');

        setTimeout(() => {
          navigate("/admin/manageuser");          
        }, 2000);

      })
      .catch(error => {
        console.error("Error adding student:", error);
        toast.error(error);
        // Handle error (e.g., display error message)
      });
  };

  const handleSelect = (e:any) => {
    
    setRole(e.value);
  }
  
  

  return (
    <>
      <SideBar />

      <div className="body-content">
        <div className="card-body">
          <div className="card-header">
            <span className="align-icon"><PersonAddAltOutlinedIcon /></span>
            <span>Add New User</span>
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
                <input type="text" placeholder="Name" id="name" value={customerName} onChange={(e) => { setName(e.target.value) }} />

                <label htmlFor="email">Email<span className="red">*</span></label>
                <input type="email" placeholder="Email" id="email" name="email" value={customerEmail} onChange={(e) => { setEmail(e.target.value) }} />

                <label htmlFor="role">Role<span className="red">*</span></label>
                <Select
                  options={roleList}
                  onChange={(e)=> handleSelect(e) }
                  // value={ roleList.find((x:any)=> x.label === role ) }
                />

                <div className="input-radio">
                  <label>Status<span className="red">*</span></label>

                  <input type="radio" id="status" name="status" onClick={() => { setuserStatus(true); }} />
                  <label htmlFor="active">Active</label>

                  <input type="radio" id="status" name="status" onClick={() => { setuserStatus(false); }} />
                  <label htmlFor="deactive">Deactive</label>
                </div>

              </div>
              <div className="user-detail2">
                <label htmlFor="password">Password<span className="red">*</span></label>
                <input type="text" placeholder="Password" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                <label htmlFor="confirm-password">Confirm password<span className="red">*</span></label>
                <input type="text" placeholder="Confirm Password" id="confirmpassword" name="confirmpassword" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />

                <label htmlFor="mobile">Mobile No : <span className="red">*</span></label>
                <input type="number" id="mobile" name="mobile" placeholder="Mobile No" value={mobile} onChange={(e)=> setMobile(e.target.value) } />

              </div>
            </div>
          </div>
          <div className="footer">
            <ToastContainer />
            <button className="btn bg-grey" onClick={handleClick}>Add</button>
            <button className="btn" onClick={(e) => switchMenu(e)} >Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyContent;
