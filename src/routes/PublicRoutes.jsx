import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Purchase from "../components/Purchase";

export default function Routing(props) {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/purchase" exact component={Purchase} />
            {/* <Route path="/cart" exact component={Cart} /> */}

            <Route render={() => <h3>Page not found</h3>} />
        </Switch>
    );
}
