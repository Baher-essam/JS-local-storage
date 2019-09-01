


var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescriptionInp = document.getElementById("productDescription");
var addBtn = document.getElementById("addBtn");
//array of objects JSON y3ni
var prodcutContainer;

//bta5od el array of objects we t7wlo string 3shan el local mesh b set 7aga feha ela string bs fa 3shan kda lazem 272lha    
//JSON.stringify(prodcutContainer)
//  ("key","value")
//localStorage.setItem("prodcutContainer",JSON.stringify(prodcutContainer))


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

// function ely mogooda gowa el btn bs ktbtha bra 3la nadafa
function addProdcut()
{
    var prodcut =
    {
        name: productNameInp.value,
        price:productPriceInp.value,
        comapany: productCompanyInp.value,
        description: productDescriptionInp.value
    }
    // deef el data
    prodcutContainer.push(prodcut);
    localStorage.setItem("prodcutContainer",JSON.stringify(prodcutContainer));
    //show ll data de
    displayData();
    //2ms7 el data ely mktoba fe el form
    clearForm()
}


function displayData()
{
    var cols = "";
    for(var i=0 ; i<prodcutContainer.length;i++)
    {
        /*
        trs += "<tr><td>"+prodcutContainer[i].name+"</td><td>"+prodcutContainer[i].price+"</td><td>"+prodcutContainer[i].comapany+"</td><td>"+prodcutContainer[i].description+"</td></tr>"
    }
     document.getElementById("tableBody").innerHTML=trs;
        */
       cols += '<div class="col-lg-3"><div class="prodcut"><h3>'+prodcutContainer[i].name+'</h3><p>'+prodcutContainer[i].comapany+'</p><p class="text-danger">'+prodcutContainer[i].price+'</p><p>'+prodcutContainer[i].description+'</p><button class="btn btn-danger" onclick="deleteProdcut('+i+')">delete</button></div></div>'
    }
    document.getElementById("rowData").innerHTML=cols;
}


// 2ms7 b3d ma 2deef
function deleteProdcut(id)
{   
    // esm7 el id we 1 bs y3ni 3dd wa7ed lo ktbt 2 hyms7 da we ely gnbo
    prodcutContainer.splice(id,1);
    localStorage.setItem("prodcutContainer",JSON.stringify(prodcutContainer));
    //na he na 3mlt display data tany 3shan yzhr el data el gdeda ely heya b3d el ms7 de 
    displayData()
}


//tshel el akalm ely mwgood fe el inputs
function clearForm()
{
    var inputs = document.getElementsByClassName("form-control");

    for (var i=0 ; i<inputs.length ; i++)
    {
        inputs[i].value ="";
    }

    /* da mesh 2s7 7aga
    productNameInp.value = "";
    productPriceInp.value ="";
    productCompanyInp.value = "";
    productDescriptionInp.value = "";
    */
}













