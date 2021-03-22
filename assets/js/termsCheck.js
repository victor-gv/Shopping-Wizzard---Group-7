window.showPurchaseInfo = function () {
  // let purchaseDetails = document.querySelector('.purchaseProductDetails')
  let productModel = document.getElementById("productModel");
  let productColor = document.getElementById("productColor");
  let productDeliveryTime = document.getElementById("productDeliveryTime");
  let yourOrderCost = document.getElementById("yourOrderCost");
  let yourOrderShippingCost = document.getElementById("yourOrderShippingCost");
  let yourOrderTotalCost = document.getElementById("yourOrderTotalCost");
  let personShippingStr = parseFloat(personCar.price.slice(0, -1));
  let finalProductImage = document.querySelector(".finalProductImage");

  finalProductImage.src = mainImage.src;
  productModel.innerHTML = personCar.productId.toUpperCase();
  productColor.innerHTML = personCar.color.toUpperCase();
  productDeliveryTime.innerHTML = deliveryExcepted.innerHTML.slice(0, 17);
  yourOrderCost.innerHTML = personShippingStr.toLocaleString() + "€";
  yourOrderShippingCost.innerHTML = personCar.shipping;
  yourOrderTotalCost.innerHTML = totalCost() + "€";
};
