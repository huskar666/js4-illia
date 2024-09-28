function checkFields(){
    if (document.getElementById('field1').value && document.getElementById('field2').value){
        alert('всі поля заповнені')
    }
    else{
        alert('ви не заповниили всі поля! ганьба!')
    }
}
function checkFields1(){
    if (parseFloat(document.getElementById('field3').value)  + parseFloat(document.getElementById('field4').value) > 10){
        alert('ваша сума більша за 10')
    }
    else{
        alert('ваша сума менша або дорівнює 10-ти')
    }
}
function checkFields2(){
    if(document.getElementById('field5').value == 'JavaScript'){
        alert('ваш текст містить слово JavaScript')
    }
    else{
        alert('ви ввели не слово JavaScript')
    }
}
function checkFields3(){
    if (document.getElementById('field6').value > 10 && document.getElementById('field6').value < 20){
        alert('число входить в діапазон від 10 до 20')
    } 
    else {
        alert('число не входить в діапазон від 10 до 20')
    }
}
function checkFields4() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if (name.length < 3){
        alert("введіть більше ніж 3 символи")
    } else if (!email.includes('@') || email.lastIndexOf('.') < email.indexOf('@')){
        alert("email повинен мати символ @ і крапку після нього")
    } else if (password.length < 6){
        alert("введіть більше ніж 6 символів")
    } else {
        location.href = "https://uk.wikipedia.org/wiki/%D0%9E%D1%80%D0%B0%D0%BD%D0%B3%D1%83%D1%82%D0%B0%D0%BD"
    }
}