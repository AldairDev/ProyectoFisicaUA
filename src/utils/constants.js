import awg10 from '../images/awg10.png';
import awg12 from '../images/awg12.png';
import awg14 from '../images/awg14.png';
import awg16 from '../images/awg16.png';
import awg18 from '../images/awg18.png';

import plata from '../images/plata.png';
import cobre from '../images/cobre.png';
import oro from '../images/oro.png';
import aluminio from '../images/aluminio.png';
import hierro from '../images/hierro.png';
import plomo from '../images/plomo.png';
import goma from '../images/goma.png';

export const materials = {
    Plata: {resistivity: 1.59e-8, image: plata},
    Cobre: {resistivity: 1.68e-8, image: cobre},
    Oro: {resistivity: 2.44e-8, image: oro},
    Aluminio: {resistivity: 2.65e-8, image: aluminio},
    Hierro: {resistivity: 9.71e-8, image: hierro},
    Plomo: {resistivity: 22.00e-8, image: plomo},
    Goma: {resistivity: 1e13, image: goma}
};

//Áreas en metros cuadrados para algunos calibres AWG
export const areas = {
    "10 AWG": {value: 5.26e-6, description: '5.26 mm²', MaximumAmperage: "30A", image: awg10},
    "12 AWG": {value: 3.31e-6, description: '3.31 mm²', MaximumAmperage: "20A", image: awg12},
    "14 AWG": {value: 2.08e-6, description: '2.08 mm²', MaximumAmperage: "15A", image: awg14},
    "16 AWG": {value: 1.31e-6, description: '1.31 mm²', MaximumAmperage: "13A", image: awg16},
    "18 AWG": {value: 0.823e-6, description: '0.823 mm²', MaximumAmperage: "10A", image: awg18}
};