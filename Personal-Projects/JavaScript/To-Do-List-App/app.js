// !notes
// stringy to turn obj to string
// !when sending data to a web server, the data has to be a string
// !convert a javascript object into a string with JSON.stringify()
// parse turn string to obj

document.addEventListener("DOMContentLoaded", function () {
  //itemsArray = localStorage.getItem("item") item->key
  // if localStorage have value exising, then make it to object and get its item.
  //if not then create an empty array
  const itemsArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  // items array = if there is existing array
  // itemsArray will get the items in localStorage and parse it into object
  // if not a single thing exist then create an empty array.

  // variable for user input (item) and for
  // add button
  const item = document.querySelector("input");
  const addButton = document.querySelector(".add");

  // for add button, if we click it we will createItem (a function) to pass the item (user_input)
  addButton.addEventListener("click", () => {
    createItem(item);
  });

  // function to create item and store it in itemsArray and localStorage
  function createItem(item) {
    itemsArray.push(item.value); //array.push() -> to add something to array (item.value) -> user_input.value

    //save it to localStorage using setItem(key, value)
    //make array a itemsArray a string to save it into items
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload(); // refresh page to see the effect
  }

  function displayItem() {
    let items = ""; //empty string

    //for counter 0 < itemsArray.length (number of items inside the array)
    for (let i = 0; i < itemsArray.length; i++) {
      // This is how you make a template out of items inside the array
      items += `
      <li>
        <span class="content">${itemsArray[i]}</span>
          <div class="btn-container">
            
            <button class="delete">Delete</button>
          </div>
      </li>
      `;
    }
    // this is how you display it into html
    document.querySelector("ul").innerHTML = items;
    deleteButton();
  }

  // function of every delete buttom
  function deleteButton() {
    // var for class name of all delete button
    const deleteBtn = document.querySelectorAll(".delete");

    //forEach(function(currentValue, index, arr), thisValue)
    deleteBtn.forEach((deleteBtn, index) => {
      deleteBtn.addEventListener("click", () => {
        deleteItem(index); //delete item
      });
    });
  }

  // delete item function or process
  function deleteItem(index) {
    itemsArray.splice(index, 1); //splice(index,howmany)
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload(); // to reload the page
  }

  // Diplay item
  displayItem();
});
