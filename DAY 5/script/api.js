
async function fetchtodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/random');
    const data = await response.json();

    console.log(data);
}


fetchtodos();
