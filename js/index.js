// ITERATION 1/2/3

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subTotalCalculate= Number(price) * Number(quantity);
  const subTotal= product.querySelector('.subtotal span');
  subTotal.innerHTML=subTotalCalculate;
  return subTotalCalculate;
}

function calculateAll() {
  const product = document.querySelector('.product');
  const productParentNode = product.parentNode.children;
  const productLength= productParentNode.length;
  let total= 0; 
  for (let i=0; i< productLength; i++){
    updateSubtotal(productParentNode[i]);
    total += updateSubtotal(productParentNode[i]);
  }
  document.querySelector("#total-value span").innerHTML=total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parentTarget=target.parentNode;
  const parentTarget2=parentTarget.parentNode;
  parentTarget2.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const createProduct=document.querySelector(".create-product");
  const productName=document.querySelector('#product-name').value;
  const quantity=document.querySelector('#quantity-number').value;

  
  const productParent=document.querySelector("#cart tbody");
  const newProductTr=document.createElement("tr");
  newProductTr.classList.add("product");
  newProductTr.classList.add("new-product");
  productParent.appendChild(newProductTr);

  const newProduct=document.querySelector(".new-product");
  const productCopy=document.querySelector(".product");
  const productChilds=productCopy.childNodes;

  let i=0; 
  for(child in productChilds){
    if (productChilds[child].nodeName === "TD"){
      let newStructure = document.createElement("td");
      newStructure.classList.add(productChilds[child].className);
      newProduct.appendChild(newStructure);
    }

  }

  
  const newProductName=document.querySelector(".new-product .name"); 
  const newSubstructureName=document.createElement("span");
  newSubstructureName.textContent = productName;
  newProductName.appendChild(newSubstructureName);


  const newProductPrice=document.querySelector(".new-product .price"); 
  const newSubstructurePrice=document.createElement("span");
  newSubstructurePrice.textContent = "30$"
  newProductPrice.appendChild(newSubstructurePrice);

  // Y así se harían los demás... TODO optimizar el código para no escribir tanto

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);


});
