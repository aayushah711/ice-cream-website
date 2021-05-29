import Button from "react-bootstrap/Button";

const styles = {
    homepage: {
        height: "100vh",
        width: "100%",
    },
    homepageImage: {
        height: "400px",
        backgroundColor: "lightpink",
    },
};
const Home = () => {
    return (
        <div style={styles.homepage}>
            <div
                style={styles.homepageImage}
                className="d-flex flex-column justify-content-center align-items-center"
            >
                <h1 className="display-4">Welcome to the Ice Cream Shop.</h1>
                <h1 className="display-6 d-none d-md-block">
                    Ice creams as you've never known it.
                </h1>
                <Button variant="light" className="mt-3">
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export default Home;
