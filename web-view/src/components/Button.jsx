export default function Button({text, handleClick, type='button'}){
    return(
        <button type={type} className="text-buttonText bg-buttonBackground rounded-lg px-6 py-2 font-bold hover:bg-buttonHover mb-5"
            onClick={handleClick}>
            {text}
        </button>
    );
}