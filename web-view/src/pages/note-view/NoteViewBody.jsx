import Notes from "../../components/Notes.jsx";
import {useParams} from "react-router-dom";

export default function NoteViewBody() {
    const {folder} = useParams()
    return (
        <Notes header={folder} folderName={folder}/>
    )
}