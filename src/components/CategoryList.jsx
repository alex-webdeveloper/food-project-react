import CategoryItem from "./CategoryItem";

export default function CategoryList({ catalog = []}) {

    return (
        <>
            <div className="catalog-list row">
                {catalog.map(item => <CategoryItem {...item} key={item.idCategory} />)}
            </div>
            
        </>
    )
}