$("#printing_method").click(function(){
var print_method = $("#printing_method").val();
switch (print_method) {
  case '1':
    $("#material").empty();
    $("#material").append( $('<option value="0">Выберите материал</option>'));
    $("#material").append( $('<option value="1">пленка</option>'));
    $("#material").append( $('<option value="2">баннер литой 510 гр</option>'));
    $("#material").append( $('<option value="3">баннер ламинированный 440 гр</option>'));
    $("#material").append( $('<option value="4">баннерная сетка</option>'));
    $("#material").append( $('<option value="5">бумага</option>'));
    break;
  case '2':
    $("#material").empty();
    $("#material").append( $('<option value="0">Выберите материал</option>'));
    $("#material").append( $('<option value="6">пленка</option>'));
    $("#material").append( $('<option value="7">баннер литой 510 гр</option>'));
    $("#material").append( $('<option value="8">баннер ламинированный 440 гр</option>'));
    $("#material").append( $('<option value="9">бумага</option>'));
    $("#material").append( $('<option value="10">обои</option>'));
    $("#material").append( $('<option value="11">холст</option>'));
    $("#material").append( $('<option value="12">ПЭТ</option>'));
    break;
    case '3':
    $("#material").empty();
    $("#material").append( $('<option value="0">Выберите материал</option>'));
    $("#material").append( $('<option value="13">ПВХ</option>'));
    $("#material").append( $('<option value="14">оцинковка</option>'));
    $("#material").append( $('<option value="15">пенокартон</option>'));
    $("#material").append( $('<option value="16">акрил</option>'));
    $("#material").append( $('<option value="17">полистирол</option>'));
    $("#material").append( $('<option value="18">ПЭТ</option>'));
    break;

}
});

var in_width = parseInt($('#width').val());
var in_height = parseInt($('#height').val());
var in_quantity = parseInt($('#quantity').val());

$('#width').click(function(){
  in_width = parseInt($('#width').val());
});
console.log(in_width);
/*
function calc(){
  if ($("#printing_method").val() == 3) {
    switch ($("#material").val()){
      case '13':
      var prom = 1; 
      prom = (in_width * in_height * in_quantity) * 870;
      $('#itogo').text(String(prom));
      break;
    }
  };
};*/
