let foodArrayList = [];

const addFoodForm = document.querySelector('.add-food-form');

const foodList = document.querySelector('.food-list');

addFoodForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const foodNameInput = document.querySelector('.food-name');
  const foodName = foodNameInput.value;
  const expiryDateInput = document.querySelector('input[type="date"]');
  const expiryDate = expiryDateInput.value;

  const foodItem = {
    name: foodName,
    expiry: expiryDate
  }

  foodArrayList.push(foodItem);
  console.log(foodArrayList);
  foodNameInput.value = '';
  expiryDateInput.value = '';
  renderFoodList();
})

function renderFoodList() {
  let foodListHtml = '';
  foodArrayList.forEach((foodItem) => {
    foodListHtml = `<li class="food-list"><span>${foodItem.name}</span>
    <span>Expires: ${foodItem.expiry}</span> <button class="delete-btn">Delete</button></li>`; 

  })
  foodList.innerHTML += foodListHtml;
  deleteFoodItem();
  
}

function deleteFoodItem() {
  document.querySelectorAll('.delete-btn')
    .forEach((button, index) => {
      button.addEventListener('click', () => {
        foodArrayList.splice(index, 1);
        document.querySelector('.food-list').removeChild(button.parentElement);
      })
    })
}

