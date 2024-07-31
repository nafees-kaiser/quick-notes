import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {postData} from "../../api/apiCalling.jsx";
import app_logo from "../../assets/app_logo.svg";
import TextField from "../../components/TextField.jsx";
import Button from "../../components/Button.jsx";
import CustomLink from "../../components/Link.jsx";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const handleInputChange = (value, name) => {
        // console.log(formData)
        setFormData((prev) => ({...prev, [name]: value}));
        // console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        if (formData.email.length === 0 || formData.password.length === 0) {
            alert("Please fill the form");
            return;
        }
        try {
            const response = await postData('/login', formData)
            if (response.status === 200) {
                sessionStorage.setItem("email", response.data.email);
                navigate('/home')
            }
            // console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="h-full flex flex-col justify-center items-center w-full py-20">
                    <div
                        className="border-2 border-borderColor rounded-lg flex flex-col justify-center items-center w-fit px-6 py-10">
                        <div className="mb-10">
                            <img src={app_logo} alt="App Logo"/>
                        </div>
                        <div className="mb-5">

                            <TextField type="email" name="email" placeholder="eg. email@email.com" label="Email"
                                       handleChange={(e) => handleInputChange(e.target.value, e.target.name)}
                            />
                            <TextField type="password" name="password" placeholder="******" label="Password"
                                       handleChange={(e) => handleInputChange(e.target.value, e.target.name)}
                            />

                        </div>
                        <Button text="Login" type="submit"/>

                    </div>
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <CustomLink path="/forgot-password" text="Forgot your password?"/>
                        <CustomLink path="/registration" text="Don't have an account? Register"/>
                    </div>

                </div>
            </form>
        </>
    );
}