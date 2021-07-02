import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "./Context";

export const PrivateRoute = ({ children, ...rest }) => {
    let context = useContext(Context)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                context.isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/message",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )

}