const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
toggle.addEventListener('click', () => nav.classList.toggle('active'))


const books = document.querySelectorAll('.book')

window.addEventListener('scroll', checkBoxes)


checkBoxes();

function checkBoxes(){
    const triggerBottom = (window.innerHeight/5) * 4

    // dividing the innerheight by 5 parts , taking 4 part as bottom line
books.forEach(book => {
    const bookTop = book.getBoundingClientRect().top
    //describe a size and position of rectangle relative to screen

    if(bookTop < triggerBottom){
        book.classList.add('show')

    }
    else{
        book.classList.remove('show')
    }
})

}



