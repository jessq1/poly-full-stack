import { Theme, CSSObject } from '@mui/material/styles';

export const mobileMixin = (theme: Theme): CSSObject => ({
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.down('sm')]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
});



