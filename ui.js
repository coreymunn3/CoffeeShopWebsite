class UI {
  constructor (){
    this.video = document.querySelector('.video-item');
    this.videoToggle = document.querySelector('.toggle-btn');
    this.hamburger = document.querySelector('.navbtn');
    this.drinkForm = document.querySelector('.drink-form');
    this.alert = document.querySelector('.drink-form-alert');
    this.links = document.querySelectorAll('.work-item-icon');
    this.modal = document.querySelector('.work-modal');
    this.modalItem = document.querySelector('.work-modal-item')
    this.close = document.querySelector('.work-modal-close')
  }
  hidePreloader(){
    document.querySelector('.preloader').style.display = 'none';
  }
  playPause(){
    document.querySelector('.toggle-btn').classList.toggle('btnSlide');
    
    if (ui.videoToggle.classList.contains('btnSlide')) {
      ui.video.pause()
    } else {
      ui.video.play()
    }
  }
  hamburgerToggle(){
    document.querySelector('.nav').classList.toggle('show-menu');
  }
  // =======================================
  // ORIGINALLY IN THIS FILE, MOVED TO APP.JS

  // submitDrinkForm(e){
  //   const firstName = document.querySelector('.input-firstname').value;
  //   const lastName = document.querySelector('.input-lastname').value;
  //   const email = document.querySelector('.input-email').value;

  //   let validation = ui.validateDrinkForm(firstName,lastName,email);
  //   if (validation) {
  //     ui.showFeedback('Successfully Added','success')
  //   } 
  //   else {
  //     ui.showFeedback('There was an Error','error')
  //   }
    
  //   e.preventDefault();
  // }
  // ======================================
  validateDrinkForm(first,last,email){
    let validation;
    if (first === '' || last==='' || email===''){
      validation = false;
    } else {
      validation = true;
    }
    return validation
  }
  showFeedback(message, type){
    if (type === 'success'){
      ui.alert.classList.add(type);
      ui.alert.textContent = message;
      ui.removeFeedback(type);
    } 
    else if (type === 'error') {
      ui.alert.classList.add(type);
      ui.alert.textContent = message;
      ui.removeFeedback(type)
    }
  }
  removeFeedback(type){
    setTimeout(()=>{
      ui.alert.classList.remove(type)
      ui.alert.textContent = '';
    },2000)
  }
  addCustomer(cust){
    // find a random image
    const images = [1,2,3,4,5];
    let random = Math.floor(Math.random() * images.length)
    
    // create element
    const div = document.createElement('div');
    div.classList.add('person')
    div.innerHTML = `
      <img src="img/person-${random}.jpeg" alt="" class="person-thumbnail">
      <h4 class="person-name">${cust.firstName} ${cust.lastName}</h4>
    `
    // insert element
    let target = document.querySelector('.drink-card-list')
    target.appendChild(div);
  }
  clearForm(){
    document.querySelector('.input-firstname').value = '';
    document.querySelector('.input-lastname').value = '';
    document.querySelector('.input-email').value = '';
  }
  showModal(e){
    e.preventDefault();

    let a = e.target.parentElement;
    if (a.classList.contains('work-item-icon')) {
      let id = a.dataset.id
      ui.modal.classList.add('work-modal-show')
      ui.modalItem.style.background = `
      url('img/work-${id}.jpeg') no-repeat center center/cover
      `
    }
  }
  closeModal(e){
    let workModal = e.target.parentElement.parentElement.parentElement
    if (e.target.classList.contains('fa-window-close')) {
      workModal.classList.remove('work-modal-show')
    }
  }
}