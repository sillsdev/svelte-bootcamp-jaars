import { readable, writable } from "svelte/store";
//initialProjects.find(p => p.id === "es");
// const initialProjects = {
//   es: "Spanish",
//   en: "English",
//   th: "Thai",
// };

// export const projects = readable(initialProjects, () => {
//   return () => {};
// });
export let projects = writable([]);

// async function getData() {
//     let index = 1+Math.floor(Math.random()*100);
//     return await fetch('https://jsonplaceholder.typicode.com/posts/'+index)
//         .then(response => response.json());
// }
