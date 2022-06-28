const btn = document.querySelector('label')
const prices = document.querySelectorAll('.plan > p')

function toggleValues(){
  btn.classList.toggle('active')
  if (btn.classList.contains('active')){
    prices.forEach(item => item.innerHTML = item.innerHTML.replace(',', '9,'))
  } else {
    prices.forEach(item => item.innerHTML = item.innerHTML.replace('9,', ','))
  }
}

btn.addEventListener('click', toggleValues)