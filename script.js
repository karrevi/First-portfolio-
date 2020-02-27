const Formulario =`<form action="">
<p>Nombre:</p>
<input type="text" class="field"> <br>

<p>Correo Electronico:</p>
<input type="text" class="field"> <br>

<p>Asunto:</p>
<input type="text" class="field"> <br>

<p>Mensaje:</p>
<textarea class="field"></textarea> <br>

<p class="center-content"><input type="submit" class="btn btn-green" value="Enviar Datos"></p>
</form>
`
const main=document.querySelector('main')
document.querySelector('.contactButton').addEventListener('click',()=>{
    main.innerHTML=Formulario;
})

const about = `<div class="parrafo">
<img src="img/Carlos-Revilla-Olivares_opt.jpg">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam reiciendis tempore voluptas eos, nobis voluptate saepe fugiat voluptates nihil libero repudiandae nulla quasi sapiente aliquid esse inventore ex ullam labore eum. Doloremque, sint tempore. Provident, laboriosam voluptas nihil non eius temporibus dolorem officia a mollitia sunt impedit dignissimos quae libero veniam tempora cupiditate autem culpa porro recusandae dicta nobis esse quidem, adipisci at. Iste, praesentium doloremque totam dolor beatae voluptates suscipit sint. Fugit quam dolores animi voluptatum alias, magnam voluptatibus, illo commodi recusandae consequatur nisi inventore laboriosam deserunt! In labore quasi quis accusantium quod amet sequi consequuntur adipisci assumenda!</p>`

document.querySelector('.aboutButton').addEventListener('click',()=>{
    main.innerHTML=about;
})

const skills = ``

document.querySelector('.skillsButton').addEventListener('click',()=>{
    main.innerHTML=skills;
})

const work = ``

document.querySelector('.workButton').addEventListener('click',()=>{
    main.innerHTML=work;
})
