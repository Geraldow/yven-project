function moveToSelected(element) {

    var selected = $(".selected");
    var next = selected.next().length ? selected.next() : $('#carousel div:first');
    var prev = selected.prev().length ? selected.prev() : $('#carousel div:last');

    selected.removeClass().addClass("prev");
    next.removeClass().addClass("selected");
    prev.removeClass().addClass("next");
  }
  function autoChange() {
    // Llama a moveToSelected con 'next' para avanzar automáticamente
    moveToSelected('next');
}


var interval = setInterval(autoChange, 3000);


  $('#carousel div').click(function () {
    clearInterval(interval); // Detiene el intervalo antes de mover a la siguiente imagen
    moveToSelected($(this));
});

$('#prev').click(function () {
    clearInterval(interval); // Detiene el intervalo antes de mover a la imagen anterior
    moveToSelected('prev');
});

$('#next').click(function () {
    clearInterval(interval); // Detiene el intervalo antes de mover a la siguiente imagen
    moveToSelected('next');
  });
  