function hitungButtonOnclickHandler () {
  panjang = parseFloat(document.querySelector('#fPanjang').value)
  lebar = parseFloat(document.querySelector('#fLebar').value)
  luas = panjang * lebar
  modalOutput = document.querySelector('#hasilLuasOuput')
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  modalOutput.innerHTML = luas
}

function main () {
  button = document.querySelector('#hitungButton')
  button.addEventListener("click", hitungButtonOnclickHandler);
}

main()
