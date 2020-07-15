function addtask() {
		var x = document.getElementById("input_value").value; 

		if (x === "") {
			document.getElementById("input_value").placeholder = "Write to add to list";

		} else {
			var li = document.createElement("li");

			var text = document.createTextNode(x);
			var task = document.createElement("span");
			task.appendChild(text);
			li.appendChild(task);		
			document.getElementById("tasklist").appendChild(li);

		
			var iconDone = document.createElement("span");
			iconDone.innerHTML = '<i class="far fa-check-circle"></i>';
			li.appendChild(iconDone);
			iconDone.addEventListener("click", taskdone);

			li.classList.add("active");
			
			
			document.getElementById("input_value").placeholder = "";
			document.getElementById("input_value").value = "";

									
			function taskdone() {
				li.style.textDecoration = "line-through";
				li.classList.remove("active");
				li.classList.add("notactive");
				iconDone.style.display = "none";				
				

				var iconDelete = document.createElement("span");				
				iconDelete.innerHTML = '<i class="fas fa-trash"></i>';
				li.appendChild(iconDelete);
				iconDelete.addEventListener("click", remove);

				var iconUndone = document.createElement("span");				
				iconUndone.innerHTML = '<i class="far fa-plus-square"></i>';
				li.appendChild(iconUndone);	
				iconUndone.addEventListener("click", backtolist);

				
				function remove() {
					li.style.display = "none";
					li.classList.remove("notactive");
					}

				
				function backtolist() {
					li.style.textDecoration = "none";
					iconDone.style.display = "inline";
					iconDelete.style.display = "none";
					iconUndone.style.display = "none";
					li.classList.remove("notactive");
					li.classList.add("active");
					}
				}		
			} 
		}

function showactive() {
	var active = document.getElementsByClassName("active");
	var notactive = document.getElementsByClassName("notactive");
	var i;
	for (var i = 0; i < active.length; i++) {
	active[i].style.display = "flex";
	} for (var i = 0; i < notactive.length; i++) {
	notactive[i].style.display = "none";
	}	
}
function showall() {
	var active = document.getElementsByClassName("active");
	var notactive = document.getElementsByClassName("notactive");
	var i;
	for (var i = 0; i < active.length; i++) {
	active[i].style.display = "flex";
	} for (var i = 0; i < notactive.length; i++) {
	notactive[i].style.display = "flex";
	}	
}
function showdone() {
	var active = document.getElementsByClassName("active");
	var notactive = document.getElementsByClassName("notactive");
	var i;
	for (var i = 0; i < active.length; i++) {
	active[i].style.display = "none";
	} for (var i = 0; i < notactive.length; i++) {
	notactive[i].style.display = "flex";
	}	
}
