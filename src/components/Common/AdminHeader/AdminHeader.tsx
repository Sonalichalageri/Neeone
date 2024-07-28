import React from "react";
import "./AdminHeader.scss";
import MenuIcon from '@mui/icons-material/Menu';    
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";


const AdminHeader = () => {

    const navigate = useNavigate();

    const options:any = [
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

      
    const selectAndCreatableStyle:any = {
        dropdownIndicator: (base:any) => ({
        ...base,
        padding: 4,
        }),
        control: (base: any) => ({
        ...base,
        borderRadius: 0,
        width: '160px',
        fontSize: 12,
        paddingInline:0,
        marginTop:1,        
        height: '30px',
        minHeight: '30px',
        marginLeft: 0,          
        }),
        menu: (base: any) => ({
        ...base,
        borderRadius: 0,
        width: '160px',
        hyphens: 'auto',
        marginTop: 0,
        textAlign: 'left',
        wordWrap: 'break-word',
        fontSize: 12,
        paddingInline: 0,                  
        }),
        menuList: (base: any) => ({
        ...base,
        width: '160px',
        fontSize: 12,
        paddingInline: 0,                          
        marginLeft: 0,
        marginRight: 0,
        }),
        option: (base: any, { data, isDisabled, isFocused, isSelected }:any) => ({
        ...base,
        backgroundColor: isFocused ? "#deebff" : null,
        color: "#333333"
        }),
    };

    const switchMenu = (e:any) => {

         let _url:any = e.value;
         if(_url===1){
            navigate("/userpreference");                    
         }else if(_url===2){            
            navigate("admin/dashboard");
        }else if(_url===3){            
            // navigate("/changepassword");
        }        
    }      

    return(
        <div className="header-container">
            <div className="top-header">
                <div className="left">
                    <span><MenuIcon/></span>
                    <div className="logo-title">
                        <span className="logo-slogan">Customer FIRST <span className="grey">Digital Hub</span></span>
                        <span className="logo-name">Altivar Predict</span>
                    </div>
                </div>
                <div className="right">
                    <div className="admin-option">
                         <Select 
                            options={options}                             
                            placeholder="Admin"
                            styles={selectAndCreatableStyle}
                            onChange={(e)=>switchMenu(e)}
                         />
                    </div>
                    <div className="company-logo">
                       <span className="dark-green">Schneider</span>
                       <span className="green"> Electric</span>
                    </div>
                    
                </div>
            </div>
            <div className="top-navbar"></div>
        </div>
    );
}


export default AdminHeader;