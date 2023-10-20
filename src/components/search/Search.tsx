import cls from './Search.module.css'
import SearchIcon from '../../assets/search.svg'
import React, {useState} from "react";

const Search = (props: {onChange: (query: string) => void}) => {
    const {onChange} = props
    const [query, setQuery] = useState('')

    function onChangeFunc (event: React.FormEvent<HTMLInputElement>) {
        setQuery(event.currentTarget.value)
        onChange(event.currentTarget.value)
    }

    return (
        <div className={cls.searchbar}>
            <input onChange={onChangeFunc} value={query}/>
            <img src={SearchIcon} alt="searchicon"/>
        </div>
    );
};

export default Search;
