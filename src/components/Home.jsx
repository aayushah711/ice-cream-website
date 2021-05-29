import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const styles = {
    homepage: {
        width: "100%",
    },
    homepageImage: {
        height: "400px",
        backgroundColor: "lightpink",
    },
};
const Home = () => {
    const theme = useSelector((state) => state.theme);
    return (
        <div style={styles.homepage}>
            <div
                style={styles.homepageImage}
                className="d-flex flex-column justify-content-center align-items-center"
            >
                <h1 className="display-4 text-dark">
                    Welcome to the Ice Cream Shop.
                </h1>
                <h1 className="display-6 text-muted d-none d-md-block">
                    Ice creams as you've never known it.
                </h1>

                <Link to="/purchase">
                    <Button className="mt-3" variant={theme}>
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
