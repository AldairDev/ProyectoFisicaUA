import React from 'react';
import {Select, MenuItem, Typography, TextField, Box, ListItemIcon} from '@mui/material';
import {areas} from '../utils/constants';

const AreaSelector = ({value, onChange}) => (
    <Box mb={6}>
        <Typography variant='h5' mb={1}>Seleccione el calibre (AWG):</Typography>
        <Box
            display="flex" // Alineación horizontal
            alignItems="center" // Centrar verticalmente los elementos
            gap={2} // Espacio entre elementos
        >
            <Select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                size="small"
                // sx={{ width: 120 }} // Controla el ancho
            >
                {Object.keys(areas).map((mat) => (
                    <MenuItem key={mat} value={mat}>
                     {mat}
                    </MenuItem>
                ))}
            </Select>

            {/* Campo de descripción */}
            <TextField
                value={areas[value] ? areas[value].description : ''}
                size="small"
                disabled
                sx={{width: 120}} // Controla el ancho del campo
            />
            <TextField
                value={areas[value] ? `amperaje maximo soportado: ${areas[value].MaximumAmperage}` : ''}
                size="small"
                disabled
                sx={{width: 300}} // Controla el ancho del campo
            />

            <ListItemIcon>
                <img src={areas[value].image} style={{maxWidth: '65%', height: 'auto'}} alt="cable"/>
            </ListItemIcon>

        </Box>
    </Box>
);

export default AreaSelector;
