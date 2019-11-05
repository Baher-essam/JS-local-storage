

var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescriptionInp = document.getElementById("productDescription");
var addBtn = document.getElementById("addBtn");
var prodcutContainer;

if (localStorage.getItem("prodcutContainer") == null)
    {
        prodcutContainer = []; 
    }
    else
    {
        prodcutContainer = JSON.parse(localStorage.getItem("prodcutContainer"));
        displayData();
    }


addBtn.onclick = function()
{
    addProdcut()
}

function addProdcut()
{
    var prodcut =
    {
        name: productNameInp.value,
        price:productPriceInp.value,
        comapany: productCompanyInp.value,
        description: productDescriptionInp.value
    }
    prodcutContainer.push(prodcut);
    localStorage.setItem("prodcutContainer",JSON.stringify(prodcutContainer));
    displayData();
    clearForm()
}


function displayData()
{
    var cols = "";
    for(var i=0 ; i<prodcutContainer.length;i++)
    {
       cols += '<div class="col-lg-3"><div class="prodcut"><h3>'+prodcutContainer[i].name+'</h3><p>'+prodcutContainer[i].comapany+'</p><p class="text-danger">'+prodcutContainer[i].price+'</p><p>'+prodcutContainer[i].description+'</p><button class="btn btn-danger" onclick="deleteProdcut('+i+')">delete</button></div></div>'
    }
    document.getElementById("rowData").innerHTML=cols;
}


function deleteProdcut(id)
{   
    prodcutContainer.splice(id,1);
    localStorage.setItem("prodcutContainer",JSON.stringify(prodcutContainer));
    displayData()
}


function clearForm()
{
    var inputs = document.getElementsByClassName("form-control");

    for (var i=0 ; i<inputs.length ; i++)
    {
        inputs[i].value ="";
    }
}













