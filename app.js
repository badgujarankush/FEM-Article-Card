const button = document.querySelectorAll('.icon');
const btnBg  = document.querySelector('.share');
const popup  =document.querySelector('.popup');
const background = document.body;

    // button.addEventListener('click',event=>{
    //     popup.classList.toggle('active');
    //     button.classList.toggle('toggle');
    // });
    button.forEach(btn => {
        btn.addEventListener('click', () => {
          popup.classList.toggle('active');
          btnBg.classList.toggle('toggle');
        });
      });