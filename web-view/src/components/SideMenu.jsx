import MenuNavigation from "./MenuNavigation.jsx";
import {RiFolder6Fill} from "react-icons/ri";
import {FaFolderPlus} from "react-icons/fa6";
import {AiFillHome} from "react-icons/ai";
import {MdEditSquare} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getData} from "../api/apiCalling.jsx";
import AddFolderModal from "../pages/home/AddFolderModal.jsx";

export default function SideMenu({setIsModalOpen, setModal}) {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState("home");
    const [folders, setFolders] = useState([]);
    const email = sessionStorage.getItem("email");

    useEffect(() => {
        const fetchFolders = async () => {
            try {
                const response = await getData("/user/all-folders", {"email": email})
                if (response.status === 200) {
                    setFolders(response.data);
                } else {
                    alert(response.data)
                }
                // console.log(response)
            } catch (e) {
                console.log(e);
            }
        }
        fetchFolders();
    }, [])
    const handleMenu = (currentMenu, path, isModal) => {
        setSelectedMenu(currentMenu);
        if(isModal){
            if(currentMenu==="addFolder"){
                setIsModalOpen(true);
                setModal(<AddFolderModal setIsModalOpen={setIsModalOpen}/>)
            }
            else if(currentMenu==="addNote"){
                setIsModalOpen(true);
                setModal()
            }
        }
        else{
            navigate(path);
        }

    }

    return (
        <div className="h-full w-1/4 border-2 border-black flex flex-col justify-start items-start divide-y divide-black px-10 py-6">
            <div className="flex flex-col justify-center items-start gap-3 mb-4">
                <MenuNavigation
                    text="Home"
                    isSelected={selectedMenu === "home"}
                    icon={<AiFillHome size={17}/>}
                    handleClick={() => handleMenu("home", "/home", false)}
                />
                <MenuNavigation
                    text="Add a note"
                    isSelected={selectedMenu === "addNote"}
                    icon={<MdEditSquare size={17}/>}
                    handleClick={() => handleMenu("addNote", "/home", true)}
                />
                <MenuNavigation
                    text="Add a folder"
                    isSelected={selectedMenu === "addFolder"}
                    path="/home"
                    icon={<FaFolderPlus size={17}/>}
                    handleClick={() => handleMenu("addFolder", "/home", true)}
                />
            </div>
            <div className="flex flex-col justify-center items-start gap-3 mb-4">
                {folders.length > 0 && folders.map((folder, index) => (
                    <MenuNavigation
                        text={folder.name}
                        isSelected={selectedMenu === folder.name}
                        icon={<RiFolder6Fill size={20}/>}
                        handleClick={() => handleMenu(folder.name, `/folder/${folder.name}`, false)}
                    />
                ))}
            </div>
            <button className="flex flex-col justify-center items-start text-buttonDanger" onClick={
                ()=> {
                    sessionStorage.setItem("email", "")
                    navigate("/")
                }
            }>Logout</button>

        </div>
    )
}