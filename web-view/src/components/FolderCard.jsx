import {cloneElement} from "react";
import {RiFolder6Fill} from "react-icons/ri";

export default function FolderCard({folderName, folderColor, folderBg}) {

    return (
        <div className={` flex flex-col justify-center w-[200px] py-4 px-4 rounded-md`}
        style={{backgroundColor: folderBg}}>
            <div><RiFolder6Fill size={48} color={folderColor}/></div>
            <div className="font-bold text-lg">{folderName}</div>
        </div>
    )
}