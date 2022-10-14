// fetch('https://jsonplaceholder.typicode.com/todos')

const listEl = document.querySelector(".list");

const addForm = document.querySelector(".add-form")

const titleValue = document.querySelector("#title");
const userIdValue = document.querySelector("#userid");
const btnSubmit = document.querySelector(".btn");

let ui = '';

const renderItems = (items) => {
    items.forEach(item => {
        ui += `
        <li class="list__item" data-id=${item.id}>
            <h3 class="title">${item.title}</h3>
               <p class="user-id">${item.userId}</p>
               <p class="id">Id:  ${item.id}</p>
            <button class="edit" id="edit-item">Edit</button>
            <button class="delete" id="delete-item">Delete</button>
        </li>
        `
    })
    listEl.innerHTML = ui;
}


let url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
   .then(res => res.json())
   .then(data => renderItems(data))

listEl.addEventListener("click", (evt) => {
    evt.preventDefault();
    let editBtnClicked = evt.target.id == 'edit-item'
    let delBtnClicked = evt.target.id == 'delete-item'

    let id = evt.target.parentElement.dataset.id

    if (delBtnClicked) {
        fetch(`${url}/${id}`, {
            method: 'DELETE'
        }) 
        .then(res => res.json())
        .then(() => location.reload())
    } else if (editBtnClicked) {
        const parent = evt.target.parentElement;
        let titleContent = parent.querySelector('.title').textContent;
        let userIdContent = parent.querySelector('.user-id').textContent;
        titleValue.value = titleContent;
        userIdValue.value = userIdContent;
        
    }

    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        fetch(`${url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: titleValue.value,
                userId: userIdValue.value
            }),
            header: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(() => location.reload())
    })
})

addForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(
            {
                title: titleValue.value,
                userId: userIdValue.value
            }
        ),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        const dataArr = [];
        dataArr.push(data)
        renderItems(dataArr)
    })
    

    titleValue.value = '';
    userIdValue.value = '';
})