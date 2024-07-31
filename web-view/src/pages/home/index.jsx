import HomeBody from "./HomeBody.jsx";
import PageElement from "../../components/PageElement.jsx";
export default function Home(){
    const content = (<HomeBody/>)

    return(
        <PageElement content={content}/>
    )
}