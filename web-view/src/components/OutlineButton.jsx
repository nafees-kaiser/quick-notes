export default function OutlineButton({text, handleClick, type='button'}){
    return(
        <button type={type} className="text-black bg-white border-2 border-primary rounded-lg px-6 py-2 font-bold hover:bg-buttonHover hover:text-white mb-5"
            onClick={handleClick}>
            {text}
        </button>
    );
}