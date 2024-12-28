import { Link, NavLink } from "react-router";

const Login = ()=>{
    return(
        <>
            <h1> Login </h1>
            <Link to="/signup">Signup</Link>
            <Link to="/dashboard">Dashboard</Link>
        </>
    );
}

export default Login;