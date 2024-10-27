import { Box, Typography } from "@mui/material";
import React from "react";

const ErrorComponent = () => {

    return (
        <Box sx={{width:'1008',height:'843px', pr:'280px', pl:'276px'}}>
            <img src="./ErrorImg.svg" alt="Error" />
            <Typography variant="h5" component='h5' color="error">Ошибка! Не удалось загрузить запросы</Typography>
        </Box>
    )
}

export default ErrorComponent;