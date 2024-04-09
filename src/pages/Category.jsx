import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilterByCategory } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";
import { useNavigate } from "react-router-dom";

export default function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        getFilterByCategory(name)
        .then(data => setMeals(data.meals))
    }, [name])

    return (
        <>
            <button className="btn btn-success m-3" onClick={() => navigate(-1)}>Go back</button>
            {!meals.length ? <Preloader /> : (
                <MealList meals={meals} />
            )}
        </>
    )
}