var option = {
    animation: true,
    delay : 2000,
}

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})

function see() {
    for (var i = 0; i < toastList.length; i++){
        toastList[i].show();
    }
}