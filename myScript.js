
let count = 1;
function addtask() {
	const input = document.getElementById("input_value");

	if (input.value === "") {
		input.placeholder = "Write to add to list";
	} else {
		const taskId = count;
		count = count + 1;
		document.getElementById("noTasks").style.display = "none";

	const allCategories = Array.from(document.getElementById("categories").children);
	const activeCategory = allCategories.find(element => element.classList.contains("active"));
	const category = activeCategory.getAttribute("id");

	const taskItem = `<form class="${category}">
						<div id="div${taskId}" draggable="true" ondragstart="drag(event)" class="custom-control custom-checkbox d-flex justify-content-start align-items-center">
							<input type="checkbox" class="custom-control-input" id="${taskId}" onclick="taskDone(event)">
							<label class="custom-control-label d-flex justify-content-between text-break w-100" for="${taskId}">
								${input.value}
								<i class="fas fa-trash iconDelete" aria-hidden="true" style="display:none" onclick="deleteTask(event)"></i>
							</label>
						</div>
					  </form>`
	

	const currentList = document.getElementById('taskList').innerHTML;
	document.getElementById('taskList').innerHTML = currentList + taskItem;
	input.value = "";
	input.focus();

	}
}

function taskDone(event) {

	if (event.target.checked == true){
		document.getElementById("doneTaskList").appendChild(event.target.parentElement.parentElement);
	event.target.parentElement.parentElement.style.color = "grey";
	event.currentTarget.labels[0].children[0].style.display = "block";
	  } else {
		document.getElementById("taskList").appendChild(event.target.parentElement.parentElement);
		event.target.parentElement.parentElement.style.color = "black";
		const iconDelete = event.currentTarget.labels[0].children[0].style.display = "none";
	  }
}

function deleteTask(event) {
	console.log(event);
	event.target.parentElement.parentElement.parentElement.remove();
}
					
function drag(event) {
	event.dataTransfer.setData("text/plain", event.target.id);
}

function dragTask(event) {
	event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event) {
event.preventDefault();
}


let category;
let tasks;
function drop(event) {
event.preventDefault();
category = event.dataTransfer.getData("text/plain");
tasks = Array.from(document.getElementsByClassName(category));
console.log(category);
console.log(tasks);

if (tasks.length > 0) {
$('#modal').modal('show');

$('#modal .modal-footer button, .modal-header span').on('click', function() {
	let option = this.id;
	if (option === "yes") {
		
		tasks.forEach(element => {
			element.remove();
		});
		document.getElementById("303303").classList.add("active");
		document.getElementById(category).remove();
	} 
	
	if (option === "no") {
		tasks.forEach(element => {
			element.setAttribute("class", "303303");
		});
		document.getElementById("303303").classList.add("active");
		document.getElementById("category").remove();
	} 
  });
} else {
	document.getElementById("category").remove();
	document.getElementById("noTasks").style.display = "none";
}

}

function dropTask(event) {
	event.preventDefault();
	let task = event.dataTransfer.getData("text/plain");
	document.getElementById(task).parentElement.style.display = "none";
	document.getElementById(task).parentElement.setAttribute("class", event.target.id);
}

function displayCategory(event) {
	event.target.classList.add("active");
	$(event.target).siblings().removeClass("active");
	let tasks = Array.from(document.getElementById("taskList").children);
	let doneTasks = Array.from(document.getElementById("doneTaskList").children);
	let category = event.target.id; 
	tasks.forEach(element => {
		if (element.getAttribute("class") === category) {
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	});
	doneTasks.forEach(element => {
		if (element.getAttribute("class") === category) {
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	});
	if (tasks.find(element => element.style.display === "block") === undefined & doneTasks.find(element => element.style.display === "block") === undefined) {
		document.getElementById("noTasks").style.display = "block";
	} else {
		document.getElementById("noTasks").style.display = "none";
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
		if(document.getElementById("weatherForecast").style.display === "block") {
			const day = new Date().getDay();
			const tableData = document.getElementById("tableData");
			tableData.innerHTML = "";
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
		} else {
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
	}
	});
}

function addButton() {
	let newButton = document.createElement("button");
	document.getElementById("categories").insertBefore(newButton, document.getElementById("addButton"));
	newButton.setAttribute("class", "btn btn-primary m-1");
	newButton.setAttribute("contenteditable", "true");
	newButton.setAttribute("draggable", "true");
	newButton.setAttribute("ondragstart", "drag(event)");
	newButton.setAttribute("ondragover", "allowDrop(event)");
	newButton.setAttribute("ondrop", "dropTask(event)");
	newButton.addEventListener("click", displayCategory);
	newButton.setAttribute("id", Math.floor(Math.random() * 10000));
	newButton.innerHTML = "New category";
}

function getHoroscope() {
	$('#modalAstrology').modal('show');

	$('#modalAstrology .modalAstrology-footer button').on('click', function() {
		let option = this.id;
		let sign = $(".modalAstrology-body input:checked").val();
		if (option === "okAstro" && sign !== "") {
			fetch(`https://rapidapi.p.rapidapi.com/?day=today&sign=${sign}`, {
			"method": "POST",
			"headers": {
				"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
				"x-rapidapi-key": "0dbaa732d3msh23eff41f7639dafp17ec9ajsn503ff9ee0a45"
			}
			})
			.then(response => response.json())
			.then(data => {
				document.getElementById("todayHoroscope").innerHTML = `<b>Horoscope for ${sign} for today:</b> ${data.description}`;
				document.getElementById("astrologyForecast").style.display = "block";
			});
		}
	});
}
	
		
	
