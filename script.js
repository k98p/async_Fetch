var test;
var listarr = [];
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(res => {
    let items = "";
    for(let i=0; i<res.length; ++i){
		listarr.push(res[i].id)
		items += `<input type='checkbox' name="${res[i].id}" id="${res[i].id}"><span id="title_${res[i].id}">${res[i].title}</span></input><br>`
    }
	document.getElementsByClassName("items").innerHTML = items;
	test = res //doesn't work. Why?
    return res
  })
  .then(res => {
	for (let i=0; i<res.length; ++i){
		fetch(`https://jsonplaceholder.typicode.com/posts/${res[i].id}`, {
			method: 'PUT',
			body: JSON.stringify({
				title: 'avengers',
				body: 'assemble',
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(response => {
			console.log(response)
			document.getElementById(`${res[i].id}`).checked = true;
        	document.getElementById(`title_${res[i].id}`).setAttribute("style" , "text-decoration: line-through;");
		})
	}
  })
console.log(test)