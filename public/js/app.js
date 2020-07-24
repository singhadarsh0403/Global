// fetch('http://localhost:3000/weather?address=meerut').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const Form = document.querySelector('form')
//const search = document.querySelector('input')
const search =  document.querySelector('#company')
const regNum = document.querySelector('#reNum')
const locationComp = document.querySelector('#location')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'lorem10'
Form.addEventListener('submit',(e)=>{
    //when u subit the form the data runs and flases away the 'e' element is the event listner
    //the event listener 'e' has prevent default the stops the age to refresh when form is submitted
    e.preventDefault()

    //const location = search.value
    const regNumValue = regNum.value
    const locationValue = locationComp.value

    const companyValue = search.value
    messageOne.innerHTML = 'loading...'
    messageTwo.innerHTML = 'yo'

    if(companyValue==null){
        console.log('input a value')
    }else{
        //fetch('/weather?address='+location).then((response)=>{
        fetch('/weather?company='+companyValue+'&regNum='+regNumValue+'&location='+locationValue).then((response)=>{
                response.json().then((data)=>{
                if(data.error){
                    messageOne.textContent = data.error
                    messageTwo.textContent = ''
                }else{
                    //messageOne.textContent = data.location
                    messageOne.innerHTML = data.company
                    messageTwo.innerHTML = data.regNum + ' ' + data.location
                    
                    // messageTwo.textContent = document.forecast
                    //console.log(data.location)
                    console.log(data.company+' '+data.regNum+' '+data.location)

                }
            })
        })
    }


    //console.log('testing')
})