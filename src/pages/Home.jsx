import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from "../api";
import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';

export default function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    console.log(pathname, search)

	function handleSearch(str) {
        setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())));
        navigate({ pathname, search: `?search=${str}` });
	}

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(search.split('=')[1] ? data.categories.filter(item =>
                item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
            ) : data.categories);
            // console.log(data)
        });
    }, [search])
    return (
        <>
            <Search cb={handleSearch} />
            {!catalog ? <Preloader /> : (
                <CategoryList catalog={filteredCatalog} />
           )}
        </>
    )
}