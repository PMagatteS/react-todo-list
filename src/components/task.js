import React from "react";
import {Box, Card, CardContent, Typography, Checkbox } from "@mui/material";
import { Delete } from "@material-ui/icons";
import {cardStyle} from "../style"


const Task = () => {
  return <div>

    <Card raised={true} sx={cardStyle.card}>
      <CardContent>
        <Box sx={cardStyle.cardBox}>

        <Checkbox margin={'auto'}>

        </Checkbox>
        <Typography sx={cardStyle.cardTypography} >
          Taskname
        </Typography>
       
        <Delete style={cardStyle.trashIcon}></Delete>
        </Box>
      </CardContent>
    </Card>
  </div>;
};

export default Task;
