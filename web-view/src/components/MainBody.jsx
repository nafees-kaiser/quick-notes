import AddFolderModal from "../pages/home/AddFolderModal.jsx";

export default function MainBody({content, isModalOpen = false, modal}) {
    return (
        <>
            <div
                className="flex flex-col justify-start items-start w-full min-h-full h-fit rounded-tl-2xl px-8 py-6 bg-secondaryBackground">
                {content}
            </div>
            <div className={"fixed top-[10%] left-[30%] z-50"}>
                {isModalOpen && modal}
            </div>
        </>
    )
}