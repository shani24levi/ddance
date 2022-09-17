import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './assets/matirial-styles/theme'
import AppBar from './commponents/AppBar'
import Home from './commponents/Home'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="body">
                <AppBar />
                <Home />
            </div>
        </ThemeProvider>
    )
}

export default App
