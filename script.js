let adjective = prompt('enter an adjective:')
let noun = prompt('enter a noun:')
let adverb = prompt ('enter an adverb:')
let verb = prompt ('enter a noun:')

let story = `once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}.`

let madLibOutputDiv = document.getElementById('madLipOutput')
madLibOutputDiv.innerHTML = `<p>${story}y</p>`