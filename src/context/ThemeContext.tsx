import { createContext, useState } from "react";


const ThemeContext = createContext({
    theme: false,
    setTheme() {
        this.theme = !this.theme
            switch (this.theme) {
                case true: 
                    return document.body.className = "dark";
                case false: 
                    return document.body.className = "light";
            }
            

    }
})

export default ThemeContext