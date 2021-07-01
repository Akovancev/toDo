import { NavLink } from "react-router-dom";
import { divStyles, navStyles} from "./styles";

export const Navigation = () => {
    return (
        <div style={divStyles}>
                <NavLink style={navStyles} to="/">Sign in</NavLink>
                <NavLink style={navStyles} to="/todo">Todo</NavLink>
                <NavLink style={navStyles} to="/about">About</NavLink>
        </div >
    );
}
