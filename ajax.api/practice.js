
/**
 * 3. У вам є розмітка в html
 * <div class="holder">
  <h1>Title</h1>
  <ul class="list">
    <li>
      <a href="#">link1</a>
      <ul>
        <li>
          <a href="#">link2</a>
        </li>
        <li>
          <a href="#">link3</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="https://www.youtube.com/">link4</a>
    </li>
    <li>
      <a href="https://validator.w3.org/">link5</a>
    </li>
    <li>
      <a href="#">link6</a>
    </li>
  </ul>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, accusamus.
  </p>
  <h1>Title</h1>
  <p>Lorem ipsum dolor sit amet.</p>
</div>
- зверніться через JS тільки до тих посилань, значення атрибутів href яких починається з https та зробіть їх червоного кольору;
- зверніться через JS до <p>, який іде після <ul> і зробіть розмір його шрифта 24рх.
 * 4. 
 *
 */







// 1. В html існує елемент h1 ат інпут, створіть функцію 
//  яка приймає ім'я користувача з поля для вводу та 
//  виводить його як заголовок. Перепишіть функцію
//  всіма відомими вам способами. 
 
// const input = document.getElementById('name')
// function yourNames() {
    
// }

// input.addEventListener('input',() => {
//     const yourNames = document.getElementById('yourNames')
//     yourNames.textContent = input.value
// }) 




// 2. Створіть форму з полем email та кнопкою за 
// допомогою шаблонного рядка та
//  * додайте її в DOM. Під час сабміту форми вивести 
// повідомлення "Дякую за
//  * підписку", яке буде зникати через 1500мс





// const refs = {
//   form: document.querySelector('.searcEm'),
//     btn: document.querySelector('.btnEm'),
//   email: document.querySelector('.emailForm')
// }


// const messEmail = document.getElementById()


// setTimeout(() => {
//     messEmail
// }, 1500)