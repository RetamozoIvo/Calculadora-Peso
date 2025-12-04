function calcularIMC() {
    // 1. Inputs y Cálculo
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = peso / (altura * altura);

    // 2. Variables para los elementos
    let lectura = "";
    let pizarra = document.getElementById("resultadoTexto");

    // NUEVO: Buscamos las DOS etiquetas de imagen por sus nuevos IDs
    let foto1 = document.getElementById("imagen1");
    let foto2 = document.getElementById("imagen2");
    let audioMal = document.getElementById("sonidoMal");

    // 3. Lógica SIMPLIFICADA (Solo SI y SINO)
    // Usamos 18.5 como límite. Si es menor, es "flaca". Si no, es lo demás.
    if (imc < 18.5) {
        // --- CASO SI (Flaca) ---
        lectura = "COME ALGO HDP ⚠️ (Bajo peso)";
        pizarra.className = "alerta";

        // Mostramos las 2 imágenes de flaca (repetí el pingüino como ejemplo)
        foto1.src = "ardilla.jpg";
        foto2.src = "esqueleto.jpg"; 
        audioMal.play();

    } else {
        // --- CASO SINO (Cualquier otra cosa) ---
        lectura = " GORDITO/A DEJA DE COMER ⚠️ ";
        pizarra.className = "alerta"; // O podés usar "alerta" si preferís rojo

        // Mostramos las otras 2 imágenes
        foto1.src = "antigordas.jpg";
        foto2.src = "telekinogordo.jpg";
        audioMal.play();
    }

    // 4. Mostrar resultados
    pizarra.innerText = "Tu IMC es " + imc.toFixed(2) + " - " + lectura;

    // NUEVO: Hacemos visibles las DOS imágenes y las ponemos a girar
    foto1.removeAttribute("hidden");
    foto2.removeAttribute("hidden");
    foto1.className = "girando";
    foto2.className = "girando";
}