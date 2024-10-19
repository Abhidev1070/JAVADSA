
//// API 1 ////
// let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");
//     fetchRes.then(res =>res.json())
//     .then(d => {console.log(d)})



//// API 2 ////

const fetchData = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); 
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  fetchData();
  