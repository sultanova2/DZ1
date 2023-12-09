const cards = document.querySelector('.cards')


const json = ()=> {
    const request = new XMLHttpRequest()
    request.open("GET","data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    request.addEventListener('load', ()=>{
        const people = JSON.parse(request.response)
        people.forEach(persons => {
            const person = document.createElement('div')
            person.setAttribute("class","person-card")
            person.innerHTML = `
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png">
                <h4>NAME:${persons.name}</h4>
                <span>AGE:${persons.age}</span>
            `
            cards.append(person)
        })
    })
}
json()

const newRequest = new XMLHttpRequest()
newRequest.open('GET','data.json')
newRequest.setRequestHeader('Content-type','application/json')
newRequest.send()
newRequest.addEventListener('load', ()=>{
    const contend = JSON.parse(newRequest.response)
    console.log(contend)
})
