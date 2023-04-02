function getStarsHTML (rating) {
  let starsHTML = ''
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starsHTML += '<i class="fa fa-star yellow"></i>'
    } else {
      starsHTML += '<i class="fa fa-star"></i>'
    }
  }
  return starsHTML
}

$(document).ready(function () {
  $.getJSON('../json/products.json', function (products) {
    $.each(products, function (index, product) {
      let productElement = $(`
           <div class="product" id="${product.id}">
             <h2 class="product-title">${product.title}</h2>
             <p class="product-price">$${product.price}</p>
             <p class="product-description">${product.description}</p>
             <p class="product-category">${product.category}</p>
             <img src="${product.image}" alt="Product Image" class="${
        product.title
      }" />
             <div class="product-rating">
               <span class="product-rating-stars">${getStarsHTML(
                 product.rating.rate
               )}</span>
               <span class="product-rating-count">(${
                 product.rating.count
               })</span>
             </div>
           </div>
         `)

      // Apply star styles
      productElement.find('.product-rating-stars i').css({
        'font-size': '20px',
        color: '#ddd'
      })
      productElement.find('.product-rating-stars i.yellow').css({
        color: '#fc0'
      })

      $('#products').append(productElement)
    })
  })
})
