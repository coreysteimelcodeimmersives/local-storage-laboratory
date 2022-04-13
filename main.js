//DOM ELEMENTS
let textInput = document.querySelector('#text-input');
let enterButton = document.querySelector('#enter-button');
let displayInputText = document.querySelector('#display-input-text');

//LOCAL STORAGE GETTR
let inputTextValue = localStorage.getItem('text');

//SET UP FUNCTION
let setupInputText = () => {
    inputTextValue = localStorage.getItem('text');
    if (inputTextValue === null){
        inputTextValue = '';
    } else {
        displayInputText.innerText = inputTextValue;
    }
};

setupInputText();

//CLICK LISTENER
enterButton.addEventListener('click', function(){
    setupInputText();
    localStorage.setItem('text', textInput.value);
    inputTextValue = localStorage.getItem('text');
    displayInputText.innerText = inputTextValue;
    textInput.value = '';
})

//DOM ELEMENTS
let displayPageLoadCount = document.querySelector("#page-load-count");

//LOCAL STORAGE GETTER
let pageLoadValue = localStorage.getItem('pageCount');

//SET UP FUNCTION
let setUpPageCount = () => {
    pageLoadValue = localStorage.getItem('pageCount');
    if (pageLoadValue === null){
        localStorage.setItem('pageCount', '1')
        displayPageLoadCount.innerText = 1;
    } else {
        pageLoadValue = Number(pageLoadValue) + 1;
        localStorage.setItem('pageCount', pageLoadValue.toString());
        displayPageLoadCount.innerText = pageLoadValue;
    }
}

setUpPageCount();

//DOM ELEMENTS
let listInput = document.querySelector('#list-input');
let addItemButton = document.querySelector('#list-button');
let orderedList = document.querySelector('#ordered-list');

//LOCAL STORAGE GETTR
let listItems = localStorage.getItem('list');

//SET UP FUNCTION
let setupList = () => {
    listItems = localStorage.getItem('list');
    if (listItems === null){
        listItems = [];
    } else {
        listItems = JSON.parse(listItems);
        console.log('localStorage length minus orderd list count');
        console.log(listItems.length - orderedList.childElementCount);
        let index = listItems.length - (listItems.length - orderedList.childElementCount);
        for (let i = index; i < listItems.length; i++){
            let newListItem = document.createElement('li');
            newListItem.innerText = listItems[i].item;
            orderedList.appendChild(newListItem);
        }
    }
}

setupList();

//CLICK LISTENER
addItemButton.addEventListener('click', function(){
    setupList();
    let newListItem = {
        item: listInput.value,
    }
    listItems.push(newListItem)
    localStorage.setItem('list', JSON.stringify(listItems));
    let listItem = document.createElement('li');
    listItem.innerText = listInput.value;
    orderedList.appendChild(listItem);
    listInput.value = '';
})

