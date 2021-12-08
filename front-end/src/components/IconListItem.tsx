import * as React from 'react';
import { Link } from 'react-router-dom'

import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

import {theme} from '../styles/theme'

interface IProps {
    keyName: string,
    url: string,
    child: any,
  }

const IconListItem: React.FC<IProps> = ({ keyName, url, child }) => {

    return (
        <ListItem button key={keyName} component={Link} to={url} >
            <ListItemIcon color='primary.main'>
                {child}
            </ListItemIcon>
            <ListItemText primary={keyName} sx={{ color:`${theme.palette.primary.dark}`}} />
        </ListItem>
    )
    }

export default IconListItem