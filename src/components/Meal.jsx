import { Link } from "react-router-dom";

export default function Meal({ strMeal: name, idMeal: id, strMealThumb: src }) {
    
    return (
        <>
            <div className="card col-sm-4">
				<img
					src={src}
					className="card-img-top"
					alt={name}
				/>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title text-center flex-grow-1">{name}</h5>
                    <Link to={`/meal/${id}`} className="btn btn-primary">Watch categoty</Link>
				</div>
			</div>
        </>
    )
}