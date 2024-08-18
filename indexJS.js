let arr = [
    'Chennai (MAA)',
    'Bangaluru (BLR)',
    'Trichy (TRZ)',
    'Kochin (COK)',
    'Amaravathi (VGA)',
    'Mumbai (BOM)',
    'Delhi (DEL)',
    'Hyderabad (HYD)',
    'Kolkata (CCU)',
    'Ahmedabad (AMD)'
  ]
let arr2 = [
    'Delhi (DEL)',
    'Mumbai (BOM)',
    'Chennai (MAA)',
    'Hyderabad (HYD)',
    'Kolkata (CCU)',
    'Ahmedabad (AMD)',
    'Bangaluru (BLR)',
    'Trichy (TRZ)',
    'Kochin (COK)',
    'Amaravathi (VGA)'
  ]
  let selectedPlace;
let l1 = document.querySelector('#list1');
    for(let i=0;i<arr.length;++i){
        let option = document.createElement('p')
        option.innerHTML = arr[i]
        option.id = arr[i]
        option.value = arr[i]
        l1.appendChild(option)

        option.addEventListener('click', () => {
            // console.log(option.textContent);
            selectedPlace = option.textContent
        });
}
function selPlc(){
    let slp = document.querySelectorAll('#list1 p')
    slp.forEach(p =>{
        p.style.display = "block"
        l1.style.display = "block"

        p.addEventListener('click',() =>
        {
            slp.forEach(p1 =>{
                p1.style.display = "none"
                document.querySelector('#selectPlace').innerHTML = selectedPlace
                localStorage.setItem('From',selectedPlace)
            })
        }
        
        )
    });
}

let toPlace;
let l2 = document.querySelector('#list2');
    for(let i=0;i<arr.length;++i){
        let option = document.createElement('p')
        option.innerHTML = arr2[i]
        option.id = arr2[i]
        option.value = arr2[i]
        l2.appendChild(option)

        option.addEventListener('click', () => {
            // console.log(option.textContent);
            toPlace = option.textContent
        });
}

function toPlc(){
    let slp = document.querySelectorAll('#list2 p')
    slp.forEach(p =>{
        p.style.display = "block"

        p.addEventListener('click',() =>
        {
            slp.forEach(p1 =>{
                p1.style.display = "none"
                document.querySelector('#toPlace').innerHTML = toPlace
                localStorage.setItem('To',toPlace)
            })
        }
        
        )
    });
}



document.addEventListener('DOMContentLoaded', () => {
    let date1 = document.querySelector("#date1");
});

let logBtn = document.querySelector('#loginIcon1');
let logPG = document.getElementById('b122');
let x = document.getElementById('x');
let logB = document.getElementById('logB');

x.addEventListener('click',() =>{
    logPG.style.display = "none"
})

logB.addEventListener('click',() =>{
    logPG.style.display = "none"
})

logBtn.addEventListener('click',() =>{
    logPG.style.display = "block"
})

let oneWay = document.querySelector(".w11")
let box4 = document.querySelector("#box4")
let twoWay = document.querySelector(".w12")

oneWay.addEventListener('change',()=>{
    if(oneWay.checked){
        box4.style.display = "none";
    }
})

twoWay.addEventListener("change",()=>{
    if(twoWay.checked){
        box4.style.display = "block";
    }
})

function saveSelection(event){
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="fclass1"]:checked');
    if (selectedOption) {
        localStorage.setItem('selectedClass', selectedOption.value);
    } else {
        alert('Please select a class.');
    }
    window.location.href = "one.html"
}

let selectingClass = document.querySelector('#selcClass');

function nextSelection(event){
    event.preventDefault();
    selectingClass.style.display = "block"
}