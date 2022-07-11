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
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
