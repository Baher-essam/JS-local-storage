

var productNameInp= document.getElementById("prodcutName");
var productPriceInp= document.getElementById("prodcutPrice");
var productCompanyInp= document.getElementById("prodcutCompany");
var productDescInp= document.getElementById("prodcutDesc");
var btn = document.getElementById("btn");
var searchInp = document.getElementById("searchInp");

var productsContainer;

if (localStorage.getItem("productsContainer") == null)
{
    productsContainer = [];
}
else
{
    productsContainer = JSON.parse(localStorage.getItem("productsContainer"));
    displayData();
}

//search for products
searchInp.onkeyup = function()
{
    searchProducts(searchInp.value);
}

function searchProducts(term)
{
    for(var i=0 ; i< productsContainer.length ;i++)
    {
        if(productsContainer[i].name == term)
        {
            console.log(productsContainer[i]);
        } 
    }
}


btn.onclick = function()
{   
    addProduct();
    displayData();
    clearForm();
}



function addProduct()
{
    var product = 
    {
        name :    productNameInp.value,
        price :   productPriceInp.value,
        company : productCompanyInp.value,
        desc :    productDescInp.value
    }

    productsContainer.push(product);
    localStorage.setItem("productsContainer",JSON.stringify(productsContainer))
   
}

//adding products after click add btn
function displayData() 
{
    var temp = "";
    for (var i = 0 ; i <productsContainer.length ; i++)
    {
        temp+=` <div class="col-md-3">
        <div class="prodcut">
            <h3>`+productsContainer[i].name+`</h3>
            <p>`+productsContainer[i].desc+`</p>
            <p class="text-danger">`+productsContainer[i].company+`</p>
            <p class="text-info">`+productsContainer[i].price+`</p>
            <button id="delete" class="btn btn-danger" onclick="deleteProdcut(`+i+`)">delete</button>
        </div>
    </div>`;
    }
    document.getElementById("cols").innerHTML=temp;
}

//clear inputs after adding prodcuts
function clearForm()
{
   var inputs = document.getElementsByClassName("form-control");   
   for(var i = 0 ; i < inputs.length ; i++)
   {
       inputs[i].value ="";
   }
}

//delete prodcut after adding it
function deleteProdcut(id)
{
    //delete (itemID,item.no)
    productsContainer.splice(id,1);
    localStorage.setItem("productsContainer",JSON.stringify(productsContainer))
    displayData();
}
