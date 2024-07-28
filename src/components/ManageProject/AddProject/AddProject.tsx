import react from "react";
import "./AddProject.scss";
import Select, { Options } from "react-select";
import React, { useState } from "react";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SideBar from "../../Common/SideBar/SideBar";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { error } from "console";
import axios from "axios";
import moment from 'moment';


const AddProject = () => {

  const [projectName, setName] = useState<any>("");
  const [projectType, setType] = useState<any>({ value: "" });
  const [projectDiscription, setDiscription] = useState<any>("");
  const [endDate, setEndDate] = useState<any>(true);
  const [imageUpload, setImageUpload] = useState<any>('');
  const [startDate, setStartDate] = useState(new Date());


  const projectTypeList: any = [
    { value: '1', label: 'Product' },
    { value: '2', label: 'Service' },
  ];

  const navigate = useNavigate();

  const switchmenu = (e: any) => {
    navigate('/manageprojects');
  }

  const addproject =  () => {

    const ProjectData = {
      projectName: projectName,
      projectType: projectType,
      projectDiscription: projectDiscription,
      startDate: startDate,
      endDate: endDate,
      imageUpload: imageUpload
    };
    console.log(ProjectData);

     axios.post("http://localhost:8080/project/create", ProjectData, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log("New project added");
        toast.success('Project Created Successfully.');
        setTimeout(() => {
          navigate("/manageprojects");
        }, 2000);
      })
      .catch(error => {
        console.error("Error adding project:", error);
        toast.error(error);
        // Handle error (e.g., display error message)
      });


  }
  const handleSelect = (e: any) => {

    setType(e.value);
  }



  return (
    <>
      <SideBar />
      <div className="add-project-container">
        <div className="add-project-card-body">

          <div className="add-project-card-header">
            <span className="align-icon"><PersonAddAltOutlinedIcon /></span>
            <span>Add New Project</span>
          </div>

          <div className="add-project-card-content">
            <div className="row">
              <div className="input-element">
                <label htmlFor="name">Project Name<span className="red">*</span></label>
                <input type="text" placeholder="Project Name" id="name" value={projectName} onChange={(e) => { setName(e.target.value) }} />
              </div>

              <div className="input-element">
                <label htmlFor="date">Start Date<span className="red">*</span></label>
                <input type="date" placeholder="Start Date" id="date" name="date" 
                // min={moment().clone().format('YYYY-MM-DD')}
                />
              </div>

              <div className="input-element">
                <label htmlFor="date">End Date<span className="red">*</span></label>
                <input type="date" placeholder="End Date" id="date" name="date" 
                min={moment(Date.now()).format('YYYY-MM-DD')}
                />
              </div>
            </div>

            <div className="row">
            
            <div className="input-element">
                <label htmlFor="type" className="type">Project Type<span className="red">*</span></label>
                <Select
                  options={projectTypeList}
                  onChange={(e) => handleSelect(e)} // value={ projectTypeList.find((x:any)=> x.label === projectType ) }
                  value={projectTypeList.find((x:any)=>x.label === projectType)  } />
              </div>  

              <div className="input-element">
                <label htmlFor="file">Image Upload<span className="red">*</span></label>
                <input type="file" className="file" id="file" value={imageUpload} onChange={(e) => { setImageUpload(e.target.value) }} />
              </div>              

            </div>
            <div className="row">
            <div className="input-element">
                <label htmlFor="discription">ProjectDescription<span className="red">*</span></label>
                <textarea id="discription" name="discription" cols={25} rows={3} value={projectDiscription} onChange={(e) => { setDiscription(e.target.value) }}></textarea>
              </div>

            </div>
          </div>
          <div className="add-project-footer">
            <ToastContainer />
            <button className="btn bg-grey" onClick={ addproject} >Add</button>
            <button className="btn" onClick={(e) => switchmenu(e)}>Cancel</button>
          </div>
        </div>
      </div>
    </>

  );
};
export default AddProject;
