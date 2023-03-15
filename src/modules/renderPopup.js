import getMeals from './getMeals.js';
import renderMeal from './displayMeal.js';

const renderPopup = async () => {
  renderMeal();
  const response = await getMeals();
  const seeCommentsBtns = document.querySelectorAll('.seeCommentsBtn');
  const popupWindow = document.querySelector('.popupWindow');

  const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  seeCommentsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const mealId = e.target.parentNode.getAttribute('id');
      const mealData = response.find((meal) => meal.idMeal === mealId);
      popupWindow.classList.remove('hide');
      popupWindow.classList.add('overlay');
      scrollUp();
      popupWindow.innerHTML = `
        <article class="popupCard" id="${mealData.idMeal}">        
        <img class="popupCardImage" src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
                
          <h2 class="mealTitle">${mealData.strMeal}</h2>
          <div class="commentsContainer">
          <p class="comment"></p>
          </div>       
            <h3 class="commentsHeading">Add a comment</h3>
              <form action="">
                <label for="nameInput">
                  <input
                    name="nameInput"
                    id="nameinput"
                    class="nameInput"
                    type="text"
                    max="30"
                    placeholder="Your Name"
                    required
                  />
                </label>
                <label for="textArea">
                  <textarea
                    name="textArea"
                    id="textArea"
                    class="textArea"
                    cols="30"
                    rows="10"
                    maxlength="200"
                    placeholder="Your Comment"
                    required
                  ></textarea>
                </label>
                <button class="submitCommentBtn" type="button">Comment</button>
              </form>         
        </article>
        <a href="#" class="closeBtn"><i class="fa-sharp fa-solid fa-xmark"></i></a>
      `;

      const closePopupBtn = document.querySelector('.closeBtn');
      closePopupBtn.addEventListener('click', () => {
        popupWindow.classList.add('hide');
        popupWindow.classList.remove('overlay');
      });
    });
  });
};

export default renderPopup;
