import React, { useState } from "react";
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SideBar from "../Common/SideBar/SideBar";
import "./Pump.scss";
import { green } from "@mui/material/colors";
import Select from "react-dropdown-select";
import Plot from 'react-plotly.js';
import ProgressBar from "./ProgressBar";


  
  

const Pump = () => {
    const options: any = [
        {
            value: 1,
            label: 'Profile'
        },
        {
            value: 2,
            label: 'Admin'
        },
        // {
        //     value: 3,
        //     label: 'Change Password'
        // },       
    ];
   

   
    const riskOfFailure = [
        {
            value: 1,
            label: 'process demand not satisfies due to performance drop'
        },
        {
            value: 2,
            label: 'Admin'
        },
        // {
        //     value: 3,
        //     label: 'Change Password'
        // },   

    ];
    
    return (
        <>
            <SideBar />
            <div className="pump-body-container">
                <div className="pump-detail1">
                    <div className="pump-header">
                        <div className="left-header">
                            <span className="icon"><FavoriteBorderIcon /></span>
                            <span>Pump</span>
                        </div>
                        <div className="right-header">
                            <span><SearchIcon /></span>
                            <span><CameraAltOutlinedIcon /></span>
                            <span>January 10, 2024 - January 16,2024</span>
                            <span><DesktopWindowsOutlinedIcon /></span>
                        </div>
                    </div>
                    <div className="pump-detail1-content">
                        <div className="content1">
                            <div className="content1-detail1">
                                <div> <span className="check-icon"><CheckCircleOutlineOutlinedIcon sx={{ fontSize: 50 }} /></span></div>
                                <div className="padding">  <span>No Fault</span></div>
                                <div className="padding">
                                    <span><FiberManualRecordIcon sx={{ fontSize: "small", color: green }} /></span>
                                    <span><b>EFFICENCY LOSS 0%</b></span>
                                </div>
                            </div>
                            <div className="content1-detail1">                            
                                {/* <ProgressBar bgcolor="orange" progress={30} height={30} /> */}
                                <ProgressBar bgcolor="red" progress={60} height={10} />
                                {/* <ProgressBar bgcolor="#99ff66" progress={50} height={30} /> */}
                                {/* <ProgressBar bgcolor="#ff00ff" progress={85} height={30} /> */}
                                {/* <ProgressBar bgcolor="#99ccff" progress={95} height={30} /> */}
                            </div>
                            <div className="content1-detail1">
                                {/* <span>180%</span> */}  
                                {/* <ProgressBar bgcolor="orange" progress={30} height={30} /> */}
                                <ProgressBar bgcolor="green" progress={40} height={10} />
                                {/* <ProgressBar bgcolor="#99ff66" progress={50} height={30} /> */}
                                {/* <ProgressBar bgcolor="#ff00ff" progress={85} height={30} /> */}
                                {/* <ProgressBar bgcolor="#99ccff" progress={95} height={30} /> */}
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <Plot
                            data={[
                                {
                                    x: [1, 2, 3, 4, 5, 6],
                                    y: [10, 15, 13, 17, 11, 10],
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    name: 'Series 1', // Legend name for Series 1 
                                },
                                {
                                    x: [0, 2, 3, 4, 5, 6],
                                    y: [5, 5, 11, 9, 17, 19],
                                    type: 'scatter',
                                    mode: 'lines',
                                    name: 'Series 2', // Legend name for Series 2
                                    line: {
                                        dash: 'dot',
                                    }
                                },
                            ]}
                            layout={{
                                width: 900,
                                height: 280,
                                // plot_bgcolor: 'red' ,
                                margin: {
                                    l: 50,
                                    r: 50,
                                    b: 50,
                                    t: 50,
                                    pad: 4,
                                },
                                showlegend: true,
                                legend: {
                                    orientation: 'h', // Horizontal legends
                                    x: 0,
                                    y: -0.1, // Positioning the legend below the chart
                                    traceorder: 'normal',
                                },

                                title: 'line chart',

                                // Shapes for background colors
                                shapes: [
                                    // Range 5 to 10
                                    {
                                        type: 'rect',
                                        xref: 'paper',
                                        yref: 'y',
                                        x0: 1,
                                        y0: 0,
                                        x1: 0,
                                        y1: 10,
                                        fillcolor: '#84cdee',
                                        opacity: 0.2,
                                        layer: 'below',
                                        line: {
                                            width: 0
                                        }
                                    },
                                    {
                                        type: 'rect',
                                        xref: 'paper',
                                        yref: 'y',
                                        x0: 0,
                                        y0: 10,
                                        x1: 1,
                                        y1: 15,
                                        fillcolor: '#fdfa72',
                                        opacity: 0.4,
                                        layer: 'below',
                                        line: {
                                            width: 0
                                        }
                                    },
                                    {
                                        type: 'rect',
                                        xref: 'paper',
                                        yref: 'y',
                                        x0: 0,
                                        y0: 15,
                                        x1: 1,
                                        y1: 20,
                                        fillcolor: '#FDB0C0',
                                        opacity: 0.4,
                                        layer: 'below',
                                        line: {
                                            width: 0
                                        }
                                    }
                                ],
                            }
                            }
                            config={{ displayModeBar: false }}
                        />
                    </div>
                </div>
                <div className="pump-detail2">
                    <div>
                        <div className="pump-header">
                            <span>Prediction</span>
                        </div>
                        <div className="pump-detail">
                            <span className="">Remaining Usefull Life</span>
                            <span className="align-number">14</span>
                            <span className="align">years</span>
                        </div>
                    </div>
                    <div className="pump-detail">
                        <div className="pump-header">
                            <span>Recommendation</span>
                        </div>
                        <div>
                            <ul>
                                <li>   <span>Reduce pump speed</span></li>
                                <li>  <span>Check fluid corrosievness</span></li>
                                <li>  <span>Check pump input filter</span></li>
                            </ul>
                        </div>
                        <div className="pump-priority-detail">
                            <div> <span><b>PRIORITY:</b></span></div>
                            <span><FiberManualRecordIcon sx={{ fontSize: "small", color: "green" }} /></span>
                            <span> LOW  </span>
                            <span><FiberManualRecordIcon sx={{ fontSize: "small", color: "yellow" }} /></span>
                            <span> MEDIUM </span>
                            <span><FiberManualRecordIcon sx={{ fontSize: "small", color: "red" }} /></span>
                            <span> HIGH</span>
                        </div>
                    </div>
                    <div>
                        <div className="pump-detail">
                            <Select
                                options={options}
                                placeholder="Monitored Faults" values={[]} onChange={function (value: {}[]): void {
                                    throw new Error("Function not implemented.");
                                }}  // styles={selectAndCreatableStyle}
                            // onChange={(e)=>switchMenu(e)}
                            />
                        </div>
                        <div className="pump-detail">
                            <Select
                                options={options}
                                placeholder="Monitored Failures" values={[]} onChange={function (value: {}[]): void {
                                    throw new Error("Function not implemented.");
                                }}  // styles={selectAndCreatableStyle}
                            // onChange={(e)=>switchMenu(e)}
                            />
                        </div>
                        <div className="pump-detail">
                            <Select
                                options={riskOfFailure}
                                placeholder="Monitored Risk of Failures" values={[]} onChange={function (value: {}[]): void {
                                    throw new Error("Function not implemented.");
                                }}  // styles={selectAndCreatableStyle}
                            // onChange={(e)=>switchMenu(e)}
                            />


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Pump;
