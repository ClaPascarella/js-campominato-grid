let griglia = document.getElementById("grid");

for ( let i = 1; i <= 100; i++) {
    let elemento =creaQuadrato(i);
    griglia.append(elemento);

}

function creaQuadrato(contenuto) {

	let square = document.createElement("div");
	square.classList.add("square");

	

	return square;
}