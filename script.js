const btn3 = document.createElement('button')
const inp = document.querySelector('input')
const div1 = document.createElement('div')
btn3.innerText= 'Set'
div1.append(inp,btn3)
div1.classList.add('div')
section.appendChild(div1)
btn3.classList.add('btn3')
btn3.addEventListener('click',(e)=>{
    const liAll = document.querySelectorAll('li')
    const li = document.createElement('li')
    const p = document.createElement('p')
    const btn = document.createElement('button')
    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')
    const div = document.createElement('div')
    if(input.value.trim() !== ''){
        p.innerText = input.value
        btn.innerHTML = '<img src="bi.png" alt="" srcset="">'
        btn1.innerHTML = '<img src="up.png" alt="" srcset="">'
        btn1.classList.add('btn1')
        btn2.innerHTML = '<img src="down.png" alt="" srcset="">'
        div.append(btn1,btn2,btn)
        btn.style.marginLeft = '10px'
        li.appendChild(p)
        li.append(div)
        liAll.forEach(el => {
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