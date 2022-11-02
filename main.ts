input.onButtonPressed(Button.B, function () {
    Arreglo_numeros.pop()
    medir_Arreglo += -1
})
let Arreglo_numeros: number[] = []
Arreglo_numeros = [
5,
7,
8,
2,
1,
3
]
let medir_Arreglo = Arreglo_numeros.length - 1
basic.forever(function () {
    for (let contador = 0; contador <= medir_Arreglo; contador++) {
        basic.showNumber(Arreglo_numeros[contador])
    }
})
