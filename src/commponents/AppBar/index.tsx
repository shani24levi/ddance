import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Switch from '@mui/material/Switch'
import Logo from '../../assets/img/logo.png'
import useDarkMode from '../../hooks/useDarkMode'

const Header: React.FC = () => {
    const [darkMode, toggleMode] = useDarkMode()
    const label = { inputProps: { 'aria-label': 'Switch demo' } }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ padding: '8px', backgroundColor: '#242424' }}
            >
                <Toolbar>
                    <IconButton
                        disableRipple
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <Box
                            alt="..."
                            height="60px"
                            component="img"
                            src={Logo}
                        />
                    </IconButton>

                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        <strong
                            style={{
                                paddingLeft: '8px',
                                fontSize: '24px',
                                color: 'white',
                            }}
                        >
                            DANCE
                        </strong>
                    </Box>
                    <Switch
                        {...label}
                        defaultChecked
                        color="default"
                        onChange={() => toggleMode}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
