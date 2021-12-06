import * as React from 'react';
import { Link } from 'react-router-dom'

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { BiDollar } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";

const actions = [
  { icon: <Link to='/users'><FiUserPlus fontSize={23}/></Link>, name: 'Add Friend' },
  { icon: <Link to='/addpayment'><BiDollar fontSize={23}/></Link>, name: 'Add Payment' },
];

export default function SpeedAdd() {
  return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
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