
function toggleMenu() {
    // obtener la hamburguesa
    const $navbar = document.querySelector('.navbar-burger')

    // agregar listener para cuando se de click en la hamburguesa
    $navbar.addEventListener('click', () => {
        // obtener el valor del atributo data-target de la hamburguesa
        const target = $navbar.dataset.target
        // obtener el elemento por el id equivalente al target
        const $target = document.getElementById(target)

        // agregar o quitar la clase is-active a la hamburguesa y al menu
        $navbar.classList.toggle('is-active')
        $target.classList.toggle('is-active')
    })
}
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('src'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
