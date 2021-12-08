import * as React from 'react';
import { Link } from 'react-router-dom'

import { IconButton, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import { BiDollar } from "react-icons/bi";
import { MdPersonAddAlt1 } from "react-icons/md";
import {theme} from '../styles/theme'


const actions = [
  { icon: 
    <IconButton component={Link} to='/users'>
      <MdPersonAddAlt1 fontSize={23} style={{ fill:`${theme.palette.primary.dark}`}}/>
    </IconButton>, name: 'Add Friend' },
  { icon: 
    <IconButton component={Link} to='/addpayment'>
      <BiDollar fontSize={23} style={{ fill:`${theme.palette.primary.dark}`}}/>
    </IconButton>, name: 'Add Payment' },
];

export default function SpeedAdd() {
  return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        color='black'
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>

  );
}