function updateTotal() {
  var totalDomestic = 0;
  var totalInternational = 0;

  $('.item-quantity').each(function(index, item) {
    var quantity = parseInt($(item).val());

    if (quantity > 0) {
      var parentComponent = $(item).parent().parent();
      
      var price = parseFloat(parentComponent.find('.item-price').val());
      var ship = parseFloat(parentComponent.find('.item-price-ship').val());
      var shipInter = parseFloat(parentComponent.find('.item-price-ship-inter').val());
      
      totalDomestic += (quantity * price) + ship;
      totalInternational += (quantity * price) + shipInter;
    }
  });

  totalDomestic = parseFloat(Math.round(totalDomestic * 100) / 100).toFixed(2);
  totalInternational = parseFloat(Math.round(totalInternational * 100) / 100).toFixed(2);

  $('.checkout-total-domestic').text(totalDomestic);
  $('.checkout-total-international').text(totalInternational);
}

$(document).ready(function() {

  $(document).on('click', '.open-modal', function() {
    var src = $(this).find('img').attr('src');
    $(document).find('#modal-img').attr('src', src);
  });

  $('.checkout-total-domestic').show();
  $('.checkout-total-international').hide();
  
  $(document).on('click', '.minus', function() {
    var input = $(this).parent().find('input');
    var quantity = parseInt(input.val());

    if (quantity > 0) {
      input.val(quantity - 1);
    }

    updateTotal();
  });

  $(document).on('click', '.plus', function() {
    var input = $(this).parent().find('input');
    var quantity = parseInt(input.val());

    input.val(quantity + 1);
    updateTotal();
  });

  $(document).on('change', 'input[type=radio][name=shipment]', function(){
    if (this.value == 'domes') {
     $('.checkout-total-domestic').show();
     $('.checkout-total-international').hide();
    }
    else if (this.value == 'inter') {
     $('.checkout-total-domestic').hide();
     $('.checkout-total-international').show();
    }
  });
  
})
