import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'

const Header = () => {
    return(
        <AppBar
        position='static'
        >
            <Toolbar>
                <IconButton
                size='large'
                color='inherit'
                edge='start'
                aria-label='menu'
                sx={{mr: 2}}>
                <Menu />
                </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>Criador de Tabelas</Typography>
            </Toolbar>
        </AppBar>
    )
}

export { Header }