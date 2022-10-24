import{createTheme} from '@mui/material'

export const  LightTheme = createTheme({
    palette:{
        primary:{
            main: '#7C9299',
            contrastText: '#000',
        },
        secondary:{
            main: '#000',
            dark: '#aaa',
            light: '#fff',
            contrastText: '#DBD4D3',
        },
        background:{
            paper:'#fff',
            default: '#DBD4D3',
        }
    }
});
