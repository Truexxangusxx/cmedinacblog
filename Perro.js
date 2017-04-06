class Perro {
    constructor(nombre) {
        this.nombre = nombre;
    }

    ladra() {
        console.log("guau");
    }

    mover(parte, callback) {

        switch (parte) {
            case "cola":
                var veces = 0;
                var int = setInterval(function () {
                    console.log("moviendo mi cola ...");
                    veces += 1;

                    if (veces > 5) {
                        clearInterval(int);
                        callback(null, "mi perro acabo", veces, "veces");
                    }
                }, 1000);
                break;
            default:
                var error = {
                    message: "Error!!!!!!:no tengo " + parte
                };
        }

        callback(error);
    }
}

module.exports = Perro;