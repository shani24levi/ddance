import React,{useState, useEffect} from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState<Boolean>(false);

    const toggleMode =() =>{
        if(darkMode){
            window.localStorage.setItem('darkmode', 'dark');
            setDarkMode(true);
            console.log('dark');
        }
        else{
            window.localStorage.setItem('darkmode', 'light');
            setDarkMode(false);
            console.log('light');
        }
    }

    useEffect(() => {
        const localModeTheme= window.localStorage.getItem('darkmode');
        localModeTheme ? setDarkMode(true) : setDarkMode(false)
    }, [])
    

    return [darkMode, toggleMode]
}

export default useDarkMode;