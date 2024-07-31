import FolderCard from "../../components/FolderCard.jsx";
import {useEffect, useState} from "react";
import {getData} from "../../api/apiCalling.jsx";
import {Link} from "react-router-dom";
import Notes from "../../components/Notes.jsx";

export default function HomeBody() {
    const [folders, setFolders] = useState([]);
    const email = sessionStorage.getItem("email");
    useEffect(() => {
        const fetchFolders = async () => {
            try {
                const response = await getData("/user/all-folders", {"email": email})
                console.log(response)
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
    const noFolder = (
        <div className={"text-hintTextColor w-full h-[200px] flex flex-1 justify-center items-center"}>
            No folders
        </div>
    )
    return (
        <>
            <div className={"w-full min-h-1/3 flex flex-col gap-8"}>
                <h1 className={"font-bold text-2xl"}>Recent folders</h1>

                <div className={"w-fit grid grid-cols-4 gap-2.5"}>
                    {folders.length === 0 ? noFolder:
                    folders.map((folder) => (
                        <Link to={`/folder/${folder.name}`}>
                            <FolderCard
                                folderName={folder.name}
                                folderColor={folder.iconColor ? folder.iconColor : "#000000"}
                                folderBg={folder.bgColor ? folder.bgColor : "#ffffff"}
                                />
                        </Link>
                    ))}
                </div>
            </div>
            <div className={"w-full h-20"}></div>
            <Notes/>
            {/*<AddNoteModal/>*/}

        </>
    )
}