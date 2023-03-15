import getMeals from './getMeals.js';

const renderMeal = async () => {
  const response = await getMeals();
  const mealsListContainer = document.querySelector('.mealsListContainer');
  mealsListContainer.innerHTML = '';

  const mealItem = response.map(
    (data) => `
    <article class="mealCard" id=${data.idMeal}>
            <img src=${data.strMealThumb} alt=${data.strMeal} />
            <div class="mealDetail">
              <h2 class="mealHeading">${data.strMeal}</h2>
              <a href="#">
                <i class="fa-solid fa-heart"></i>
              </a>
              <span class="likesNumber">0</span>
            </div>
            <button type="button" class="commentBtn seeCommentsBtn">Comments</button>
          </article>
  `
  );
  mealsListContainer.innerHTML = mealItem.join('');
};

export default renderMeal;