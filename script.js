// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => resp.json())
//     .then(console.log)

// async function fetchUsers() {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await resp.json();
//     console.log(data);
// }

// fetchUsers()

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// Promise.all(urls.map(url => 
//      fetch(url).then(resp=> resp.json())
// )).then(results => {
//     console.log(results[0])
//     console.log(results[1])
//     console.log(results[2])
// }).catch(() => console.log('error'))

const getData = async function() {
    try {
    const [users, post, albums] = await Promise.all(urls.map(url => 
        fetch(url).then(resp=> resp.json())
    ))
    console.log(users)
    console.log(post)
    console.log(albums)
    } catch (err) {
        console.log('Nahhh Sun', err)
    }
}
getData()