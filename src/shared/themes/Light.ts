import{createTheme} from '@mui/material'

export const  LightTheme = createTheme({
    palette:{
        primary:{
            main: '#7C9299',
            dark: '#2A263F',
            contrastText: '#000',
        },
        secondary:{
            main: '#2A263F',
            light: '#000',
            contrastText: '#DBD4D3',
        },
        background:{
            paper:'#7C9299',
            default: '#DBD4D3',
        }
    }
});
