export default function ContentTextField({type, name, placeholder, handleChange, label, value}){
    return (
        <textarea
            className="bg-textFieldColor text-sm rounded-lg focus:ring-primary p-3 w-full h-[350px] border-2 border-hintTextColor"
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
        />
    )
}