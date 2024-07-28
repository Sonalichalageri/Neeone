import React, { useState } from "react";
import "./DashBoard.scss";
import SideBar from "../Common/SideBar/SideBar";
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ShowChartSharpIcon from '@mui/icons-material/ShowChartSharp';
import Plot from 'react-plotly.js';
import { BorderColor } from "@mui/icons-material";
import axios from "axios";


const DashBoard = () => {

    const [userList, setUserList] = useState<any>([]);
    const noofuser='getUserList()'.length;

    const pieChartData: any = [
        {
            labels: ['users', 'alert', 'warning'],
            values: [noofuser, 10, 20],
            type: 'pie',
            marker: {
                colors: ['#86DC3D', '#FF0000', '#FFE338',], // Optional: custom colors
            },
        }
    ]

    const pieChartLayout: any = {
        width: 450,
        height: 255,
        margin: {
            l: 50,
            r: 50,
            b: 50,
            t: 50,
            pad: 2,
        },
        showlegend: true,
        legend: {
            orientation: 'h', // Horizontal legends
            x: 0.15,
            y: -0.02, // Positioning the legend below the chart
            traceorder: 'normal',
        },
        title: 'Health Distribution of Systems',
        hovermode: "x unified",
        hoverlabel: {
            bordercolor: "#fff",
            font: {
                size: 14,
            }
        },
    }

    const getUserList = async () => {
        // Make a GET request to retrieve all customers
        await axios.get("http://localhost:8080/customer/all", {
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => {
                console.log();
                // Handle successful response
                console.log("List of all customers:", response.data);
                setUserList([]);
                setUserList(response.data);
                // You can then do something with the list of customers, like updating state or displaying them in your UI
            })
            .catch((error) => {
                // Handle error
                console.error("Error retrieving customers:", error);
                // You can handle the error, display an error message, or perform other actions as needed
            });
    };


    const donutChartData: any = [
        {
            values: [27, 11, 25],
            labels: ['US', 'China', 'European Union'],
            text: 'CO2',
            textposition: 'inside',
            name: 'CO2 Emissions',
            hole: 0.4,
            type: 'pie'
        },
    ]

    const donutChartLayout: any = {
        width: 500,
        height: 245,
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
        title: 'country CO2 emission'
    }

    const lineChartData: any = [
        {
            x: [1, 2, 3, 4, 5, 6],
            y: [10, 15, 13, 17, 11, 10],
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Series 1', // Legend name for Series 1 
        },
        {
            x: [1, 2, 3, 4, 5, 6],
            y: [16, 5, 11, 9, 17, 19],
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Series 2', // Legend name for Series 2
            line: {
                dash: 'dot',
            }
        },
    ]

    const lineChartLayout: any = {
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
    }



    return (
        <>
            <SideBar />
            <div className="dash-board-container">
                <div className="dash-board-body-content">
                    <div className="dash-board-header">
                        <span className="padding"><HealthAndSafetyOutlinedIcon /></span>
                        <span>Overall Health Dashboard</span>
                    </div>
                    <div className="dash-board-content">
                        <div className="dash-board-detail1">
                            <span>Total Number of Equipment</span>
                            <div className="dash-board-detail1-content">
                                <span className="text">11</span>

                                <span className="text2">Systems</span>
                            </div>
                        </div>
                        <div className="dash-board-detail2">
                            <Plot
                                data={pieChartData}
                                layout={pieChartLayout}
                                config={{ displayModeBar: false }}
                            />
                        </div>

                        <div className="dash-board-detail3">
                            <Plot
                                data={donutChartData}
                                layout={donutChartLayout}
                                config={{ displayModeBar: false }}
                            />
                        </div>
                    </div>

                </div>
                <div className="dashboard-body-content2">
                    <span className="stress-icon"><ShowChartSharpIcon /></span>
                    <span>Recent Stress of All Systems</span>
                </div>

                <div className="dash-board-linechart">
                    <Plot
                        data={lineChartData}
                        layout={lineChartLayout}
                        config={{ displayModeBar: false }}
                    />
                </div>
                
            </div>
        </>

    );

}
export default DashBoard;