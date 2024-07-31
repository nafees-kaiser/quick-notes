import {useState} from "react";
import '../../index.css'
import app_logo from '../../assets/app_logo.svg'
import TextField from "../../components/TextField.jsx";
import Button from "../../components/Button.jsx";
import CustomLink from "../../components/Link.jsx";
import {postData} from "../../api/apiCalling.jsx";
import {useNavigate} from "react-router-dom";

export default function Registration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        retypePassword: ""
    })
    const handleInputChange = (value, name) => {
        // console.log(formData)
        setFormData((prev)=> ({ ...prev, [name]: value }));
        // console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        if(formData.fullName.length === 0 || formData.email.length === 0 || formData.password.length === 0 || formData.retypePassword.length === 0) {
            alert("Please fill the form");
            return;
        }
        if(formData.password === formData.retypePassword){
            try {
                const {retypePassword, ...dataToSubmit} = formData;
                const response = await postData('/registration', dataToSubmit )
                if(response.status===201){
                    navigate('/')
                }
                // console.log(response)
            } catch (e) {
                console.log(e)
            }
        }
        else{
            alert("Password does not match")
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
                            <TextField type="text" name="fullName" placeholder="eg. John Doe" label="Full Name"
                                       handleChange={(e) => handleInputChange(e.target.value, e.target.name)}
                            />
                            <TextField type="email" name="email" placeholder="eg. email@email.com" label="Email"
                                       handleChange={(e) => handleInputChange(e.target.value, e.target.name)}
                            />
                            <TextField type="password" name="password" placeholder="******" label="Password"
                                       handleChange={(e) => handleInputChange(e.target.value, e.target.name)}
                            />
                            <TextField type="password" name="retypePassword" placeholder="******"
                                       label="Retype password"
                                       handleChange={(e) => handleInputChange(e.target.value, e.target.name)}
                            />
                        </div>
                        <Button text="Register" type="submit"/>

                    </div>
                    <div className="mt-4">
                        <CustomLink path="/" text="Already have an account? Login"/>
                    </div>

                </div>
            </form>
        </>
    );

}