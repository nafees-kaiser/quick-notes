export default function SearchTextField({type, name, placeholder, handleChange, value}) {
    return (
        <div>
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