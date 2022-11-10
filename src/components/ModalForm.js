import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Button,
  IconButton,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useStateContext } from "../utils/HandleTasks";
import { formStyle } from "../style";
import { Close } from "@material-ui/icons";

import React from "react";

const ModalForm = () => {

  const {date, changeDate, getName, priority, getPriority, openModal, toggleModal} = useStateContext();
  
  return (
    <div>
      <Modal
       open={openModal}
       onClose={toggleModal}
      >
      <Box
        sx={formStyle.formBox}
      >
         <IconButton color="primary" sx={formStyle.closeButton} >
            <Close></Close>
          </IconButton>
        <FormControl >
          <TextField variant="standard" required label="Choose a task name"  onChange={getName} ></TextField>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select labelId="priority-label" label="Priority" value={priority} onChange={getPriority}>
            <MenuItem value="Low" >Low</MenuItem>
            <MenuItem value="Medium"  >Medium</MenuItem>
            <MenuItem value="High"  >High</MenuItem>
          </Select>
        </FormControl>
        <FormControl >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              variant="standard"
              label="Pick a date"
              value={date}
              onChange={changeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
        <Button  variant="contained" >Create task</Button>
      </Box>
          </Modal>

    </div>
  );
};

export default ModalForm;
