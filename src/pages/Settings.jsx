import { useContext } from "react";
import ThemeContext from "../contexts/Theme";

const Settings = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <>
            <h3>Settings</h3>
            <hr />
            <p>Theme : {theme}</p>
            <div className="form-check form-switch">
                <input
                 className="form-check-input" 
                 type="checkbox" role="switch" 
                 id="switchCheckChecked" 
                 checked={theme === 'light' ? true : false}
                 onChange={(e) => {setTheme(e.target.checked ? 'light' : 'dark')}}
                />
                <label className="form-check-label" for="switchCheckChecked">switch to {theme==='light'?'dark':'light'}</label>
            </div>
        </>
    )
}
export default Settings;