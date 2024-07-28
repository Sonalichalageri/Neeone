import react, { useEffect } from "react";
import "./EditTask.scss";
import Select, { Options } from "react-select";
import React, { useState } from "react";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SideBar from "../../Common/SideBar/SideBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios, { AxiosError } from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditTask = () => {

  const { taskId } = useParams<any>();
  const [taskname, setTaskName] = useState<any>("");
  const [projectName, setProjectName] = useState<any>("");
  const [taskDiscription, setTaskDiscription] = useState<any>("");
  const [taskStatus, setTaskStatus] = useState<any>("");
  const [projectType, setProjectType] = useState<any>("");
  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");
  const [imageTaskUpload, setImageTaskUpload] = useState<any>("");

  const projectList: any = [
    { value: '1', label: 'product' },
    { value: '2', label: 'Service' },
  ];



  const navigate = useNavigate();

  const switchMenu = (e: any) => {
    navigate("/managetask");
  }


  const UpdateTask = () => {

    const taskData = {
      taskId: taskId,
      taskname: taskname,
      projectName: projectName,
      taskDiscription: taskDiscription,
      projectType: projectType,
      taskStatus: taskStatus,
      startDate: startDate,
      endDate: endDate,
      imageTaskUpload: imageTaskUpload
    };

    axios.put(`http://localhost:8080/managetask/update/${taskId}`, taskData, {
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        // console.log("New Student added");
        toast.success('User Updated Successfully.');

        setTimeout(() => {
          navigate("/managetask");
        }, 2000);
      })
      .catch(error => {
        console.error("Error Occured while update", error);
        // Handle error (e.g., display error message)
      });
  };


  // To get user details by userid 
  const getTaskDetails = async () => {

    // Make a GET request to retrieve all customers
    await axios.get(`http://localhost:8080/managetask/find/${taskId}`, {
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => {
        // console.log(response.data);

        if (response.data != undefined) {
          // console.log(response.data.customerName);

          setTaskName(response.data.taskname);
          setProjectName(response.data.projectName);
          setTaskDiscription(response.data.taskDiscription);
          setTaskStatus(response.data.taskStatus);
          setProjectType(response.data.projectType);
          setStartDate(response.data.startDate);
          setEndDate(response.data.endDate);
          setImageTaskUpload(response.data.imageTaskUpload);

        }
        // // Handle successful response
        // console.log("List of all customers:", response.data);
        //  setUserList([]);
        // setUserList(response.data);
        // // You can then do something with the list of customers, like updating state or displaying them in your UI
      })
      .catch((error) => {
        // Handle error
        // console.error("Error retrieving customers:", error);
        // You can handle the error, display an error message, or perform other actions as needed
      });
  };

  const handleSelect = (e: any) => {

    setProjectType(e.value);
  }


  useEffect(() => {

    getTaskDetails();

  }, []);

  return (
    <>
      <SideBar />

      <div className="edit-task-container">
        <div className="edit-task-card-body">
          <div className="edit-task-card-header">
            <span className="align-icon"><PersonAddAltOutlinedIcon /></span>
            <span>Edit User</span>
          </div>
          <div className="edit-task-card-content">
            <div className="row">
              <div className="input-element">
                <label htmlFor="name">Task Name<span className="red">*</span></label>
                <input type="text" placeholder="Task Name" id="name" value={taskname} onChange={(e) => { setTaskName(e.target.value) }} />
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
                <label htmlFor="pname">Project Name<span className="red">*</span></label>
                <input type="text" placeholder="Project Name" id="name" value={projectName} onChange={(e) => { setProjectName(e.target.value) }} />
              </div>

              <div className="input-element">
                <label htmlFor="type" className="type">Project Type<span className="red">*</span></label>
                <Select
                  options={projectList}
                  onChange={(e) => handleSelect(e)}
                />
              </div>

              <div className="input-element">
                <label htmlFor="file">Image Upload<span className="red">*</span></label>
                <input type="file" className="file" id="file" value={imageTaskUpload} onChange={(e) => { setImageTaskUpload(e.target.value) }} />
              </div>

            </div>
            <div className="row">
              <div className="input-element">
                <label htmlFor="discription">Task  Description<span className="red">*</span></label>
                <textarea id="discription" name="discription" cols={28} rows={3} value={taskDiscription} onChange={(e) => { setTaskDiscription(e.target.value) }}></textarea>
              </div>

              <div className="input-radio">
                <label>Task Status<span className="red">*</span></label>

                <input type="radio" id="status" name="status" onClick={() => { setTaskStatus(true); }} />
                <label htmlFor="active">Active</label>

                <input type="radio" id="status" name="status" onClick={() => { setTaskStatus(false); }} />
                <label htmlFor="deactive">Deactive</label>
              </div>

            </div>


          </div>
          <div className="edit-task-footer">
            <ToastContainer />
            <button className="btn bg-grey" onClick={UpdateTask}>Update</button>
            <button className="btn" onClick={(e) => switchMenu(e)} >Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
