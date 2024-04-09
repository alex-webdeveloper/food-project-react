import Meal from "./Meal";

export default function MealList({ meals }) {
    
    return (
        <>
            <div className="catalog-list row">
                {meals.map(meal => (
                    <Meal key={meal.idMeal} {...meal} />
                ))}
            </div>
        </>
    )
}