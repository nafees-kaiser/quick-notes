import {RiFolder6Fill} from "react-icons/ri";
import TextField from "../../components/TextField.jsx";
import Button from "../../components/Button.jsx";
import OutlineButton from "../../components/OutlineButton.jsx";
import {useState} from "react";
import customColors from "../../data/color.jsx";
import {postData} from "../../api/apiCalling.jsx";

export default function AddFolderModal({setIsModalOpen}) {
    const {
        noteRed,
        noteYellow,
        noteBlue,
        noteGreen,
        noteLightRed,
        noteLightBlue,
        noteLightGreen,
        noteLightYellow
    } = customColors
    const [data, setData] = useState({
        name: "",
        iconColor: noteYellow,
        bgColor: noteLightYellow,
    });
    const email = sessionStorage.getItem("email");
    const [folderColor, setFolderColor] = useState(noteYellow);
    const [selectedColor, setSelectedColor] = useState(0);
    const handleFolderName = (value, name) => {
        setData((prev) => ({...prev, [name]: value}));
    }
    const handleColor = (color) => {
        setSelectedColor(color);
        switch (color) {
            case 0:
                setData((prev) => ({...prev, iconColor: noteYellow, bgColor: noteLightYellow}));
                setFolderColor(noteYellow)
                break
            case 1:
                setData((prev) => ({...prev, iconColor: noteRed, bgColor: noteLightRed}));
                setFolderColor(noteRed)
                break
            case 2:
                setData((prev) => ({...prev, iconColor: noteBlue, bgColor: noteLightBlue}));
                setFolderColor(noteBlue)
                break
            case 3:
                setData((prev) => ({...prev, iconColor: noteGreen, bgColor: noteLightGreen}));
                setFolderColor(noteGreen)
                break
            default:


        }
    }
    const handleSubmit = async () => {
        try{
            const response = await postData("/user/add-folder", data, {"email": email})
            // console.log(response)
            if(response.status === 201) {
                setIsModalOpen(false);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={" flex flex-col gap-2.5 py-6 px-8 rounded-lg shadow-lg z-50 bg-white"}>
            <div className={"flex flex-col gap-2"}>
                <div className={"font-bold"}>New folder</div>
                <div className={"flex gap-2.5"}>
                    <RiFolder6Fill size={40} color={folderColor}/>
                    <TextField type={"text"}
                               name={"name"}
                               placeholder={"eg. New folder"}
                               handleChange={(e) => handleFolderName(e.target.value, e.target.name)}
                    />
                </div>
            </div>
            <div className={"flex flex-col gap-8 items-end"}>
                <div className={"flex gap-1.5"}>

                    <div className={`w-8 h-8 rounded-[1000px] bg-noteYellow`}
                         style={selectedColor === 0 ? {border: '2px solid black'}:{}}
                         onClick={() => handleColor(0)}
                    ></div>
                    <div className={"w-8 h-8 rounded-[1000px] bg-noteRed"}
                         style={selectedColor === 1 ? {border: '2px solid black'}:{}}
                         onClick={() => handleColor(1)}
                    ></div>
                    <div className={"w-8 h-8 rounded-[1000px] bg-noteBlue"}
                         style={selectedColor === 2 ? {border: '2px solid black'}:{}}
                         onClick={() => handleColor(2)}
                    ></div>
                    <div className={"w-8 h-8 rounded-[1000px] bg-noteGreen"}
                         style={selectedColor === 3 ? {border: '2px solid black'}:{}}
                         onClick={() => handleColor(3)}
                    ></div>
                </div>
                <div className={"flex gap-1.5"}>
                    <Button type="submit" text={"Save"} handleClick={handleSubmit}/>
                    <OutlineButton type="button" text={"Cancel"} handleClick={() => {
                        setIsModalOpen(false)
                    }}/>
                </div>

            </div>


        </div>
    )
}