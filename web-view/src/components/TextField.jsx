export default function TextField({type, name, placeholder, handleChange, label, value}) {
    return (
        <div className="mb-5">
            <label className="font-bold text-lg" htmlFor={name}>{label}</label>
            <input
                className="bg-textFieldColor text-sm rounded-lg focus:ring-primary p-3 w-full"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
        </div>
    );
}