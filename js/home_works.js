//GMAIL CHECKER
const gmailInput= document.querySelector('#gmail_input')
const gmailButton= document.querySelector('#gmail_button')
const gmailSpan= document.querySelector('#gmail_result')

const regExp = /[A-Z-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

gmailButton.addEventListener('click',()=>{
    if(regExp.test(gmailInput.value)){
        gmailSpan.innerHTML='Thank you'
        gmailSpan.style.color='green'
    }else{
        gmailSpan.innerHTML='Please write right'
        gmailSpan.style.color='red'
    }
})
const childBlock=document.querySelector('.child_block')

let positionX=0
let positionY=0

const moveChildBlock=()=>{
    if(positionX<=448 ){
        positionX++
        childBlock.style.left=`${positionX}px`
        setTimeout(moveChildBlock,10)
    }}
moveChildBlock()




