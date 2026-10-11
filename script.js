
const name = "Wireless Headphones";
const basePrice = 1000;
const discountPercent = 10;
const taxRate = 18;
const stockStatus = "in_stock";


/**
 * Calculates the price after applying the discount percentage.
 * @param {number} price - Original product price
 * @param {number} discount - Discount percentage
 * @returns {number} Price after discount
 */
function calculateDiscountedPrice(price, discount) {
  const discountAmount = (price * discount) / 100;
  return price - discountAmount;
}

/**
 * Calculates the tax amount based on price and tax rate.
 * @param {number} price - Price to apply tax to
 * @param {number} taxRate - Tax percentage rate
 * @returns {number} Tax amount
 */
function calculateTax(price, taxRate) {
  return (price * taxRate) / 100;
}

/**
 * Calculates the final price: discounted price plus tax amount.
 * Combines calculateDiscountedPrice and calculateTax.
 * @param {number} price - Base price
 * @param {number} discount - Discount percentage
 * @param {number} taxRate - Tax rate percentage
 * @returns {number} Final price after discount and tax
 */
function calculateFinalPrice(price, discount, taxRate) {
  const discountedPrice = calculateDiscountedPrice(price, discount);
  const taxAmount = calculateTax(discountedPrice, taxRate);
  return discountedPrice + taxAmount;
}

/**
 * Determines shipping eligibility based on final price.
 * @param {number} finalPrice - Total final price
 * @returns {string} Shipping status string
 */
function isFreeShipping(finalPrice) {
  if (finalPrice >= 500) {
    return "Free Shipping";
  } else {
    return "Shipping: Rs.49";
  }
}

/**
 * Returns formatted stock message based on stock status.
 * @param {string} status - 'in_stock', 'limited', or 'out_of_stock'
 * @returns {string} Stock status message
 */
function getStockMessage(status) {
  switch (status) {
    case "in_stock":
      return "In Stock";
    case "limited":
      return "Limited Stock";
    case "out_of_stock":
      return "Out of Stock";
    default:
      return "Unknown Stock Status";
  }
}

/**
 * Formats and prints the full price summary to the browser console.
 * @param {string} prodName - Product name
 * @param {number} base - Base price
 * @param {number} discount - Discount percentage
 * @param {number} tax - Tax rate percentage
 * @param {string} stock - Stock status string
 */
function printPriceSummary(prodName, base, discount, tax, stock) {
  const discountedPrice = calculateDiscountedPrice(base, discount);
  const taxAmount = calculateTax(discountedPrice, tax);
  const finalPrice = calculateFinalPrice(base, discount, tax);
  const shippingStatus = isFreeShipping(finalPrice);
  const stockMessage = getStockMessage(stock);


  console.log("Product Name:     " + prodName);
  console.log("Base Price:       Rs." + base);
  console.log("Discounted Price: Rs." + discountedPrice);
  console.log("Tax Amount:       Rs." + taxAmount);
  console.log("Final Price:      Rs." + finalPrice);
  console.log("Shipping:         " + shippingStatus);
  console.log("Stock Status:     " + stockMessage);
  console.log("========================================");
}


// Call functions with product variables
const discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);
const taxAmount = calculateTax(discountedPrice, taxRate);
const finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);
const shippingStatus = isFreeShipping(finalPrice);
const stockMessage = getStockMessage(stockStatus);

// Print full price summary to the browser console
printPriceSummary(name, basePrice, discountPercent, taxRate, stockStatus);
