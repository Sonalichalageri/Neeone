import react, { useState } from "react";
import "./UserSetting.scss";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const UserSetting = () => {

    const [activeTab, setACtiveTab] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const showDialog:any = () => {
        setOpen(true);
    };
    
    const closeDialog:any = () => {
        setOpen(false);
    };


    return (
        <div className="user-container">
            <div className="user-header">
                <span className="gap"><AdminPanelSettingsOutlinedIcon /></span>
                <span>User Setting</span>

            </div>
            <div className="user-navbar">
                <span className={activeTab===false ? "align selected" : "align"} onClick={(e) => setACtiveTab(false)}  >User Details</span>
                <span className={activeTab===true ? "align selected" : "align"} onClick={(e) => setACtiveTab(true)} >User Preferences</span>
            </div>

            {
                !activeTab
                    ?
                    <>                    
                        <div className="user-detail">
                            <div className="user-block">
                                <span>Display Name :</span>
                                <span>Email Id :</span>
                                <span>Roles :</span>
                            </div>
                            <div className="user-block align-right">
                                <span>Admin</span>
                                <span>eapa-admin@se.com</span>
                                <span>Admin</span>
                            </div>
                        </div>
                    </>
                    :
                    <div className="user-detail">
                        <div className="user-block" >
                            <span>Time Zone :</span>
                            <span>Power :</span>
                            <span>Date :</span>
                            <span>Time :</span>
                            <button onClick={(e)=>showDialog()}>Change Password</button>
                        </div>
                        <div className="user-block align-right">
                            <span><input type=""/></span>
                            <span>kw</span>
                            <span>D/M/Y</span>
                            <span>24H</span>
                            <button>Modify</button>
                        </div>
                    </div>
            }

            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '48%', maxHeight: 435 } }}
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                // onClose={closeDialog}
                aria-describedby="alert-dialog-slide-description"
                className="dialog-container"
                maxWidth="xl"
            >
                <span className="dialog-title">Change Password</span>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    <div className='body-content'>
                        <div className='password-notes'>                            
                            <span>The Password should be in following format:</span>
                            <li>The Password length should be greater or equal to 8.</li>
                            <li>The Password should contain minimum one digit.</li>
                            <li>The Password should contain minimum one uppercase character.</li>
                            <li>The Password should contain minimum one lowercase character.</li>
                            <li>The Password should contain minimum one special character.</li>
                        </div>
                        <div className='password-form'>
                            <label htmlFor="current-password">Current Password<span className='red'>*</span></label>
                            <input type="text" name="current-password" id="current-password" value="" className="input-text" />                            
                            <label htmlFor="new-password">New Password<span className='red'>*</span></label>
                            <input type="text" name="new-password" id="new-password" value="" className="input-text" />
                            <label htmlFor='confirm-password'>Confirm Password<span className='red'>*</span></label>
                            <input type="text" name="confirm-password" id="confirm-password" value="" className="input-text" />
                        </div>
                    </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} variant="contained" className="grey" >Submit</Button>
                    <Button onClick={closeDialog} variant="outlined" className="outline-grey" >Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
};

export default UserSetting;