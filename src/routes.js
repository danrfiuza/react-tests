import React from 'react'
import {
  Route,
  Switch,
  Link
} from "react-router-dom";


const ROUTES = [
  {
    path: "/",
    key: "LANDINGPAGE",
    name: "Start",
    exact: true,
    component: () => <h1> Landing Page</h1>
  },
  {
    path: "/login",
    key: "LOGIN",
    name: "Log In",
    exact: true,
    component: () => <h1> Log In </h1>
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    key: "RESETPWD",
    exact: true,
    component: () => <h1> Reset password </h1>
  },
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        name: "Main",
        exact: true,
        component: () => <h1>Main Page</h1>
      },
      {
        path: "/app/list",
        key: "APP_LIST",
        name: "Prodessionals List",
        exact: true,
        component: () => <h1> List </h1>
      }
    ]
  }
]

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
        path={route.path}
        exact={route.exact}
        render={props =><route.component {...props} routes={route.routes}/>}
    />
    );
}
    
export function RenderRoutes({routes}) {
  return (
    <Switch>
        {routes.map((route, i) => {
            return <RouteWithSubRoutes key={route.key} {...route} />
        })}
        <Route component={() => <h1> Not Found! </h1>}/>
    </Switch>
  )
}

/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
export function displayRouteMenu(routes) {
  /**
   * Render a single route as a list item link to the config's pathname
   */
  function singleRoute(route) {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.name}
      </Link>
      </li>
    );
  }

  // loop through the array of routes and generate an unordered list
  return ( <ul> {
      routes.map(route => {
        // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
        if (route.routes) {
          return (
            <React.Fragment key={route.key} >
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}
            </React.Fragment>
          );
        }
        // no nested routes, so just render a single route
        return singleRoute(route);
      })
    } </ul>
  );
}