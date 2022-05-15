import React, {createContext, useState, useEffect} from 'react';
//modal
import UseOsTheme from '../hooks/UseOsTheme'
export const ThemeContext = createContext();



const ThemeContextProvider = (props) =>{
    const { isOsTheme } = UseOsTheme();
    const [theme, setTheme] = useState(isOsTheme);

    const toggleTheme = () =>{
        setTheme(!theme)
    }

    useEffect(() => {
        let rslt = null;
        if(theme){
            rslt = 'light'
        }else{
            rslt = 'dark'
        }

        document.body.dataset.theme = rslt
      }, [theme]);

    return(
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
};

export default ThemeContextProvider;