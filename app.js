// Initialize UI
const ui = new UI();

loadEventListeners();

function loadEventListeners(){
  
  // window load
  window.addEventListener('load',ui.hidePreloader);
  // hamburger 
  ui.hamburger.addEventListener('click',ui.hamburgerToggle);
  // video play/pause event
  ui.videoToggle.addEventListener('click',ui.playPause);
  // submit drink form
  ui.drinkForm.addEventListener('submit',submitDrinkForm);
  // modal link
  ui.links.forEach((link) => {
    link.addEventListener('click', ui.showModal)
  // modal close
  ui.close.addEventListener('click',ui.closeModal)
  })
}

function submitDrinkForm(e){
  const firstName = document.querySelector('.input-firstname').value;
  const lastName = document.querySelector('.input-lastname').value;
  const email = document.querySelector('.input-email').value;
  
  // validate form fields
  let validation = ui.validateDrinkForm(firstName,lastName,email);

  if (validation) {
    let customer = new Customer(firstName,lastName,email);

    ui.showFeedback('Successfully Added','success')
    ui.addCustomer(customer);
  } 
  else {
    ui.showFeedback('There was an Error','error')
  }
  // reset form
  ui.clearForm();
    
    e.preventDefault();
}