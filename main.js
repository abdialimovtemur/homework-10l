import { getDataUsers } from "./data.js"

const box = document.querySelector('.box');
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.inputs');

// Assumptions are made that the getDataUsers function fetches data
const renderGetBydata = async () => {
    const data = await getDataUsers();
    console.log(data);

    if (data && data.length > 0) {
        box.innerHTML = data.map(
            (item) => `
            <div class="flex gap-4 shadow-2xl justify-between py-6 p-3 mx-4 my-3 items-center">
                <div class="flex">
                    <p class="text-xl font-bold mr-6">${item.firstName}</p>
                    <p class="font-bold">${item.lastName}</p>
                </div>

                <div class="flex gap-2">
                    <button class="bg-green-500 px-3 py-1 rounded-md">edit</button>
                    <button class="bg-red-500 px-3 py-1 rounded-md">delete</button>
                </div>
            </div>
            `
        ).join('');
    } else {
        box.innerHTML = '<p>malumotlar yoq</p>'
    }
};
renderGetBydata();

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const obj = {};
    for (let i of inputs) {
        obj[i.name] = i.value;
        i.value = "";
    }

    // Save the new object to the data source (you need to implement this logic)
    // For example, this could be a function to post the new data to the server.

    await renderGetBydata();
});

renderGetBydata();
