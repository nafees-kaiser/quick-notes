import {Route, Routes} from "react-router-dom";
import Registration from "../pages/registration/index.jsx";
import Login from "../pages/login/index.jsx";
import ForgotPassword from "../pages/forgot-password/index.jsx";

const Routing = () => {
    return(
        <>
            <Routes>
                <Route path="/registration" element={<Registration/>}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
            </Routes>
        </>
    );
}

export default Routing;