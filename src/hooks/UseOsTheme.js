import { useState } from "react";

//get thme from os
const UseOsTheme = () => {
    const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? false : true;
    const [isOsTheme, setOsTheme] = useState(theme);

    return {
        isOsTheme,
        setOsTheme
    };
};

export default UseOsTheme;