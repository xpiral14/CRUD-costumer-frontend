import React from "react";
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from "react-router-dom";
import { Padrao } from "../layouts/Padrao";

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType<ReactDOMRouteProps>;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={(props) => {
        return (
          <Padrao>
            <Component {...props} />
          </Padrao>
        );
      }}
    />
  );
};

export default Route;
