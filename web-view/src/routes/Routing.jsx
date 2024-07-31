import {Route, Routes} from "react-router-dom";
import Registration from "../pages/registration/index.jsx";
import Login from "../pages/login/index.jsx";
import ForgotPassword from "../pages/forgot-password/index.jsx";
import Home from "../pages/home/index.jsx";
import NoteView from "../pages/NoteView/index.jsx";

const Routing = () => {
    return(
        <>
            <Routes>
                <Route path="/registration" element={<Registration/>}></Route>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/folder/:folder" element={<NoteView/>}></Route>
            </Routes>
        </>
    );
}

export default Routing;