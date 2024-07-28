import React from "react";
import SideBar from "../Common/SideBar/SideBar";
import "./VSD.scss";
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const VSD = () => {
    return (
        <>
            <SideBar />
            <div className="vsd-body-container">
                <div className="vsd-left-body">
                    <div className="vsd-header">
                        <span>Variable Speed Drive</span>
                        <span><DesktopWindowsOutlinedIcon /></span>
                    </div>
                    <div className="vsd-left-content">
                        <span>Breakdown view with Associated Component Stress And Rul</span>
                    </div>
                </div>
                <div className="vsd-right-body">
                    <div className="vsd-right-header">
                        <span>Current Active Status</span>
                    </div>
                    <div className="vsd-right-content1">
                        <div> <span className="check-icon"><CheckCircleOutlineOutlinedIcon sx={{ fontSize: 50, color: "green" }} /></span></div>
                        <div className="padding">  <span>No Fault</span></div>
                        <div className="padding">
                            <span><FiberManualRecordIcon sx={{ fontSize: "small", color: "red" }} /></span>
                            <span><b>EFFICENCY LOSS 80%</b></span>
                        </div>
                    </div>
                    <div className="vsd-right-header">
                        <span>Asset Details</span>
                    </div>
                    <div className="vsd-right-content2">
                    
                        <div className="row">
                            <div><label htmlFor=""></label>Product Name:</div>
                            
                        </div>
                        <div className="row">
                            <div><label htmlFor=""></label>Product Version:</div>
                            <div> <input type="text" placeholder="ATV630U15N4" /></div>
                        </div>
                        <div className="row">
                            <div><label htmlFor=""></label>Version ID:</div>
                            <div> <input type="text" placeholder="Schneider Electric" /></div>
                        </div>
                        <div className="row">
                            <div><label htmlFor=""></label>Drive nominal rating:</div>
                            <div> <input type="text" placeholder="1.5kW / 2Hp" /></div>
                        </div>
                        <div className="row">
                            <div><label htmlFor=""></label>Drive mains voltage: </div>
                            <div> <input type="text" placeholder="380-500 V Three" /></div>
                        </div>
                     
                    </div>

                </div>

            </div>
        </>
    );
}
export default VSD;