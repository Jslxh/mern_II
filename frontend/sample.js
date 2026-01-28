// const fetchApi1 = async () => {
//     try{
//         const res = await fetch('http://localhost:4000/Task/getTask');
//         const data = await res.json();
//         data.map((n) => {console.log(n)});
//     } catch(error){
//         console.log(error);
//     }
// }
// fetchApi1();

const fetchApi = async () => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        data.map((n) => {console.log(n.address.geo.lng)});
    } catch(error){
        console.log(error);
    }
}
fetchApi();  