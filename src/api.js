import { API_URL } from './config';

export { API_URL } from './config';

export async function getMealById(mealId) {
    const response = await fetch(`${API_URL}lookup.php?i=${mealId}`);
    return await response.json();
}

export async function getAllCategories() {
    const response = await fetch(`${API_URL}categories.php`);
    return await response.json();
}
export async function getFilterByCategory(catName) {
    const response = await fetch(`${API_URL}filter.php?c=${catName}`);
    return await response.json();
}
