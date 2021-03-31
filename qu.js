console.log('hello');
const win = ['B','B','B','B'];
const result = document.querySelector('.result');
const form = document.querySelector('.quiz-form');
const span = document.querySelector('span');
console.log(result.classList);

form.addEventListener('submit',e =>{
    e.preventDefault();
    const answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    let points = 0;
    answers.forEach((a,index) => {
        if( a === win[index]){
            points+=25;
        }
    });
    scrollTo(0,0);
    result.classList.remove('d-none');

    let op = 0;
    const timer = setInterval(() => {
        span.textContent = `${op}%`;
        if(op === points){
            clearInterval(timer);
        } else {                     
            //console.log(op);
            op++;
        }
        
    },20);
    
    setTimeout(()=> {
    if(points === 100){
        let popup = document.querySelector('.congrats');
        popup.style.display = 'block';

        let close = document.querySelector('.close');

        close.addEventListener('click',()=>{
            popup.style.display = 'none';
        });
    }
    }, 2000);

    console.log(points);
   
})
