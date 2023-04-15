
import dialog from 'material-ui/Dialog';
import dialogActions from 'material-ui/DialogActions';
import dialogContent from 'material-ui/DialogContent';
import dialogContentText from 'material-ui/DialogContentText';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';




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
            <RaisedButton style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Skill
            </RaisedButton>
            <dialog open={open} onClose={handleClose}>
                <dialogContent> 
                    <dialogContentText>
                        Add a new skill
                    </dialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Skill"
                        type="text"
                        fullWidth
                        onChange={e => setDescription(e.target.value)}
                    />
                </dialogContent>
                <dialogActions>
                    <RaisedButton onClick={handleClose} color="primary">
                        Cancel
                    </RaisedButton>
                    <RaisedButton onClick={handleSave} color="primary">
                        Save
                    </RaisedButton>

                </dialogActions>

            </dialog>
        </div>
    )


}
