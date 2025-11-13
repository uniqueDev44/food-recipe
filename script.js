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
  renderFoodList();
})

function renderFoodList() {
  foodArrayList.forEach((foodItem) => {
    const listItem = document.createElement('li');
    listItem.classList.add('food-item');
    listItem.innerHTML = `<span>${foodItem.name}</span>
    <span>Expires: ${foodItem.expiry}</span>`
    foodList.appendChild(listItem);
  })
}

