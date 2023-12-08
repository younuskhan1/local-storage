const getInputValueById = (id) => {
    const inputField = document.getElementById(id);
    const inputText = inputField.value;
    inputField.value = "";
    return inputText;
}

const localStoregeElement = () => {
    const product = getInputValueById("product-name");
    const number = getInputValueById("product-number");
    // localStorage.setItem(productName, productNumber);
    const listItems = getItemsFromLocalStorage();
    listItems.push({ product, number });
    localStorage.setItem("listItems", JSON.stringify(listItems));
    console.log(listItems);
}
const getItemsFromLocalStorage = () => {
    return localStorage.getItem("listItems") ? JSON.parse(localStorage.getItem("listItems")) : [];
}