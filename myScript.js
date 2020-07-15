function addtask() {
		const x = document.getElementById("input_value").value; 

		if (x === "") {
			document.getElementById("input_value").placeholder = "Write to add to list";

		} else {
			const li = document.createElement("li");

			const text = document.createTextNode(x);
			const task = document.createElement("span");
			task.classList.add("task");
			task.appendChild(text);
			li.appendChild(task);		
			document.getElementById("tasklist").appendChild(li);

		
			const iconDone = document.createElement("i");
			iconDone.classList.add("far", "fa-check-circle", "iconDone");			
			iconDone.addEventListener("click", taskdone);
			li.appendChild(iconDone);
			
				
			const iconUndone = document.createElement("i");				
			iconUndone.classList.add("far", "fa-plus-square", "iconUndone");
			iconUndone.style.display = "none";
			li.appendChild(iconUndone);	
				
				

			const iconDelete = document.createElement("i");				
			iconDelete.classList.add("fas", "fa-trash", "iconDelete");
			iconDelete.style.display = "none";
			li.appendChild(iconDelete);
			
				
			li.classList.add("active");
						
			document.getElementById("input_value").placeholder = "";
			document.getElementById("input_value").value = "";
			} 
		}


function taskdone(e){
	const iconDone = event.currentTarget;
	const li = event.currentTarget.parentElement;
	li.classList.remove("active");
	li.classList.add("notactive");
	iconDone.style.display = "none";
	iconDone.removeEventListener("click", taskdone);

	const icone = li.children;
	let i;
	for (let i = 0; i < icone.length; i++) {
		if (icone[i].classList.contains("task")) {
			icone[i].style.textDecoration = "line-through";
		}
		if (icone[i].classList.contains("iconUndone")) {
			icone[i].style.display = "inline";
			icone[i].addEventListener("click", backtolist);			
		}
		if (icone[i].classList.contains("iconDelete")) {
			icone[i].style.display = "inline";
			icone[i].addEventListener("click", remove);		
		}
	}  
}


function backtolist(e){
	const iconUndone = event.currentTarget;
	const li = event.currentTarget.parentElement;
	
	
	li.classList.remove("notactive");
	li.classList.add("active");
	iconUndone.removeEventListener("click", backtolist);
	iconUndone.style.display = "none";

	const task = document. getElementsByClassName("task")[0];
	task.style.textDecoration = "none";

	const iconDelete = iconUndone.nextSibling;
	iconDelete.style.display = "none";
	iconDelete.removeEventListener("click", remove);

	const iconDone = iconUndone.previousSibling;
	iconDone.style.display = "inline";
	iconDone.addEventListener("click", taskdone);
	}
								

function remove() {
	const li = this.parentElement;
	li.style.display = "none";
	li.classList.remove("notactive");
	}
					

function showactive() {
	const active = document.getElementsByClassName("active");
	const notactive = document.getElementsByClassName("notactive");
	let i;
		for (let i = 0; i < active.length; i++) {
							active[i].style.display = "flex";
		} for (let i = 0; i < notactive.length; i++) {
							notactive[i].style.display = "none";
		}	
	}

function showall() {
	const active = document.getElementsByClassName("active");
	const notactive = document.getElementsByClassName("notactive");
	let i;
		for (let i = 0; i < active.length; i++) {
							active[i].style.display = "flex";
		} for (let i = 0; i < notactive.length; i++) {
							notactive[i].style.display = "flex";
		}	
	}

function showdone() {
	const active = document.getElementsByClassName("active");
	const notactive = document.getElementsByClassName("notactive");
	let i;
		for (let i = 0; i < active.length; i++) {
							active[i].style.display = "none";
		} for (let i = 0; i < notactive.length; i++) {
							notactive[i].style.display = "flex";
		}	
	}

function weather(){
	const xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {

	       	let data = JSON.parse(this.responseText);
		   	document.getElementById("weather").innerHTML = "Current temperature at your location is: " + data.data[0].temp + "°C";
	     }
 	 };
  xhttp.open("GET", "https://api.weatherbit.io/v2.0/current?city=Zagreb&key=fac87f3e409b46d5b8c2f3672b04044e", true);
  xhttp.send()	
	}


function weather_fetch(){
fetch("https://api.weatherbit.io/v2.0/current?city=Zagreb&key=fac87f3e409b46d5b8c2f3672b04044e")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  	document.getElementById("weather-fetch").innerHTML = "Current temperature at your location is: " + data.data[0].temp + "°C";
  });
}


function proba() {
let mydata = JSON.parse(data);

let tr = document.createElement("tr");
document.getElementById("table").appendChild(tr);

Object.keys(mydata[0]).forEach(element => 

		{let th = document.createElement("th");
			th.innerHTML = element;
			tr.appendChild(th);
			}
		);

mydata.forEach(element =>
		{
			let tr = document.createElement("tr");
			document.getElementById("table").appendChild(tr);

			Object.values(element).forEach(element => 

				{let td = document.createElement("td");
				 td.innerHTML = element;
				 tr.appendChild(td);
				}
			);
		}
	);
}


