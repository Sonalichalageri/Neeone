import React, { useEffect, useState } from 'react';
import "./ManageTask.scss";
import SideBar from '../Common/SideBar/SideBar';
import { Button } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";




const ManageTask = () => {
    const navigate = useNavigate();


    const switchMenu = (e: any) => {
        navigate("/addtask");
    }

    const [quickFilterText, setQuickFilterText] = useState<any>('');
    const [tasklist, setTasktList] = useState<any>([]);

    const [taskHeader, setTaskHeader] = useState<any>([
        {
            field: 'taskname', headerName: "Task Name", flex: "1", suppressSizeToFit: 'true', sortable: "false",
            cellStyle: () => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
            }),
        },
        {
            field: 'projectName', headerName: 'Project Name', flex: "1", suppressSizeToFit: 'true', sortable: 'false',
            cellStyle: () => ({
                display: "flex",
                alignItems: "center",
                justifycontent: 'start',
            }),
        },
        {
            field: 'projectType', headerName: 'ProjectType', flex: '1', suppressSizeToFit: 'true', sortable: 'false',
            cellStyle: () => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
            }),
        },
        {
            field: 'taskDiscription', headerName: 'TaskDiscription', flex: '1', suppressSizeToFit: 'true', sortable: 'false',
            cellStyle: () => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
            }),
        },
        {
            field: 'startDate', headerName: 'StartDate', flex: '1', suppressSizeToFit: 'true', sortable: 'false',
            cellStyle: () => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
            }),
        },
        {
            field: 'endDate', headerName: 'EndDate', flex: '1', suppressSizeToFit: 'true', sortable: 'false',
            cellStyle: () => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
            }),
        },
        {
            field: 'taskImageUpload', headerName: 'TaskImageUpload', flex: '1', suppressSizeToFit: 'true', sortable: 'false',
            cellStyle: () => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
            }),
        },
        {
            field: 'id', headerName: "Action",
            cellStyle: () => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
            }),
            cellRenderer: "ButtonActionRenderer",
            sortable: false,
            maxWidth: 120,
            suppressSizeToFit: true,
        },
    ]);

    /* Update ATV Asset Button */
    function ButtonActionRenderer(cellProps: any) {
        return (
            <span className="btn" onClick={() => redirectToEdit(cellProps)}  >
                <Button type="button">Edit</Button>
            </span>
        );
    }

    const redirectToEdit = (cellData: any) => {

        navigate(`/edittask/${cellData.data.taskId}`);

    }
    const getTaskList = async () => {
        // Make a GET request to retrieve all customers
        await axios.get("http://localhost:8080/managetask/all", {
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => {
                console.log();
                // Handle successful response
                console.log("List of all tasks:", response.data);
                setTasktList([]);
                setTasktList(response.data);
                // You can then do something with the list of customers, like updating state or displaying them in your UI
            })
            .catch((error) => {
                // Handle error
                console.error("Error retrieving customers:", error);
                // You can handle the error, display an error message, or perform other actions as needed
            });
    };
    useEffect(() => {

        getTaskList();

    }, []);

    return (
        <>
            <SideBar />
            <div className='manage-task-container'>
                <div className='manage-user-header'>
                    <div className='header-options'>
                        <input type="text" name="search" id="search" onChange={(e) => { setQuickFilterText(e.target.value) }} value={quickFilterText} placeholder='Search User' />
                        <Button variant="contained" className='add-btn' size="small" onClick={(e) => switchMenu(e)} >Add Task</Button>
                    </div>
                </div>
                <div className='manage-task-content' onChange={getTaskList}>                 

                    <div className='ag-theme-material' style={{ height: "500px", width: "100%" }}>
                        <AgGridReact
                            components={{
                                ButtonActionRenderer,
                            }}
                            rowData={tasklist}
                            columnDefs={taskHeader}
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
export default ManageTask;