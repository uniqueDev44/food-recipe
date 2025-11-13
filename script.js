let foodArrayList = [];

const addFoodForm = document.querySelector('.add-food-form');

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
})

