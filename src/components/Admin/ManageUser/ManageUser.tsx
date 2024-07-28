import React, { useEffect, useState } from 'react';
import "./ManageUser.scss";
import Button from '@mui/material/Button';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SideBar from '../../Common/SideBar/SideBar';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";


const ManageUser = () => {

    const navigate = useNavigate();
    const [userList, setUserList] = useState<any>([]);
    const [quickFilterText, setQuickFilterText] = useState<any>('');

    const [userHeader, setUserHeader] = useState<any>([
        {
            field: 'customerName', headerName: "Name", flex: 1, suppressSizeToFit: true, sortable: true,
            cellStyle: () => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                color: "red",
            }),
        },
        {
            field: 'customerEmail', headerName: "Email", flex: 1, suppressSizeToFit: true, sortable: false,
            cellStyle: () => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "start"
            }),
        },
        {
            field: 'mobileNo', headerName: "Mobile", flex: 1, suppressSizeToFit: true, sortable: false,
            cellStyle: () => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "start"
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

        navigate(`/admin/edituser/${cellData.data.customerId}`);

    }

    const switchMenu = (e: any) => {
        navigate("/admin/adduser");
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


    useEffect(() => {

        getUserList();

    }, []);

    return (<>
        <SideBar />
        <div className='manage-user-container'>
            <div className='manage-user-header'>
                <div className='header-options'>
                    <input type="text" name="search" onChange={(e) => { setQuickFilterText(e.target.value) }} id="search" value={quickFilterText} placeholder='Search User' />
                    <Button variant="contained" className='search-btn' size="small" onClick={(e) => switchMenu(e)} ><AddBoxOutlinedIcon className='add-btn' />Add User</Button>
                </div>
            </div>
            <div className='manage-user-content' onChange={getUserList}>
                <div className="ag-theme-material" style={{ height: "500px", width: "100%" }} >
                    <AgGridReact
                        components={{
                            ButtonActionRenderer,
                        }}
                        rowData={userList}
                        columnDefs={userHeader}
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
export default ManageUser;