import Notes from "../../components/Notes.jsx";
import {useParams} from "react-router-dom";

export default function SearchViewBody({search}) {
    // const {folder} = useParams()
    return (
        <Notes search={search}/>
    )
}