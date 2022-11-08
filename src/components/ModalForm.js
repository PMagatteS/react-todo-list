import dayjs from "dayjs";
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useStateContext } from "../utils/HandleTasks";
import React from "react";

const ModalForm = () => {

  const {date, changeDate, getName, priority, getPriority} = useStateContext();
  
  return (
    <div>
   
      <Box
        sx={{
          width: 600,
          height: 600,
          marginTop: "200px",
          marginLeft: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <FormControl variant="standard">
          <TextField required label="Choose a task name"  onChange={getName} ></TextField>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select labelId="priority-label" label="Priority" value={priority} onChange={getPriority}>
            <MenuItem value="Low" >Low</MenuItem>
            <MenuItem value="Medium"  >Medium</MenuItem>
            <MenuItem value="High"  >High</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Pick a date"
              value={date}
              onChange={changeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
      </Box>

    </div>
  );
};

export default ModalForm;
