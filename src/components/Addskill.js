

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';





export default function Addskill(){

    const [open, setOpen] = React.useState(false);
    const [skill, setSkill] = React.useState({});

    const [description, setDescription] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);  
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        const newSkill = {description};
        setSkill(newSkill);
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add skill
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New skill</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please add a new skill
                    </DialogContentText>
                    <TextField

                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
    
     

}
