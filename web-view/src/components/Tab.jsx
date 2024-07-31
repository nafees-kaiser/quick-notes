export default function Tab({name, onClick, isSelected, content}) {
    return (
        <button className={`${isSelected && 'border-b border-black'}`}
            name={name} onClick={onClick}>{content}
        </button>

    )
}