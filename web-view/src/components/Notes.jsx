import {IoMdStopwatch} from "react-icons/io";
import customColors from "../data/color.jsx";
import {useEffect, useState} from "react";
import {postData} from "../api/apiCalling.jsx";
import NoteCard from "./NoteCard.jsx";
import {Link} from "react-router-dom";
import FolderCard from "./FolderCard.jsx";
import Tab from "./Tab.jsx";
import NoteInfoModal from "../pages/note-view/NoteInfoModal.jsx";

export default function Notes({header = "My notes", folderName = "", search=""}) {
    const [modal, setModal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notes, setNotes] = useState([]);
    const [tabSelected, setTabSelected] = useState("all");
    const email = sessionStorage.getItem("email");
    const data = {
        date: "",
        search: search,
        folderName: folderName
    };
    const fetchNotes = async () => {
        try {
            const response = await postData("/user/all-notes", data, {"email": email})
            console.log(response)
            if (response.status === 200) {
                console.log(response.data)
                setNotes(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchNotes()
    }, [folderName, search]);

    const {fontLightColor} = customColors
    const noNotes = (
        <div className={"text-hintTextColor w-full h-[200px] flex flex-1 justify-center items-center"}>
            No folders
        </div>
    )
    const handleFilter = (value) => {
        setTabSelected(value)
        if (value !== 'all') {
            data['date'] = value
            data['folderName'] = folderName

        } else {
            data['date'] = ""
            data['folderName'] = folderName

        }
        fetchNotes()
    }
    const handleNote = (n) => {
        setIsModalOpen(true)
        setModal(<NoteInfoModal
            setIsModalOpen={setIsModalOpen}
            data={n}
        />)

    }
    return (
        <div className={"w-full min-h-2/3 flex flex-col gap-8"}>
            <div className={"flex flex-col gap-6"}>
                <h1 className={"font-bold text-2xl"}>{header}</h1>
                {notes.length > 0 && <div className={"flex gap-4"}>
                    <Tab
                        name={"all"}
                        isSelected={tabSelected === "all"}
                        content={"All"}
                        onClick={(e) => handleFilter(e.target.name)}/>
                    <Tab
                        name={"today"}
                        isSelected={tabSelected === "today"}
                        content={"Today"}
                        onClick={(e) => handleFilter(e.target.name)}/>
                    <Tab
                        name={"this week"}
                        isSelected={tabSelected === "this week"}
                        content={"This week"}
                        onClick={(e) => handleFilter(e.target.name)}/>
                    <Tab
                        name={"this month"}
                        isSelected={tabSelected === "this month"}
                        content={"This month"}
                        onClick={(e) => handleFilter(e.target.name)}/>
                </div>
                }

            </div>
            <div className={"w-fit grid grid-cols-4 gap-2.5"}>
                {notes.length === 0 ? noNotes :
                    notes.map((note) => (
                        <button onClick={() => handleNote(note)}>
                            <NoteCard
                                title={note.title}
                                content={note.content}
                                textColor={note.textColor}
                                backgroundColor={note.backgroundColor}
                                dateCreated={note.dateCreated}
                                timeCreated={note.timeCreated}
                            />
                        </button>
                    ))}
            </div>
            {isModalOpen && <div className={"fixed top-[10%] left-[30%] z-50"}>{modal}</div>}
        </div>
    )
}