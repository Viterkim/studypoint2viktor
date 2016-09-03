var students = [
    {name: "Cirkusmanden", email: "bingo@ja.dk", phone: "8585851", cat: "yellow", gName: "De Farlige"},
    {name: "Damen", email: "cirkus@nej.dk", phone: "8585852", cat: "red", gName: "De Farlige"},
    {name: "Trolden", email: "kasper@bingo.nej", phone: "8585853", cat: "red", gName: "Flotteste"}
];
var tableBody = document.getElementById("studentTable");

var deleteRow = function(id){
    students.splice(id, 1);
    fillTable();
};

var fillTable = function(){
    tableBody.innerHTML = "";
    for (var i = 0; i < students.length; i++){
        var row = tableBody.insertRow(i);
        row.insertCell(0).innerHTML = students[i].name;
        row.insertCell(1).innerHTML = students[i].email;
        row.insertCell(2).innerHTML = students[i].phone;
        row.insertCell(3).innerHTML = students[i].cat;
        row.insertCell(4).innerHTML = students[i].gName;
        //Edit Button
        var edBtn = document.createElement("button");
        edBtn.className = "btn btn-info";
        edBtn.setAttribute("data-toggle", "modal");
        edBtn.setAttribute("data-target", "#modalEdit");
        edBtn.setAttribute("class", "edBtn");
        edBtn.appendChild(document.createTextNode("Edit"));
        row.insertCell(5).appendChild(edBtn);
        //Delete Button
        var delBtn = document.createElement("button");
        delBtn.className = "btn btn-warning";
        delBtn.id = i;
        delBtn.onclick = function(){deleteRow(this.id);};
        delBtn.appendChild(document.createTextNode("Delete"));
        row.insertCell(6).appendChild(delBtn);
    };
}
fillTable();


var studentForm = document.getElementById("studentForm");
studentForm.onsubmit = function(event){
    event.preventDefault();
    var student = {};
    student.name = studentForm.elements["name"].value;
    student.email = studentForm.elements["email"].value;
    student.phone = studentForm.elements["phone"].value;
    student.cat = studentForm.elements["cat"].value;
    student.gName = studentForm.elements["gName"].value;
    students.push(student);
    fillTable();
}

var deleteAll = document.getElementById("deleteAll")
deleteAll.onclick = function(event){
    event.preventDefault();
    students = [];
    fillTable();
}


