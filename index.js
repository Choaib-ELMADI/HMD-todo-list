const section = document.querySelector('section')
const ul = document.querySelector('ul')
const input = document.querySelector('.input')
const ulArr = [...ul.children]
const ulList = []

input.addEventListener('keypress',(e)=>{
    const li = document.createElement('li')
    const p = document.createElement('p')
    const btn = document.createElement('button')
    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')
    const li1 = document.querySelectorAll('li')
    const to = document.querySelectorAll('li')
    const ulList = []
    const div = document.createElement('div')
    if(e.key === 'Enter' && input.value.trim() !== ''){
        p.innerText = input.value
        btn.innerHTML = '<img src="bi.png" alt="" srcset="">'
        btn1.innerHTML = '<img src="up.png" alt="" srcset="">'
        btn1.classList.add('btn1')
        btn2.innerHTML = '<img src="down.png" alt="" srcset="">'
        div.append(btn1,btn2,btn)
        btn.style.marginLeft = '10px'
        li.appendChild(p)
        li.append(div)
        li1.forEach(el => {
            ulList.push(el.innerText)
        })
        if(!ulList.includes(li.innerText)){
            ul.appendChild(li)
        }
        input.value = ''
    }
    btn.addEventListener('click',(e)=>{
        ul.removeChild(li)
        if(ul.childElementCount < 5){
            ul.style.overflowY = 'hidden'
        }
    })
    btn1.addEventListener('click',(e)=>{
        ul.insertBefore(li,li.previousElementSibling)
    })
    btn2.addEventListener('click',(e)=>{
        ul.insertBefore(li.nextElementSibling,li)
    })
})
input.addEventListener('keypress',()=>{
    if(ul.childElementCount > 3){
        ul.style.overflowY = 'scroll'
    }
})
function permutation(arr,el){
    const arr1 = []
    let i = 0
    while(i<=arr.indexOf(el)){
        if(i===arr.indexOf(el)-1){
            arr1.push(el)
            i++
        }
        else if(i===arr.indexOf(el)){
            arr1.push(arr[arr.indexOf(el) - 1])
            i++
        }
        else{
            arr1.push(arr[i])
            i++
        }
    }
    for(let i = arr.indexOf(el) + 1;i<arr.length;i++){
        arr1.push(arr[i])
    }
    return arr1
}
function index(arr,el){
    const arr1 = [...arr]
    for(let i = 0;i<arr1.length;i++){
        if(arr1[i]===el){
            return i
        }
    }
    return -1
}
function insert(arr,el){
    
}
 