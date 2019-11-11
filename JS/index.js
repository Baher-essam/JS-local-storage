

var productNameInp= document.getElementById("prodcutName");
var productPriceInp= document.getElementById("prodcutPrice");
var productCompanyInp= document.getElementById("prodcutCompany");
var productDescInp= document.getElementById("prodcutDesc");
var btn = document.getElementById("btn");
var searchInp = document.getElementById("searchInp");
var searchRow = document.getElementById("searchRow");
var updateBtn = document.getElementById("update");
var productsContainer;
var currentIndex;


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

//Products Container
function searchProducts(term)
{
    var searchCols ="";
    for(var i=0 ; i< productsContainer.length ;i++)
    {  
        if(productsContainer[i].name.includes(term))
        {
            searchCols+=`<div class="col-md-3">
            <div class="prodcut">
                <h3>`+productsContainer[i].name+`</h3>
                <p>`+productsContainer[i].desc+`</p>
                <p class="text-danger">`+productsContainer[i].company+`</p>
                <p class="text-info">`+productsContainer[i].price+`</p>
            </div>
        </div>`;
        }
    } 
    searchRow.innerHTML= searchCols;
}

//add new product with the add btn product, display, and clear inputs after add
btn.onclick = function()
{   
    if(btn.innerHTML == "Add Product")
    {
        addProduct();
        displayData();
        clearForm();
    }
    else
    {
        updateProduct();
        displayData();
    }
}
//adding product to local storge 
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
    localStorage.setItem("productsContainer",JSON.stringify(productsContainer));
}

//adding products after click add btn
function displayData() 
{
    var temp = "";
    for (var i = 0 ; i < productsContainer.length ; i++)
    {
        temp+=` <div class="col-md-3">
        <div class="prodcut my-3">
            <h3>`+productsContainer[i].name+`</h3>
            <p>`+productsContainer[i].desc+`</p>
            <p class="text-danger">`+productsContainer[i].company+`</p>
            <p class="text-info">`+productsContainer[i].price+`</p>
            <button class="btn btn-danger mr-2" onclick="deleteProdcut(`+i+`)">Delete</button>
            <button class="btn btn-info" onclick="setForm(`+i+`)">Update</button>
        </div>
    </div>`;
    }
    document.getElementById("cols").innerHTML=temp;
}

//set product into inputs to update it
function setForm(i)
{
    productNameInp.value =  productsContainer[i].name;
    productPriceInp.value =  productsContainer[i].price;
    productCompanyInp.value =  productsContainer[i].company;
    productDescInp.value =  productsContainer[i].desc;
    btn.innerHTML = "Update Product";
    currentIndex = i;
}

function updateProduct()
{
    productsContainer[currentIndex].name = productNameInp.value;
    productsContainer[currentIndex].price = productPriceInp.value;
    productsContainer[currentIndex].company = productCompanyInp.value;
    productsContainer[currentIndex].desc = productDescInp.value;
    btn.innerHTML = "Add Product";
    localStorage.setItem("productsContainer",JSON.stringify(productsContainer));
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
//##
