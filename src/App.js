import "./App.css";
import NavBarComponent from "./components/NavBar";
import PublicRoutes from "./routes/PublicRoutes";

const styles = {
    navbarSpace: {
        height: "55px",
    },
};

function App() {
    return (
        <div className="App">
            <NavBarComponent></NavBarComponent>
            <div style={styles.navbarSpace}>a</div>
            <PublicRoutes></PublicRoutes>
        </div>
    );
}

export default App;
