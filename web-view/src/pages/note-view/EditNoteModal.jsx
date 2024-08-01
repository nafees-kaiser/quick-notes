import TextField from "../../components/TextField.jsx";
import ContentTextField from "../../components/ContentTextfield.jsx";
import Button from "../../components/Button.jsx";
import OutlineButton from "../../components/OutlineButton.jsx";
import {useState} from "react";
import customColors from "../../data/color.jsx";
import {putData} from "../../api/apiCalling.jsx";

export default function EditNoteModal({setIsModalOpen, prevData, setIsEditModalOpen}) {
    const email = sessionStorage.getItem("email");
    const {
        noteRed,
        noteYellow,
        noteBlue,
        noteGreen,
        noteLightRed,
        noteLightBlue,
        noteLightGreen,
        noteLightYellow
    } = customColors
    const [selectedColor, setSelectedColor] = useState(0);
    const [data, setData] = useState({
        ...prevData
    });
    const handleColor = (color) => {
        setSelectedColor(color);

        switch (color) {
            case 0:
                setData((prev) => ({...prev, backgroundColor: noteYellow, textColor: noteLightYellow}));
                break
            case 1:
                setData((prev) => ({...prev, backgroundColor: noteRed, textColor: noteLightRed}));
                break
            case 2:
                setData((prev) => ({...prev, backgroundColor: noteBlue, textColor: noteLightBlue}));
                break
            case 3:
                setData((prev) => ({...prev, backgroundColor: noteGreen, textColor: noteLightGreen}));
                break
            default:


        }
    }
    const handleSubmit = async () => {
        try{
            console.log("data",data)
            console.log("prev",prevData)
            const response = await putData(`/user/update-note/${data.id}`, data, {"email": email})
            if(response.status === 200) {
                setIsModalOpen(false);
                setIsEditModalOpen(false);
            }
            else{
                alert(response.data);
            }
        }
        catch (e) {
            console.log(e);
        }
        // setModalOpen(false);
    }
    const handleChange = (value, name)=>{
        setData((prev) => ({...prev, [name]: value}));
    }
    return (
        <div className={"bg-white w-[750px] flex flex-col gap-2.5 py-6 px-8 rounded-lg shadow-lg z-50"}>
            <div className={"flex w-full items-start justify-start gap-2.5"}>
                <div className={"w-full flex flex-col justify-center"}>
                    <TextField value={data.title} name={"title"} placeholder={"Title"} type={"text"} handleChange={(e)=>handleChange(e.target.value, e.target.name)}/>
                </div>

                <div>
                    <div className={"flex gap-1.5"}>

                        <div className={`w-8 h-8 rounded-[1000px] bg-noteYellow`}
                             style={selectedColor === 0 ? {border: '2px solid black'} : {}}
                             onClick={() => handleColor(0)}
                        ></div>
                        <div className={"w-8 h-8 rounded-[1000px] bg-noteRed"}
                             style={selectedColor === 1 ? {border: '2px solid black'} : {}}
                             onClick={() => handleColor(1)}
                        ></div>
                        <div className={"w-8 h-8 rounded-[1000px] bg-noteBlue"}
                             style={selectedColor === 2 ? {border: '2px solid black'} : {}}
                             onClick={() => handleColor(2)}
                        ></div>
                        <div className={"w-8 h-8 rounded-[1000px] bg-noteGreen"}
                             style={selectedColor === 3 ? {border: '2px solid black'} : {}}
                             onClick={() => handleColor(3)}
                        ></div>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col gap-8"}>
                <ContentTextField value={data.content} name={"content"} placeholder={"Write something..."} type={"text"} handleChange={(e)=>handleChange(e.target.value, e.target.name)} />
                <div className={"flex gap-1.5 justify-end"}>
                    <Button type="submit" text={"Save"} handleClick={handleSubmit}/>
                    <OutlineButton type="button" text={"Cancel"} handleClick={() => {
                        setIsModalOpen(false)
                    }}/>
                </div>
            </div>


        </div>
    )
}