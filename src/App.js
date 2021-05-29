import "./App.css";
import NavBarComponent from "./components/NavBar";
import PublicRoutes from "./routes/PublicRoutes";
import { useSelector } from "react-redux";

const styles = {
    navbarSpace: {
        height: "55px",
    },
};

function App() {
    const theme = useSelector((state) => state.theme);
    console.log(theme);
    return (
        <div className="App">
            <div
                className={
                    theme === "dark" ? "background dark-mode" : "background"
                }
            >
                <NavBarComponent></NavBarComponent>
                <div style={styles.navbarSpace}>a</div>
                <PublicRoutes></PublicRoutes>
            </div>
        </div>
    );
}

export default App;
