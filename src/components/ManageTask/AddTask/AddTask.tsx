import react, { useState } from "react";
import "./AddTask.scss";
import { ToastContainer, toast } from "react-toastify";
import SideBar from "../../Common/SideBar/SideBar";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Select, { Options } from "react-select";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from 'moment';


const AddTask = () => {

  const [taskName, setName] = useState<any>("");
  const [projectName, setProjectName] = useState<any>("");
  const [projectType, setProjectType] = useState<any>({ value: "" });
  const [taskDiscription, setDiscription] = useState<any>("");
  const [imageTaskUpload, setImageUpload] = useState<any>('');
  const [taskStatus, setuserStatus] = useState<boolean>(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  const [date, setDate] = useState(new Date());


  const projectList: any = [
    { value: '1', label: 'Product' },
    { value: '2', label: 'Service' },
  ];

  const handleSelect = (e:any) => {
    setProjectType(e.value);
  }

  const navigate = useNavigate();

  const switchMenu = (e: any) => {
    navigate("/managetask");
  }

  const handleClick = () =>{

    

    const taskData:any ={
      taskname:taskName,
      projectName: projectName,
      projectType:projectType,
      taskDiscription:taskDiscription,
      taskstatus:taskStatus,
      StartDate:moment(startDate).clone().format('YYYY-MM-DD'),
      EndDate:moment(endDate).clone().format('YYYY-MM-DD'),
      imageTaskUpload:imageTaskUpload,
    }
    console.log(taskData);

    axios.post("http://localhost:8080/managetask/create", taskData, {
      headers: { "Content-Type": "application/json" }
    })
    .then(response => {
      console.log("New project added");
      toast.success('project Created Successfully.');

      setTimeout(() => {
        navigate("/managetask");
      }, 2000);
    })
    .catch(error => {
      console.error("Error adding project:", error);
      toast.error(error);
      // Handle error (e.g., display error message)
    });

  };



  return (
    <>
      <SideBar />
      <div className="add-task-container">
        <div className="add-task-card-body">

          <div className="add-task-card-header">
            <span className="align-icon"><PersonAddAltOutlinedIcon /></span>
            <span>Add New Task</span>
          </div>

          <div className="add-task-card-content">
            <div className="row">
              <div className="input-element">
                <label htmlFor="name">Task Name<span className="red">*</span></label>
                <input type="text" placeholder="Task Name" id="name" value={taskName} onChange={(e) =>{setName(e.target.value)}} />
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
                <input type="text" placeholder="Project Name" id="name" value={projectName} onChange={(e) =>{setProjectName(e.target.value)}}/>
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
                <input type="file" className="file" id="file" value={imageTaskUpload} onChange={(e) =>{setImageUpload(e.target.value)}} />
              </div>

            </div>
            <div className="row">
              <div className="input-element">
                <label htmlFor="discription">Task  Description<span className="red">*</span></label>
                <textarea id="discription" name="discription" cols={28} rows={3} value={taskDiscription} onChange={(e) => {setDiscription(e.target.value)}}></textarea>
              </div>

              <div className="input-radio">
                  <label>Task Status<span className="red">*</span></label>

                  <input type="radio" id="status" name="status"  onClick={() => { setuserStatus(true); }}/>
                  <label htmlFor="active">Active</label>

                  <input type="radio" id="status" name="status" onClick={() => { setuserStatus(false); }}/>
                  <label htmlFor="deactive">Deactive</label>
                </div>

            </div> 


          </div>
          <div className="add-task-footer">
            <ToastContainer />
            <button className="btn bg-grey"  onClick={handleClick}>Add</button>
            <button className="btn" onClick={switchMenu}>Cancel</button>
          </div>
        </div>
      </div>
    </>


  );
};
export default AddTask;