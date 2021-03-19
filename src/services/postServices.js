export const getAll = () => {
    return fetch('http://localhost:3001/posts')
        .then(res => res.json())
        .catch(err => console.log(err))
}