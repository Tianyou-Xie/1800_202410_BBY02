var buttonStatus = true;

function edit(){
    if(buttonStatus) {
        buttonStatus = false;
        document.getElementById("Submit").disabled = false;
        document.getElementById("Name").disabled = false;
        document.getElementById("Age").disabled = false;
        document.getElementById("Occupation").disabled = false;
        document.getElementById("Submit").style.cursor = "pointer";
        document.head.innerHTML += `
        <style>
            .form-floating>.form-control:not(:placeholder-shown)~label::after {
                background-color: #e3f2fd;
            }
        </style>`
    }
}