import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from '../api';
import Preloader from "../components/Preloader";

export default function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id])
    console.log(recipe)
    return (
        <>
            {!recipe.idMeal ? <Preloader /> : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h4>Category: {recipe.strCategory}</h4>
                    {recipe.strArea ? <h4>Area: {recipe.strArea}</h4> : null}
                    <p>{recipe.strInstructions}</p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Ingredient</th>
                                <th scope="col">Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map(key => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    )
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                    {recipe.strYoutube ? (
                        <div className="video">
                            <h3 className="m-4">Video Recipe</h3>
                            <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.split('=')[1]}`} allowFullScreen />
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn btn-success m-3" onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}