import React from "react";
import "./SideBar.scss";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import Select from "react-select";
import Placeholder from "react-select/dist/declarations/src/components/Placeholder";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AdfScannerOutlinedIcon from '@mui/icons-material/AdfScannerOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';


const SideBar = () => {

    const navigate = useNavigate();

    const switchMenu = (data: any) => {
        if (data === "dashboard") {
            navigate("/admin/dashboard");
        }
        else if (data === "manageprojects") {
            navigate("/manageprojects");
        }
        else if (data === "manageuser") {
            navigate("/admin/manageuser");
        }
        else if (data === "managetask") {
            navigate("/managetask");
        }
        else if (data === "ongoingtask") {
            navigate("/ongoingtask");
        }else if(data === "pump"){
            navigate("/pump");
        }else if(data === "vsd"){
            navigate("/vsd");
        }


    }

    // Call back function 
    const switchMenuTest = (data:any) =>{

    };

    const handleClick = () => {
        // Make a GET request to retrieve all customers
        axios.get("http://localhost:8080/customer/all", {
            headers: { "Content-Type": "application/json" }
        })
            .then(response => {
                // Handle successful response
                console.log("List of all customers:", response.data);
                // You can then do something with the list of customers, like updating state or displaying them in your UI
            })
            .catch(error => {
                // Handle error
                console.error("Error retrieving customers:", error);
                // You can handle the error, display an error message, or perform other actions as needed
            });
    };


    return (
        <div className="sidebar-menu">
            <div className="sidebar-header">
                <span>
                    <ManageAccountsOutlinedIcon />
                </span>
                <span className="sidebar-title">CONTROL PANEL</span>
            </div>
            <div className="sidebar-content">
                <div className="menu-item" onClick={(e) => { switchMenu("dashboard"); switchMenuTest("dashboard"); } } >
                    <span><DashboardIcon /></span>
                    <span> DashBoard</span>
                </div>
                <div className="menu-item" onClick={(e) => switchMenu("manageprojects")} >
                    <span><AdfScannerOutlinedIcon /></span>
                    <span> Manage Projects</span>
                </div>
                <div className="menu-item" onClick={(e) => switchMenu("manageuser")}>
                    <span><GroupOutlinedIcon /></span>
                    <span>Manage Users</span>
                </div>
                <div className="menu-item" onClick={(e) => switchMenu("managetask")}>
                    <span><GroupOutlinedIcon /></span>
                    <span>Manage Task</span>
                </div>
                <div className="menu-item" onClick={(e) => switchMenu("ongoingtask")}>
                    <span><GroupOutlinedIcon /></span>
                    <span>Ongoing Task</span>
                </div>
                <div className="menu-item" onClick={(e) => switchMenu("manageuser")}>
                    <span><GroupOutlinedIcon /></span>
                    <span>Inprogress Task</span>
                </div>
                <div className="menu-item" onClick={(e) => switchMenu("manageuser")}>
                    <span><GroupOutlinedIcon /></span>
                    <span>Pending Task</span>
                </div>
                <div className="menu-item" onClick={(e) => switchMenu("manageuser")}>
                    <span><GroupOutlinedIcon /></span>
                    <span>Completed Task</span>
                </div>

                <div className="menu-item" onClick={(e) => switchMenu("pump")}>
                    <span><HealthAndSafetyOutlinedIcon /></span>
                    <span>Pump</span>
                </div>

                <div className="menu-item" onClick={(e) => switchMenu("vsd")}>
                    <span><HealthAndSafetyOutlinedIcon /></span>
                    <span>VSD</span>
                </div>
            </div>
        </div>
    );
};
export default SideBar;
