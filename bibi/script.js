const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModal');




openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () =>{
     modal.style.display = 'none'
});
   
