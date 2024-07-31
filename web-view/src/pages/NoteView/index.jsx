import PageElement from "../../components/PageElement.jsx";
import NoteViewBody from "./NoteViewBody.jsx";
export default function NoteView(){
    const content = (<NoteViewBody/>)

    return(
        <PageElement content={content}/>
    )
}