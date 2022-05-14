import React, {createContext, useState, useEffect} from 'react';
export const ThemeContext = createContext();


const ConfigTheme = {
    darkTheme : {
        primary: 'red',
        primary_a: 'rgba(88, 67, 228, 0.15)',
        primary_filter: 'invert(26%) sepia(83%) saturate(2356%) hue-rotate(239deg) brightness(88%) contrast(104%);',
        secondary: '#7563e9',
        spot: '#760ca4',
        Complementary: '#760ca4',
        white: '#FFFFFF',
        grey: '#737272',
    },

    lightTheme : {
        primary: '#5843E4',
        primary_a: 'rgba(88, 67, 228, 0.15)',
        primary_filter: 'invert(26%) sepia(83%) saturate(2356%) hue-rotate(239deg) brightness(88%) contrast(104%);',
        secondary: '#7563e9',
        spot: '#760ca4',
        Complementary: '#760ca4',
        white: '#FFFFFF',
        grey: '#737272',
    }
}


const ThemeContextProvider = (props) =>{
    const [theme, setTheme] = useState(true);

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