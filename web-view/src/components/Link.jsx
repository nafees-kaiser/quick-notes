import {Link} from 'react-router-dom';
export default function CustomLink({path, text}) {
    return (
        <Link to={path} className="text-hintTextColor hover:underline mb-5">
            {text}
        </Link>
    )
}