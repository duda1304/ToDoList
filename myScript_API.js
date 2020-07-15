function call_rest() {
var x = document.getElementById("input_value").value; 

	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
    	
        if (this.readyState == 4 && this.status == 200) {
        	
           
            var li = document.createElement("li");

			var data = JSON.parse(this.responseText);
			
			var text = document.createTextNode(data.data.email);

			var task = document.createElement("span");
			task.appendChild(text);
			li.appendChild(task);		
			document.getElementById("tasklist").appendChild(li);

		
			var iconDone = document.createElement("span");
			iconDone.innerHTML = '<i class="far fa-check-circle"></i>';
			li.appendChild(iconDone);
			iconDone.addEventListener("click", taskdone);
			iconDone.classList.add("iconDone");
			
				
			var iconUndone = document.createElement("span");				
			iconUndone.innerHTML = '<i class="far fa-plus-square"></i>';
			li.appendChild(iconUndone);	
			iconUndone.addEventListener("click", backtolist);
			iconUndone.classList.add("iconUndone");
			iconUndone.style.display = "none";
				

			var iconDelete = document.createElement("span");				
			iconDelete.innerHTML = '<i class="fas fa-trash"></i>';
			li.appendChild(iconDelete);
			iconDelete.addEventListener("click", remove);
			iconDelete.classList.add("iconDelete");
			iconDelete.style.display = "none";
				
			li.classList.add("active");
						
			document.getElementById("input_value").placeholder = "";
			document.getElementById("input_value").value = "";

            
        }
    };
    xmlhttp.open("GET", "https://reqres.in/api/users/"+x, true);
    xmlhttp.send();
}


// function addtask() {
// 		var x = document.getElementById("input_value").value; 

// 		if (x === "") {
// 			document.getElementById("input_value").placeholder = "Write to add to list";

// 		} else {
// 			var li = document.createElement("li");

// 			var text = document.createTextNode(x);
// 			var task = document.createElement("span");
// 			task.appendChild(text);
// 			li.appendChild(task);		
// 			document.getElementById("tasklist").appendChild(li);

		
// 			var iconDone = document.createElement("span");
// 			iconDone.innerHTML = '<i class="far fa-check-circle"></i>';
// 			li.appendChild(iconDone);
// 			iconDone.addEventListener("click", taskdone);
// 			iconDone.classList.add("iconDone");
			
				
// 			var iconUndone = document.createElement("span");				
// 			iconUndone.innerHTML = '<i class="far fa-plus-square"></i>';
// 			li.appendChild(iconUndone);	
// 			iconUndone.addEventListener("click", backtolist);
// 			iconUndone.classList.add("iconUndone");
// 			iconUndone.style.display = "none";
				

// 			var iconDelete = document.createElement("span");				
// 			iconDelete.innerHTML = '<i class="fas fa-trash"></i>';
// 			li.appendChild(iconDelete);
// 			iconDelete.addEventListener("click", remove);
// 			iconDelete.classList.add("iconDelete");
// 			iconDelete.style.display = "none";
				
// 			li.classList.add("active");
						
// 			document.getElementById("input_value").placeholder = "";
// 			document.getElementById("input_value").value = "";
// 			} 
// 		}

function taskdone(){
	var li = this.parentElement;
	li.style.textDecoration = "line-through";
	li.classList.remove("active");
	li.classList.add("notactive");
	this.style.display = "none";

	var icone = li.children;
	var i;
	for (var i = 0; i < icone.length; i++) {
		if (icone[i].classList.value == "iconUndone") {
			icone[i].style.display = "inline";
			
		}
		if (icone[i].classList.value == "iconDelete") {
			icone[i].style.display = "inline";
			
		}
	}  
}

function backtolist(){
	var li = this.parentElement;
	li.style.textDecoration = "none";
	li.classList.remove("notactive");
	li.classList.add("active");

	this.style.display = "none";
	var iconDelete = this.nextSibling;
	iconDelete.style.display = "none";
	var iconDone = this.previousSibling;
	iconDone.style.display = "inline";
	}								

function remove(){
	var li = this.parentElement;
	li.style.display = "none";
	li.classList.remove("notactive");
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


