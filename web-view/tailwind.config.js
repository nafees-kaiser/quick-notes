import customColors from "./src/data/color.jsx";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'borderColor': "#CFC1CA",
                'textFieldColor': "#F6F8FA",
                'hintTextColor': "#CFC1CA",
                'fontColor': "#000000",
                'fontLightColor': "#515050",
                'buttonBackground': "#343F4B",
                'buttonHover' : "#4f6071",
                'primary': "#343F4B",
                'buttonText': "#FFFFFF",
                'secondaryBackground': "#F6F8FA",
                'noteRed': "#CC635E",
                'noteBlue': "#2674B9",
                'noteYellow': "#D0C638",
                'noteGreen': "#87AB87",
                'noteLightRed': "#FFD7D4",
                'noteLightBlue': "#DFF2FF",
                'noteLightYellow': "#FEFBEC",
                'noteLightGreen': "#C0E1C1",
            },
            fontFamily: {
                'sans': ["Inter"]
            }
        },

    },
    plugins: [],
}

