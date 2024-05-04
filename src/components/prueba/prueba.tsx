// import { createSignal } from "solid-js";

// const MyComponent = () => {
//     const [data, setData] = createSignal([]);
  
//     const fetchData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const jsonData = await response.json();
//       setData(jsonData);
//     };
  
//     useEffect(() => {
//       fetchData();
//     }, []);
  
//     return (
//       <div>
//         {data.map((post) => (
//           <div key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };
  