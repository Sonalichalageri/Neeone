import react, { useEffect } from "react";
import "./EditProject.scss";
import Select, { Options } from "react-select";
import React, { useState } from "react";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SideBar from "../../Common/SideBar/SideBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios, {AxiosError} from 'axios';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditProject = () => {

  const{projectId} = useParams<any>();     
  const [projectName, setName] = useState<any>("");
  const [projectType, setType] = useState<any>("");
  const [projectDiscription, setDiscription] = useState<any>("");
  const [endDate, setEnddate] = useState<any>("");
  const [imageUpload, setImageupload] = useState<any>("");
 
  const projectTypeList: any = [
    { value: '1', label: 'product' },
    { value: '2', label: 'Service' },

  ];

  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();

  const switchMenu = (e:any) => {
      navigate("/manageprojects"); 
  }
 

  const UpdateProject = () => {

   
    const ProjectData = {
      projectId : projectId,
      projectName: projectName,
      projectType: projectType,
      projectDiscription: projectDiscription,
      startDate: startDate,
      endDate: endDate,
      imageUpload: imageUpload
    };
    
  
      axios.put(`http://localhost:8080/project/update/${projectId}`, ProjectData, {
          headers: { "Content-Type": "application/json" }
      })
      .then(response => {
          // console.log("New Student added");
          toast.success('User project Successfully.');
          
          setTimeout(()=>{
            navigate("/manageprojects");
          },2000);
      })
      .catch(error => {
          console.error("Error Occured while update", error);
          // Handle error (e.g., display error message)
      });
  };

 
  // To get user details by userid 
  const getProjectDetails = async () => {

    // Make a GET request to retrieve all customers
    await axios.get(`http://localhost:8080/project/find/${projectId}`, {
        headers: { "Content-Type": "application/json" }
    })
    .then((response) => {
        // console.log(response.data);

        if(response.data!=undefined){
            // console.log(response.data.customerName);

            setName(response.data.projectName);
            setType(response.data.projectType);          
            setDiscription(response.data.projectDiscription);
            setStartDate(response.data.startDate);
            setEnddate(response.data.endDate);
            setImageupload(response.data.imageUpload);
        }
        // // Handle successful response
        // console.log("List of all customers:", response.data);
        // setUserList([]);
        // setUserList(response.data);
        // // You can then do something with the list of customers, like updating state or displaying them in your UI
    })
    .catch((error) => {
        // Handle error
        // console.error("Error retrieving customers:", error);
        // You can handle the error, display an error message, or perform other actions as needed
    });
};

  const handleSelect = (e:any) => {
    
    setType(e.value);
  }

 
  useEffect(()=>{

    getProjectDetails();

  },[]);

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
                <input type="date" placeholder="Start Date" id="date" name="date" />
              </div>

              <div className="input-element">
                <label htmlFor="date">End Date<span className="red">*</span></label>
                <input type="date" placeholder="End Date" id="date" name="date" />
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
                <input type="file" className="file" id="file" value={imageUpload} onChange={(e) => { setImageupload(e.target.value) }} />
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
            <button className="btn bg-grey" onClick={UpdateProject} >update</button>
            <button className="btn" onClick={(e) => switchMenu(e)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProject;
