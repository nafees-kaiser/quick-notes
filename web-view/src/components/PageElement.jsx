import Header from "./Header.jsx";
import SideMenu from "./SideMenu.jsx";
import MainBody from "./MainBody.jsx";
import {useState} from "react";

export default function PageElement({content}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modal, setModal] = useState(null);
    return (
        <div>
            <Header/>
            <div className="flex gap-10 mt-10 h-screen">
                <SideMenu
                    setIsModalOpen={setIsModalOpen}
                    setModal={setModal}
                />
                <MainBody
                    content={content}
                    isModalOpen={isModalOpen}
                    modal={modal}
                />

            </div>

        </div>
    )
}