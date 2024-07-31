import Notes from "../../components/Notes.jsx";
import {useParams} from "react-router-dom";
import NoteInfoModal from "./NoteInfoModal.jsx";

export default function NoteViewBody() {
    const {folder} = useParams()
    return (
        <Notes header={folder} folderName={folder}/>
        // <NoteInfoModal/>
    )
}