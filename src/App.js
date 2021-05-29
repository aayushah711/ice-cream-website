import "./App.css";
import NavBarComponent from "./components/NavBar";
import PublicRoutes from "./routes/PublicRoutes";
import { useSelector, useDispatch } from "react-redux";
import { toggleToast } from "./redux/actions";
import Toast from "react-bootstrap/Toast";

const styles = {
    navbarSpace: {
        height: "55px",
    },
};

function App() {
    const theme = useSelector((state) => state.theme);
    const toast = useSelector((state) => state.toast);
    const toastMessage = useSelector((state) => state.toastMessage);
    const dispatch = useDispatch();
    const closeToast = () => {
        dispatch(
            toggleToast({
                status: false,
            })
        );
    };
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
                <div
                    style={{
                        position: "absolute",
                        top: 90,
                        right: 40,
                    }}
                >
                    <Toast
                        show={toast}
                        onClose={closeToast}
                        autohide
                        delay={1500}
                    >
                        <Toast.Header className={`bg-${theme}`}>
                            <strong className="mr-auto text-success">
                                {toastMessage}
                            </strong>
                        </Toast.Header>
                    </Toast>
                </div>
            </div>
        </div>
    );
}

export default App;
