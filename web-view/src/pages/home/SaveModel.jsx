import {RiFolder6Fill} from "react-icons/ri";
import {FaFolderPlus} from "react-icons/fa6";
import TextField from "../../components/TextField.jsx";
import Button from "../../components/Button.jsx";
import OutlineButton from "../../components/OutlineButton.jsx";
import {useEffect, useState} from "react";
import customColors from "../../data/color.jsx";
import {postData} from "../../api/apiCalling.jsx";

export default function SaveModel({setIsModalOpen, data, setIsNoteModalOpen}) {
    const[newData, setData] = useState(data)
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
    const [newFolder, setNewFolder] = useState(false);
    const [folder, setFolder] = useState({
        name: "",
        iconColor: noteYellow,
        bgColor: noteLightYellow,
    });
    const email = sessionStorage.getItem("email");
    const [folderColor, setFolderColor] = useState(noteYellow);
    const [selectedColor, setSelectedColor] = useState(0);
    const handleFolderName = (value, name) => {
        setFolder((prev) => ({...prev, [name]: value}));
    }

    useEffect(() => {
        setData((prev) => ({...prev, folder: folder}))
    }, [folder]);
    const handleColor = (color) => {
        setSelectedColor(color);
        switch (color) {
            case 0:
                setFolder((prev) => ({...prev, iconColor: noteYellow, bgColor: noteLightYellow}));
                setFolderColor(noteYellow)
                break
            case 1:
                setFolder((prev) => ({...prev, iconColor: noteRed, bgColor: noteLightRed}));
                setFolderColor(noteRed)
                break
            case 2:
                setFolder((prev) => ({...prev, iconColor: noteBlue, bgColor: noteLightBlue}));
                setFolderColor(noteBlue)
                break
            case 3:
                setFolder((prev) => ({...prev, iconColor: noteGreen, bgColor: noteLightGreen}));
                setFolderColor(noteGreen)
                break
            default:


        }
    }
    const handleSubmit = async () => {
        try {
            console.log(newData)
            const response = await postData("/user/add-note", newData, {"email": email})
            if(response.status === 201) {
                setIsModalOpen(false);
                setIsNoteModalOpen(false);
            }
            // console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={" flex flex-col gap-2.5 py-6 px-8 rounded-lg shadow-lg z-50 bg-white"}>
            <div className={"flex flex-col gap-2"}>
                <div className={"font-bold"}>Save to</div>
                <div className={"flex gap-2.5"}>
                    {newFolder ? (<RiFolder6Fill size={40} color={folderColor}/>) :
                        (
                            <button onClick={() => setNewFolder(!newFolder)}>
                                <FaFolderPlus size={40} color={folderColor}/>
                            </button>
                        )
                    }

                    <TextField type={"text"}
                               name={"name"}
                               placeholder={"eg. New folder"}
                               handleChange={(e) => handleFolderName(e.target.value, e.target.name)}
                    />
                </div>
            </div>

            <div className={"flex flex-col gap-8 items-end"}>
                {newFolder && (
                    <div className={"flex gap-1.5"}>

                        <div className={`w-8 h-8 rounded-[1000px] bg-noteYellow`}
                             style={selectedColor === 0 ? {border: '2px solid black'} : {}}
                             onClick={() => handleColor(0)}
                        ></div>
                        <div className={"w-8 h-8 rounded-[1000px] bg-noteRed"}
                             style={selectedColor === 1 ? {border: '2px solid black'} : {}}
                             onClick={() => handleColor(1)}
                        ></div>
                        <div className={"w-8 h-8 rounded-[1000px] bg-noteBlue"}
                             style={selectedColor === 2 ? {border: '2px solid black'} : {}}
                             onClick={() => handleColor(2)}
                        ></div>
                        <div className={"w-8 h-8 rounded-[1000px] bg-noteGreen"}
                             style={selectedColor === 3 ? {border: '2px solid black'} : {}}
                             onClick={() => handleColor(3)}
                        ></div>
                    </div>
                )}
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