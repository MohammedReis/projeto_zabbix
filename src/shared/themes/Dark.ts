import{createTheme} from '@mui/material'

export const  DarkTheme = createTheme({
    palette:{
        primary:{
            main: '#2A263F',
            contrastText: '#fff',
        },
        secondary:{
            main: '#fff',
            dark: '#757780',
            light: '#fff',
            contrastText: '#DBD4D3',
        },
        background:{
            paper:'#fff',
            default: '#0E1419',
        }
    }
});
