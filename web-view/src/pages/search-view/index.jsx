import PageElement from "../../components/PageElement.jsx";
import SearchViewBody from "./SearchViewBody.jsx";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
export default function SearchView(){
    const [searchParam, setSearchParams] = useSearchParams();
    const content = (<SearchViewBody search={searchParam.get("search")}/>)

    return(
        <PageElement content={content}/>
        // <div>{searchParam.get("search")}</div>
    )
}