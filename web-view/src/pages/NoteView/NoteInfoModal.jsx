import {IoMdStopwatch} from "react-icons/io";
import {FaCalendarAlt} from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";
import {MdEditSquare} from "react-icons/md";
import {MdCancel} from "react-icons/md";
import {deleteData, postData} from "../../api/apiCalling.jsx";
import {useState} from "react";
import EditNoteModal from "./EditNoteModal.jsx";

export default function NoteInfoModal({setIsModalOpen, data}) {
    const email = sessionStorage.getItem("email");
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const deleteNote = async () => {
        setIsModalOpen(false);
        try {
            const response = await deleteData(`/user/delete-note/${data.id}`, {"email": email});

        } catch (error) {
            console.log(error);
        }
    }
    const updateNote = () => {
        setIsEditModalOpen(true);
        // setIsModalOpen(false);

    }

    return (
        <div
            className={"w-[700px] min-h-[500px] pb-6 px-8 rounded-lg shadow-lg z-50 flex flex-col gap-5"}
            style={{backgroundColor: (data && data.backgroundColor) ? data.backgroundColor : "#ffffff"}}
        >
            <button className={"relative top-2 left-full"} onClick={() => setIsModalOpen(false)}><MdCancel size={25}
                                                                                                           color={(data && data.textColor) ? data.textColor : "#000000"}/>
            </button>
            <div className={"flex flex-col gap-3"}>
                <div className={"text-3xl font-bold"}>
                    {(data && data.title) ? data.title : "Title"}
                </div>
                <div className={"flex justify-between items-end"}>
                    <div className={"flex flex-col gap-1.5"}>
                        <div className={"flex justify-start items-center gap-1.5"}>
                            <IoMdStopwatch size={25} color={(data && data.textColor) ? data.textColor : "#000000"}/>
                            <div className={"text-md"}
                                 style={{color: (data && data.textColor) ? data.textColor : "#000000"}}>
                                {(data && data.timeCreated) ? data.timeCreated : "Time"}
                            </div>
                        </div>
                        <div className={"flex justify-start items-center gap-1.5"}>
                            <FaCalendarAlt size={25} color={(data && data.textColor) ? data.textColor : "#000000"}/>
                            <div className={"text-md"}
                                 style={{color: (data && data.textColor) ? data.textColor : "#000000"}}>
                                {(data && data.dateCreated) ? data.dateCreated : "Date"}
                            </div>
                        </div>
                    </div>
                    <div className={"flex gap-2 justify-start items-center"}>
                        <button onClick={deleteNote}><FaTrashAlt size={27}
                                                                 color={(data && data.textColor) ? data.textColor : "#000000"}/>
                        </button>
                        <button onClick={updateNote}><MdEditSquare size={30}
                                                                   color={(data && data.textColor) ? data.textColor : "#000000"}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col gap-2"}>
                <div className={"w-full border-b-2"}
                     style={{borderColor: (data && data.textColor) ? data.textColor : "#000000"}}></div>
                <div className={"text-sm"}
                     style={{color: (data && data.textColor) ? data.textColor : "#000000"}}>{(data && data.content) ? data.content : "Content"}</div>
            </div>
            {isEditModalOpen && <div className={"fixed top-[10%] left-[30%] z-50"}>
                <EditNoteModal
                    setIsModalOpen={setIsEditModalOpen}
                    prevData={data}
                    setIsEditModalOpen={setIsEditModalOpen}
                />
            </div>}
        </div>
    )
}