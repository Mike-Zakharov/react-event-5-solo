import React from "react";
import { Box, Typography } from '@mui/material';
import Image from './not-found-result.svg'

const NotFoundComponent = () => {

    const imgStyles = { 
        width: 262 + 'px', 
        height: 272 + 'px' 
    }

    return (
        <Box sx={{textAlign: 'center'}}>
            <img src={Image} alt="Not Found" style={imgStyles} />
            <Typography variant="h5" component="h5" sx={{ marginTop: '20px'}}>
                Запросы не найдены
            </Typography>
        </Box>
    )
}

export default NotFoundComponent;