import AddFolderModal from "../pages/home/AddFolderModal.jsx";

export default function MainBody({content, isModalOpen = false, modal}) {
    return (
        <>
            <div
                className="flex flex-col justify-start items-start border-2 border-red-800 w-full rounded-tl-2xl px-8 py-6 bg-secondaryBackground">
                {content}
            </div>
            <div className={"fixed top-[25%] left-[40%] z-50"}>
                {isModalOpen && modal}
            </div>
        </>
    )
}