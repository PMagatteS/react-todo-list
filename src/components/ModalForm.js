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
// import Task from "./Task";
import React from "react";

const ModalForm = () => {

  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };
 
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
          <TextField required label="Choose a task name"></TextField>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select labelId="priority-label" label="Priority">
            <MenuItem>Low</MenuItem>
            <MenuItem>Medium</MenuItem>
            <MenuItem>High</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Pick a date"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
      </Box>

    </div>
  );
};

export default ModalForm;
