import React from 'react';
import logo from './logo.svg';
import './Main.scss';
import AdminHeader from '../Common/AdminHeader/AdminHeader';
import SideBar from '../Common/SideBar/SideBar';
import AddUser from '../Common/SideBar/BodyContent';
import ManageUser from '../Admin/ManageUser/ManageUser';
import UserSetting from '../Common/profile/UserSetting';
import ChangePassword from '../Common/changePassword/ChangePassword';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import EditUser from '../Common/EditUser/EditUser';
import ManageProject from '../ManageProject/ManageProject';
import EditProject from '../ManageProject/EditProject/EditProject';
import ManageTask from '../ManageTask/ManageTask';
import AddTask from '../ManageTask/AddTask/AddTask';
import AddProject from '../ManageProject/AddProject/AddProject';
import OngoingTask from '../OngoingTask/OngoingTask';
import EditTask from '../ManageTask/EditTask/EditTask';
import DashBoardPage from '../DashBoard/DashBoard';
import Pump from '../Pump/Pump';
import VSD from '../VSD/VSD';


const App = () => {

  let adminUrl:any = window.location.href;
  let _result:any = adminUrl.includes("admin");
  console.log(_result);

  return (
    <Router>
      <div className='main-container'>
        <div className='header'>
          <AdminHeader />
        </div>
        <div className='body-container'>
          
            <Routes>          
              <Route path="/userpreference" element={<UserSetting />} />
              <Route path="admin/dashboard" element={<DashBoardPage/>}/>
              <Route path="/admin/adduser" element={<AddUser />} />
              <Route path="/admin/manageuser" element={<ManageUser />} />
              <Route path="/admin/edituser/:userId" element={<EditUser />} />
              <Route path="/manageprojects" element={<ManageProject/>}/>
              <Route path="/addproject" element={<AddProject/>}/>
              <Route path="/editproject/:projectId" element={<EditProject/>}/>
              <Route path="/managetask"  element={<ManageTask/>}/>
              <Route path="/addtask" element={< AddTask />}/>
              <Route path="/edittask/:taskId" element={<EditTask/>}/>
              <Route path="/ongoingtask" element={<OngoingTask/>}/> 
              <Route path="/pump" element={<Pump/>}/>       
              <Route path="/vsd" element={<VSD/>}/>         
            </Routes>
            
        </div>
      </div>
    </Router>
  );
}
export default App;
