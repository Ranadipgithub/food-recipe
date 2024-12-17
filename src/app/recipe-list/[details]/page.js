import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await apiResponse.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export default async function recipeDetails({ params }) {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  return (
    <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
  );
}
