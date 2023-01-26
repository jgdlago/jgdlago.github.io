function addItem() {
    var input = document.querySelector("#newItem");
    var newItem = input.value;    
    
    if(newItem === "") {
        alert("Campo de item vazio");
        return;
    }
    
    var lista  = document.getElementById("lista").innerHTML;
    lista = lista +"<li>"+newItem+"</li>";
    document.getElementById("lista").innerHTML = lista;

    input.value ="";
}