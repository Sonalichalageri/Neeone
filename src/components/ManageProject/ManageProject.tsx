import React, { useEffect, useState } from 'react';
import "./ManageProject.scss";
import Button from '@mui/material/Button';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SideBar from '../Common/SideBar/SideBar';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { display } from '@mui/system';



const ManageProject = () => {

    const navigate = useNavigate();
    const [Projectlist, setProjectList] = useState<any>([]);

    const [quickFilterText, setQuickFilterText] = useState<any>('');

    const [projectHeader, setProjectheader] = useState<any>([

        {
            field: 'projectName', headerName: 'Project Name', flex: "1", suppressSizeToFit: 'true', sortable: "true",
            cellStyle: () => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
            }),
        },
        {
            field: 'projectDiscription', headerName: 'Project Discription', flex: "1", suppressSizeToFit: 'true', sortable: 'true',
            cellStyle: () => ({
                display: "flex",
                alignItems: "center",
                justifycontent: 'start',
            }),
        },
        {
            field: 'projectType', headerName: 'ProjectTyoe', flex: '1', suppressSizeToFit: 'true', sortable: 'true',
            cellStyle: () => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
            }),
        },
        {
            field: 'startDate', headerName: 'StartDate', flex: '1', suppressSizeToFit: 'true', sortable: 'true',
            cellStyle: () => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
            }),
        },
        {
            field: 'endDate', headerName: 'EndDate', flex: '1', suppressSizeToFit: 'true', sortable: 'true',
            cellStyle: () => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
            }),
        },
        {
            field: 'imageUpload', headerName: 'ImageUpload', flex: '1', suppressSizeToFit: 'true', sortable: 'true',
            cellStyle: () => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
            }),
       },
       {   field: 'id', headerName:"Action",
       cellStyle: () => ({
           display: "flex",
           alignItems: "center",
           justifyContent: "start",
           }),
       cellRenderer:"ButtonActionRenderer",
       sortable: false,
       maxWidth: 120,            
       suppressSizeToFit:true,  
   },     
    ]);
    function ButtonActionRenderer(cellProps: any) {
        return (
            <span className="btn" onClick={() => redirectToEdit(cellProps)}  >
                <Button type="button">Edit</Button>
            </span>
        );
    }
    const redirectToEdit = (cellData: any) => {
        navigate(`/editproject/${cellData.Data.projectId}`);
    }

    const switchMenu = (e: any) => {
        navigate("/addproject");
    }

    const getProjectList = async () => {
        // Make a GET request to retrieve all customers
        await axios.get("http://localhost:8080/project/all", {
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => {
                console.log();
                // Handle successful response
                console.log("List of all projects:", response.data);
                setProjectList([]);
                setProjectList(response.data);
                // You can then do something with the list of customers, like updating state or displaying them in your UI
            })
            .catch((error) => {
                // Handle error
                console.error("Error retrieving customers:", error);
                // You can handle the error, display an error message, or perform other actions as needed
            });
    };


    useEffect(() => {

        getProjectList();

    }, []);

    return (<>
        <SideBar />
        <div className='manage-user-container'>
            <div className='manage-user-header'>
                <div className='header-options'>
                    <input type="text" name="search" id="search"  onChange={(e) =>{setQuickFilterText(e.target.value)}} value="" placeholder='Search User' />
                    <Button variant="contained" className='search-btn' size="small" onClick={(e) => switchMenu(e)} ><AddBoxOutlinedIcon className='add-btn' />Add Project</Button>
                </div>
            </div>
            <div className='manage-user-content' onChange={getProjectList}>
                {/* <table>
                    <thead>
                        <tr>
                            <th>ProjectName</th>
                            <th>ProjectType</th>
                            <th>ProjectDiscription</th>
                            <th>StartDate</th>
                            <th>EndDate</th>
                            <th>ImageUpload</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {Projectlist.map((item: any, index: any) => {

                            return <tr>
                                <td>{item.projectName}</td>
                                {/* <td>{item.status === "true" ? "Active" : "Deactive" }</td> */}
                {/* <td>{item.projectType}</td>
                                <td>{item.projectDiscription}</td>
                                <td>{item.startDate}</td>
                                <td>{item.endDate}</td>
                                <td>{item.imageUpload}</td>
                                <td onClick={() => navigate(`/editproject/${item.projectId}`)} ><Button variant="contained" className='edit-btn' size="small">Edit Project</Button></td>
                            </tr>

                        })} */}
                {/* 
                    </tbody>
                </table> */}

                <div className='ag-theme-material' style={{ height: "500px", width: "100%" }}>
                    <AgGridReact
                        components={{
                            ButtonActionRenderer,
                        }}
                        rowData={Projectlist}
                        columnDefs={projectHeader}
                        pagination={true}
                        paginationAutoPageSize
                        headerHeight={40}
                        rowHeight={40}
                        defaultColDef={{ sortable: true, resizable: true }}
                        suppressHorizontalScroll
                        suppressMovableColumns
                        quickFilterText={quickFilterText}
                    >
                    </AgGridReact>
                </div>

            </div>
        </div>
    </>
    );
}
export default ManageProject;