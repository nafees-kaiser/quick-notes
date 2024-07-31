import logo from "../assets/app_logo.svg";
import profile from "../assets/profile_avatar.svg"
import TextField from "./TextField.jsx";
import SearchTextField from "./SearchTextField.jsx";

export default function Header() {
    return (
        <header className="flex items-center gap-14 pr-10 pt-10">
            <div className="w-1/4 flex items-center justify-center">
                <img src={logo} alt="logo"/>
            </div>
            <div className="w-full flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-3xl">MY NOTES</h1>
                </div>
                <div className="w-1/6 h-fit flex justify-center items-center">
                    <SearchTextField type="text" name="search" placeholder="Search"/>
                </div>
                <div className="flex gap-1.5 items-center">
                    <div>Name</div>
                    <div>
                        <img src={profile} alt="profile avatar"/>
                    </div>
                </div>
            </div>


        </header>
    )
}