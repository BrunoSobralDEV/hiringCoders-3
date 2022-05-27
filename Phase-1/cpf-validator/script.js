const $ = (query) => document.querySelector(query);
const form = $('#formCpf');

function validatesCpf(cpf) {
  
  if (cpf.length != 11) {
    return false;
  } else {
    let numbers = cpf.substring(0, 9);
    let digits = cpf.substring(9);
    
    let sum = 0;
    
    for (let i = 10; i > 1; i--) {
      sum += numbers.charAt(10 - i) * i;
    }
    
    let result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);

    // First Digit Validation
    if (result != digits.charAt(0)) {
      return false;
    }
    
    // reset sum
    sum = 0;
    numbers = cpf.substring(0, 10);

    for (let k = 11; k > 1; k--) {
      sum += numbers.charAt(11 - k) * k;
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    // Second Digit Validation
    if (result != digits.charAt(1)) {
      return false
    }

    return true;
  }
}

function validatorCpf () {
  let cpf = $('#cpf').value;
  
  // Clean history
  $('#success').style.display = 'none';
  $('#error').style.display = 'none';

  // Save validated cpf function return
  let resultValidator = validatesCpf(cpf);

  if (resultValidator) {
    // if true, show message
    $('#success').style.display = 'block';
    $('#success').innerHTML = `\n O CPF <strong>${cpf}</strong> é válido\n`
  } else {
    $('#error').style.display = 'block';
    $('#error').innerHTML = `\n O CPF <strong>${cpf}</strong> não é válido\n`

  }
}

form.onsubmit = function (e) {
  e.preventDefault();
  
  validatorCpf();

  form.reset();
}