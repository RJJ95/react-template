import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Layout from "./components/functionals/layout";

// Config
import { routes } from "./config/routes";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {Object.values(routes).map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
