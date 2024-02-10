

const button = document.getElementById('KnopkaHome');
let clickCount = 0;


function home(){


  let home = document.getElementById('iphonedisplay')
 
 if(home.style.backgroundColor == 'black'){
     home.style.backgroundImage = 'url("oboiphone.jpg")'
 }else{
     home.style.backgroundColor = 'black'
 }
 




 
 
 //time
 const time = document.querySelector('div.TimeTable');
 if (time) {
   console.log('No');
   return;
 }
 
 
 
 const div = document.createElement('div');
 div.classList.add('TimeTable');
 
 
 const paragraph = document.createElement('p');
 paragraph.classList.add('TimePhone')
 
 
 
 div.appendChild(paragraph);
 
 
 document.getElementById('iphonedisplay').appendChild(div);
 //time
 





  
 
   var TextHome = document.createElement("p");
   TextHome.classList.add('TextHome')
   
 
   var text = document.createTextNode("Нажмите кнопку <<Домой>>, чтобы разблокировать");
 
   
   TextHome.appendChild(text);
 
   
   document.getElementById('iphonedisplay').appendChild(TextHome);
 
 
 
 
 
 
 const paragraph2 = document.querySelector('p');
 
 
 const date = new Date();
 const formattedTime = date.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
 
 paragraph2.textContent = formattedTime;
 
 setInterval(() => {
   const date = new Date();
   const formattedTime = date.toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
   paragraph2.textContent = formattedTime;
 }, 1000);
 
 
 }






function secondFunction() {

   const password2 = document.querySelector('div.PasswordTable');
 if (password2) {
   console.log('No password');
   return;
 }
     let password = document.createElement('div')
    password.classList.add('PasswordTable')
    document.getElementById('iphonedisplay').appendChild(password);
  
//numberblocks
let PasswordButtons = document.createElement('div')
PasswordButtons.classList.add('PasswordNumber')
document.getElementById('iphonedisplay').appendChild(password);




//numberblocks

    const childBlock = document.createElement('div');
    password.appendChild(childBlock);
    childBlock.classList.add('PasswordText')


   const inputElement = document.createElement('p');
   childBlock.appendChild(inputElement);
   inputElement.classList.add('PasswordTextSon');
   let TextPassword  = document.querySelector('.PasswordTextSon');
   inputElement.textContent = "Введите код-пароль";




    let BlocksInput = document.createElement('input')
    password.appendChild(BlocksInput)
    BlocksInput.classList.add('TextPassInput')




    let Klaviature = document.createElement('div')
    password.appendChild(Klaviature)
    Klaviature.classList.add('NumbersPass')




    const Number1 = document.createElement('div');
    Klaviature.appendChild(Number1);
    Number1.classList.add('Number1');
    const Number1Text = document.createElement('p')
    Number1.appendChild(Number1Text)
    Number1Text.textContent = "1";
    const input = document.querySelector('.TextPassInput');
    const number1 = document.querySelector('.Number1');
    number1.addEventListener('click', () => {
      input.value += '1';
    });
    


    const Number2 = document.createElement('div');
    Klaviature.appendChild(Number2);
    Number2.classList.add('Number2');
    const Number2Text = document.createElement('p')
    Number2.appendChild(Number2Text)
    Number2Text.textContent = "2";
    const input2 = document.querySelector('.TextPassInput');
    const number2 = document.querySelector('.Number2');
    number2.addEventListener('click', () => {
      input2.value += '2';
    });




    const Number3 = document.createElement('div');
    Klaviature.appendChild(Number3);
    Number3.classList.add('Number3');
    const Number3Text = document.createElement('p')
    Number3.appendChild(Number3Text)
    Number3Text.textContent = "3";
    const input3 = document.querySelector('.TextPassInput');
    const number3 = document.querySelector('.Number3');
    number3.addEventListener('click', () => {
      input3.value += '3';
    });



    const Number4 = document.createElement('div');
    Klaviature.appendChild(Number4);
    Number4.classList.add('Number4');
    const Number4Text = document.createElement('p')
    Number4.appendChild(Number4Text)
    Number4Text.textContent = "6";
    const input4 = document.querySelector('.TextPassInput');
    const number4 = document.querySelector('.Number4');
    number4.addEventListener('click', () => {
      input4.value += '6';
    });



    
    const Number5 = document.createElement('div');
    Klaviature.appendChild(Number5);
    Number5.classList.add('Number5');
    const Number5Text = document.createElement('p')
    Number5.appendChild(Number5Text)
    Number5Text.textContent = "5";
    const input5 = document.querySelector('.TextPassInput');
    const number5 = document.querySelector('.Number5');
    number5.addEventListener('click', () => {
      input5.value += '5';
    });

    
    const Number6 = document.createElement('div');
    Klaviature.appendChild(Number6);
    Number6.classList.add('Number6');
    const Number6Text = document.createElement('p')
    Number6.appendChild(Number6Text)
    Number6Text.textContent = "4";
    const input6 = document.querySelector('.TextPassInput');
    const number6 = document.querySelector('.Number6');
    number6.addEventListener('click', () => {
      input6.value += '4';
    });
    
    const Number7 = document.createElement('div');
    Klaviature.appendChild(Number7);
    Number7.classList.add('Number7');
    const Number7Text = document.createElement('p')
    Number7.appendChild(Number7Text)
    Number7Text.textContent = "7";
    const input7 = document.querySelector('.TextPassInput');
    const number7  = document.querySelector('.Number7');
    number7.addEventListener('click', () => {
      input7.value += '7';
    });
    

    const Number8 = document.createElement('div');
    Klaviature.appendChild(Number8);
    Number8.classList.add('Number8');
    const Number8Text = document.createElement('p')
    Number8.appendChild(Number8Text)
    Number8Text.textContent = "8";
    const input8 = document.querySelector('.TextPassInput');
    const number8 = document.querySelector('.Number8');
    number8.addEventListener('click', () => {
      input8.value += '8';
    });


    const Number9 = document.createElement('div');
    Klaviature.appendChild(Number9);
    Number9.classList.add('Number9');
    const Number9Text = document.createElement('p')
    Number9.appendChild(Number9Text)
    Number9Text.textContent = "9";
    const input9 = document.querySelector('.TextPassInput');
    const number9 = document.querySelector('.Number9');
    number9.addEventListener('click', () => {
      input9.value += '9';
    });


    const Number0 = document.createElement('div');
    Klaviature.appendChild(Number0);
    Number0.classList.add('Number0');
    const Number0Text = document.createElement('p')
    Number0.appendChild(Number0Text)
    Number0Text.textContent = "0";
    const input0 = document.querySelector('.TextPassInput');
    const number0 = document.querySelector('.Number0');
    number0.addEventListener('click', () => {
      input0.value += '0';
    });
    const input1 = document.querySelector('.TextPassInput');
    const Klaviature2 = document.querySelector('.Klaviature');
    
    input.addEventListener('input', (event) => {
      if (event.target.value.length >= 4) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-block');
    
        Klaviature2.appendChild(newDiv);
    
        input1.value = '';
      }
    });
    
}





function handleButtonClick() {
    clickCount++;
    if (clickCount === 2) {
      
      secondFunction();
      
       
        clickCount = 0;
    }
}


button.addEventListener('click', handleButtonClick);

function secondFunction2(){
  alert('fsjfs')
}











const sliderTrack = document.getElementById('sliderTrack');
const sliderHandle = document.getElementById('sliderHandle');
const sliderValue = document.getElementById('sliderValue');
let isDragging = false;

sliderHandle.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const sliderRect = sliderTrack.getBoundingClientRect();
    let newX = e.clientX - sliderRect.left;

    if (newX < 0) {
      newX = 0;
    } else if (newX > sliderRect.width) {
      newX = sliderRect.width;
    }

    const percentage = Math.round((newX / sliderRect.width) * 100);
    sliderValue.innerText = percentage;

    sliderHandle.style.left = newX + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});












const customSliderTrack = document.getElementById('customSliderTrack');
const customSliderHandle = document.getElementById('customSliderHandle');
const customSliderValue = document.getElementById('customSliderValue');
let isDragging2 = false;

customSliderHandle.addEventListener('mousedown', () => {
  isDragging2 = true;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging2) {
    const sliderRect = customSliderTrack.getBoundingClientRect();
    let newX = e.clientX - sliderRect.left;

    if (newX < 0) {
      newX = 0;
    } else if (newX > sliderRect.width) {
      newX = sliderRect.width;
    }

    const percentage = Math.round((newX / sliderRect.width) * 100);
    customSliderValue.innerText = percentage;

    customSliderHandle.style.left = newX + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging2 = false;
});
























const customSliderTrack2 = document.getElementById('customSliderTrack2');
const customSliderHandle2 = document.getElementById('customSliderHandle2');
const customSliderValue2 = document.getElementById('customSliderValue2');
let isDragging3 = false;

customSliderHandle2.addEventListener('mousedown', () => {
  isDragging3 = true;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging3) {
    const sliderRect2 = customSliderTrack.getBoundingClientRect();
    let newX = e.clientX - sliderRect2.left;

    if (newX < 0) {
      newX = 0;
    } else if (newX > sliderRect2.width) {
      newX = sliderRect2.width;
    }

    const percentage2 = Math.round((newX / sliderRect2.width) * 100);
    customSliderValue2.innerText = percentage2;

    customSliderHandle2.style.left = newX + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging3 = false;
});


