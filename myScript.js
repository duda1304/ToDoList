function addtask() {
		const input = document.getElementById("input_value");

		if (input.value === "") {
			input.placeholder = "Write to add to list";

		} else {
			const li = document.createElement("li");

			const text = document.createTextNode(input.value);
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
						
			input.placeholder = "";
			input.value = "";
			input.focus();
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

	const task = li.children[0];
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





function getLocation() {
	if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(weatherFetch);
	} else {
	x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


function weatherFetch(position){
	const weatherURL = "https://api.weatherbit.io/v2.0/forecast/daily?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&key=fac87f3e409b46d5b8c2f3672b04044e"
	fetch(weatherURL)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
		document.getElementById("weatherForecast").style.display = "block";
		document.getElementById("location").innerHTML = data.city_name;
		const day = new Date().getDay();
		const tableData = document.getElementById("tableData");
		let i;
		let j = day;
		for (i = 0; i < 3; i++) {

			document.getElementById(i).innerHTML = weekDays[j];
			
			const td = document.createElement("td");
			tableData.appendChild(td);
			td.innerHTML = `${data.data[i].app_min_temp}°C-${data.data[i].app_max_temp}°C <br>
													${data.data[i].weather.description}  <img src="icons/icons_${data.data[i].weather.icon}.png" style="width:35px"></img> <br>
													Wind: ${data.data[i].wind_cdir_full}`
			if (j === 6) {
				j = 0;
			} else {
				j = j + 1;
			}
		}
	});
}


// function proba() {
// let mydata = JSON.parse(data);

// let tr = document.createElement("tr");
// document.getElementById("table").appendChild(tr);

// Object.keys(mydata[0]).forEach(element => 

// 		{let th = document.createElement("th");
// 			th.innerHTML = element;
// 			tr.appendChild(th);
// 			}
// 		);

// mydata.forEach(element =>
// 		{
// 			let tr = document.createElement("tr");
// 			document.getElementById("table").appendChild(tr);

// 			Object.values(element).forEach(element => 

// 				{let td = document.createElement("td");
// 				 td.innerHTML = element;
// 				 tr.appendChild(td);
// 				}
// 			);
// 		}
// 	);
// }


