import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Logo from '../../assets/img/logo.png'

const Header: React.FC = () => {
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
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
