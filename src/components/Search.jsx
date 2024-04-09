import { useState } from "react";

export default function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        cb(value);
    }
    return (
        <>
            <div className="search">
                 <form className="d-flex" role="search" onSubmit={e => handleSubmit(e)}>
                <input className="form-control me-2" id="search-field" type="search" placeholder="Search" aria-label="Search"
                    value={value} onChange={e => setValue(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
           </div>
        </>
    )

}