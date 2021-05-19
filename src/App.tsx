import './App.css';
import './firebase'
import About from "./about/About";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import TechnicalSkills from "./technical/TechnicalSkills";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";

function App() {
    const mainColor = "#123456"
    const secondaryColor = "#2e4f70"
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: mainColor,
            },
            secondary: {
                main: secondaryColor,
            },
        },
    })
    return (
    <div className={"App"}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
            <About />
            <Education />
            <Experience />
            <TechnicalSkills />
        </MuiThemeProvider>
    </div>
    );
}

export default App;
