import React, { useEffect, useState } from 'react';
import "./OngoingTask.scss";
import SideBar from '../Common/SideBar/SideBar';
import Plot from 'react-plotly.js';


const OngoingTask = () => {
         

    return (
        <>
            <SideBar />
            <div className='manage-task-container'>
                <div className='manage-user-header'>
                    <div className='header-options'>
                        <input type="text" name="search" id="search"  placeholder='Search User' />
                    </div>
                </div>
                <div className='manage-task-content' >
                   
                <Plot
                    data={[                    
                    {
                        type: 'bar', 
                        x: [1, 2, 3],
                        y: [2, 5, 3]},
                    ]}
                    layout={ {
                        width: 520, 
                        height: 400, 
                        title: 'Bar Chart'
                    }}
                />

                <Plot
                    data={[                    
                        {
                            x: [1, 2, 3],
                            y: [2, 6, 3],
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        },
                    ]}
                    layout={ {
                        width: 520, 
                        height: 400, 
                        title: 'Line Chart'
                    }}
                />

                <Plot
                    data={[                    
                        {
                            values: [19, 26, 55],
                            labels: ['Residential', 'Non-Residential', 'Utility'],
                            type: 'pie'
                        },
                    ]}
                    layout={ {
                        width: 520, 
                        height: 400, 
                        title: 'Pie Chart'
                    }}
                />
                    
                </div>
            </div>           
        </>

    );
}
export default OngoingTask;