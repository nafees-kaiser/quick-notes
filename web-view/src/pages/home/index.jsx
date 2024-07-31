import logo from '../../assets/app_logo.svg'
import TextField from "../../components/TextField.jsx";
import Header from "../../components/Header.jsx";
import SideMenu from "../../components/SideMenu.jsx";
import MainBody from "../../components/MainBody.jsx";
import Button from "../../components/Button.jsx";
import HomeBody from "./HomeBody.jsx";
import PageElement from "../../components/PageElement.jsx";
export default function Home(){
    const content = (<HomeBody/>)

    return(
        <PageElement content={content}/>
    )
}