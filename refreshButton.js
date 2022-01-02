const btnRefresh = document.createElement('button')
const h4 = document.querySelector('h4')
btnRefresh.innerHTML = '<img src="refresh.png" alt="" srcset="">'
h4.appendChild(btnRefresh)
btnRefresh.addEventListener('click',()=>{
    const AllLi = document.querySelectorAll('li')
    AllLi.forEach(e=>e.remove())
    ul.style.overflowY = 'hidden'
})
