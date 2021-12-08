import { createTheme } from '@mui/material/styles';

  
export const theme= createTheme({
  typography: {
    fontFamily: 'Quicksand',
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 2,
      letterSpacing: '.05rem',
    }
  },
  shape: {
    borderRadius: 20,
  },
  palette: {
    primary:{
			main:'#6172d0',
      light:'#f0f2ff',
      dark:'#283FC0',
		},
		secondary: {
			main:'#E26372',
      light:'#ffe6e9',
      dark:'#F3A3AD',
		}
  },
  zIndex: {
    speedDial: 1250,
  },
});
