const parent=document.getElementById("main");
const child=document.createElement("div");
function onPress(){
    const title=document.getElementById("title").value;
    const description=document.getElementById("description").value;
    
    console.log(title);
    console.log(description)
    fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        parent.innerHTML=JSON.stringify(data);
        // document.getElementById('json-data').innerText = JSON.stringify(data, null, 2);
        // // Fetch and update the todos list again
        // getTodos();
    });
}
function get(){
    fetch("http://localhost:3000/todos",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((resp)=>{
        return resp.json()
    }).then((data)=>{
        console.log(data);
        for(let i=0;i<data.length;i++){
            var child=document.createElement("div");
            child.innerHTML=data[i];
            parent.appendChild(child);
        }
    })
}