// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json()) // console.log(response)
    .then((json) => json.items); // console.log(json)
}

// main
loadItems()
  .then((items) => {
    console.log(items);
    // displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log());
