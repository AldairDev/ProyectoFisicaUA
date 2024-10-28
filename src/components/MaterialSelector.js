import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {materials} from '../utils/constants';
import {Box, ListItemIcon, TextField, Typography} from "@mui/material";

const MaterialSelect = ({value, onChange}) => (
    <Box mb={4} mt={4}>
        <Typography variant='h5'>Seleccione el Material:</Typography>
        <Box
            display="flex" // Alineación horizontal
            alignItems="center" // Centrar verticalmente los elementos
            gap={2} // Espacio entre elementos
        >
            <Select
                value={value} onChange={(e) => onChange(e.target.value)}
                size="small"
                sx={{width: 120}}>
                {Object.keys(materials).map((mat) => (
                    <MenuItem key={mat} value={mat}>
                        {mat}
                    </MenuItem>
                ))}
            </Select>
            <TextField
                value={materials[value] ? `resistividad: ${materials[value].resistivity}` : ''}
                size="small"
                sx={{width: 200}} disabled
            />
            <ListItemIcon>
                <img src={materials[value].image} style={{maxWidth: '100px', maxHeight: '104px'}} alt="materiales"/>
            </ListItemIcon>
        </Box>
    </Box>

);

export default MaterialSelect;
