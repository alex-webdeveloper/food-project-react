import { Link } from "react-router-dom";
export default function CategoryItem({
	idCategory: id,
	strCategoryDescription: descr,
	strCategoryThumb: src,
	strCategory: name
})
{
	
	return (
		<>
			<div className="card col-sm-4">
				<img
					src={src}
					className="card-img-top"
					alt={name}
				/>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title text-center">{name}</h5>
					<p className="card-text flex-grow-1">{descr.substr(0, 70)}</p>
                    <Link to={`/category/${name}`} className="btn btn-primary">Watch recipe</Link>
				</div>
			</div>
		</>
	);
}
