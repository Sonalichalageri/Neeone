import react from 'react';
import "./changePassword.scss"
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';


const ChangePassword =()=>
{
    return(
        <div className='container'>
            <div className='body-header'>
             <span className="gap"><AdminPanelSettingsOutlinedIcon/></span>
             <span>Change Password</span>
            </div>
            <div className='body-content'>
                <div className='password-description'>
                <span>The Password should be in following format:</span>
                <span>The Password length should be greater or equal to 8.</span>
                <span>The Password should contain minimum one digit.</span>
                <span>The Password should contain minimum one uppercase character.</span>
                <span>The Password should contain minimum one lowercase character.</span>
                <span>The Password should contain minimum one special character.</span>

                </div>
                <div className='password-detail'>
                    <label htmlFor="current-password">Current Password<span className='red'>*</span></label>
                    <input type="current-password" />

                    <label htmlFor="new-password">New Password<span className='red'>*</span></label>
                    <input type="new-password" />

                    <label htmlFor='confirm-password'>Confirm Password<span className='red'>*</span></label>
                    <input type="confirm-password" />

                </div>

            </div>

        </div>
    );

};
export default ChangePassword;