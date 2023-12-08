const getInputValueById = (id) => {
    const inputField = document.getElementById(id);
    const inputText = inputField.value;
    inputField.value = "";
    return inputText;
}

const localStoregeElement = () => {
    const productName = getInputValueById("product-name");
    const productNumber = getInputValueById("product-number");
    console.log(productName, productNumber);
}