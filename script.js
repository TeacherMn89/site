function toggleOptions(element) {
  var options = element.nextElementSibling; // Отримати сусідній елемент з опціями кольору
  if (options.style.display === 'none') {
      options.style.display = 'block';
  } else {
      options.style.display = 'none';
  }
}





document.addEventListener('DOMContentLoaded', function() {
      var contactLink = document.querySelector('nav ul li a[href="#footer"]');


      contactLink.addEventListener('click', function(event) {
          event.preventDefault();
          var footer = document.getElementById('footer'); // Отримання елемента футера
          var footerTop = footer.offsetTop; // Отримання верхньої позиції футера


          window.scrollTo({
              top: footerTop,
              behavior: 'smooth'
          });
      });
  });

document.addEventListener("DOMContentLoaded", function() {
  // Удаление оверлея после загрузки страницы
  const overlay = document.querySelector('.transition-overlay');
  if (overlay) {
    overlay.addEventListener('animationend', function() {
      overlay.parentNode.removeChild(overlay);
    });
  }
});



var cartItems = [];
var totalPrice = 0;


function addToCart(name, price) {
   cartItems.push({ name: name, price: price });
   totalPrice += price;
   updateCart();
}


function updateCart() {
   var cartItemsList = document.getElementById("cartItems");
   var totalElement = document.getElementById("totalPrice");


   cartItemsList.innerHTML = "";
   cartItems.forEach(function(item) {
       var li = document.createElement("li");
       li.textContent = item.name + "" + item.price;
   });


   totalElement.textContent = totalPrice;
}

document.addEventListener("DOMContentLoaded", () => {
  const cartItems = [];
  const cartList = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");

  window.addToCart = function(productName, price) {
    cartItems.push({ productName, price });
    updateCart();
  };

  function updateCart() {
    cartList.innerHTML = "";
    let total = 0;
    cartItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.productName} - ₴${item.price}`;
      cartList.appendChild(li);
      total += item.price;
    });
    totalPriceElement.textContent = total;
  }

  window.toggleOptions = function(element) {
    const optionsDiv = element.nextElementSibling;
    optionsDiv.style.display = optionsDiv.style.display === 'block' ? 'none' : 'block';
  };
});


document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartList = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    window.addToCart = function(productName, price) {
        cartItems.push({ productName, price });
        updateCart();
    };

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.productName} - ₴${item.price}`;
            cartList.appendChild(li);
            total += item.price;
        });
        totalPriceElement.textContent = total;
    }

    window.toggleOptions = function(element) {
        const optionsDiv = element.nextElementSibling;
        optionsDiv.style.display = optionsDiv.style.display === 'block' ? 'none' : 'block';
    };
});
