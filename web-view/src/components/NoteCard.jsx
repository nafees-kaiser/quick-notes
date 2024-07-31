import {IoMdStopwatch} from "react-icons/io";
import customColors from "../data/color.jsx";

export default function NoteCard({title, content, textColor, backgroundColor, dateCreated, timeCreated}) {
    const {fontLightColor} = customColors;
    return (
        <div
            className={" flex flex-col gap-5 w-[200px] h-[300px] justify-between py-6 px-4 rounded-lg items-start"}
            style={{backgroundColor:backgroundColor}}
        >
            <div className={"flex flex-col gap-1.5 w-full h-full"}>
                <div className={"flex flex-col gap-1.5 items-start justify-start"}>
                    <div className={"text-sm text-left"} style={{color: textColor}}>{dateCreated}</div>
                    <div className={"font-bold text-lg text-left"}>{title}</div>
                </div>
                <div className={"flex flex-col gap-2.5 items-start justify-start w-full h-full"}>
                    <div className={"w-full border-b-2"} style={{borderColor: textColor}}></div>
                    <div className={"text-sm overflow-hidden text-ellipsis w-full h-full text-left"} style={{color: textColor}}>{content}</div>
                </div>
            </div>


            <div className={"flex gap-1.5 justify-start items-center"}>
                <IoMdStopwatch size={30} color={fontLightColor}/>
                <div className={"text-sm text-fontLightColor"}>{timeCreated}</div>
            </div>
        </div>
    )
}