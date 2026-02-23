const express = require('express');
const app = express();
const morgan = require('morgan');//Muestra las solicitudes HTTP en la consola
const cors = require('cors');//Permite conexiones externas


//configuracion del servidor puerto 3000

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);//Configura el formato de salida JSON con una sangría de 2 espacios


app.use(morgan('dev'));//Usa morgan para mostrar las solicitudes HTTP en la consola

app.listen(app.get('port'), () => {
    console.log("SERVIDOR EN EL PUERTO 3000");
});

app.use(express.json());//Permite que el servidor entienda las solicitudes con formato JSON
app.use(cors());//Permite conexiones externas

app.get('/', (req, res) => {
    res.json({
        "Title": "Hola Mundo"
    });
});

//comentario ejemplo
app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;//se declaran los datos de entrada 
 
    
    //validar que se hayan enviado los dos numeros que no esten vacios
    if(num1 === undefined || num2 === undefined){
        return res.status(400).json({'error': 'Faltan numeros para sumar'})
    }

    //Sumar los numeros
    const resultado = num1 + num2;

    
    //Enviar el resultado al front
    res.send({ resultado });//se envia el resultado al front
});
app.post('/area-triangulo', (req, res) => {
    const { base, altura } = req.body;
    //validar que se hayan enviado los dos numeros
    if(base === undefined || altura === undefined){
        return res.status(400).json({'error': 'Faltan datos para calcular el area del triangulo'})
    }
    //Calcular el area del triangulo
    const resultado = (base * altura) / 2;
    //Enviar el resultado al front
    res.send({ resultado });
});
app.post('/perimetro-triangulo', (req, res) => {
    const { lado1, lado2, lado3 } = req.body;
    //validar que se hayan enviado los tres lados
    if(lado1 === undefined || lado2 === undefined || lado3 === undefined){
        return res.status(400).json({'error': 'Faltan datos para calcular el perimetro del triangulo'})
    }
    //Calcular el perimetro del triangulo
    const resultado = lado1 + lado2 + lado3;
    //Enviar el resultado al front
    res.send({ resultado });
});
app.post('/perimetro-cuadrado', (req, res) => {
    const { lado } = req.body;
    //validar que se haya enviado el lado
    if(lado === undefined){
        return res.status(400).json({'error': 'Falta el lado para calcular el perimetro del cuadrado'})
    }
    //Calcular el perimetro del cuadrado
    const resultado = 4 * lado;
    //Enviar el resultado al front
    res.send({ resultado });
});
app.post('/perimetro-circulo', (req, res) => {
    const { radio } = req.body;
    //validar que se haya enviado el radio
    if(radio === undefined){
        return res.status(400).json({'error': 'Falta el radio para calcular el perimetro del circulo'})
    }
    //Calcular el perimetro del circulo
    const resultado = 2 * Math.PI * radio;
    //Enviar el resultado al front
    res.send({ resultado });
});
app.post('/area-circulo', (req, res) => {
    const { radio } = req.body;
    //validar que se haya enviado el radio
    if(radio === undefined){
        return res.status(400).json({'error': 'Falta el radio para calcular el area del circulo'})
    }
    //Calcular el area del circulo
    const resultado = Math.PI * radio * radio;
    //Enviar el resultado al front
    res.send({ resultado });
});
app.post('/area-cuadrado', (req, res) => {
    const { lado } = req.body;
    //validar que se haya enviado el lado
    if(lado === undefined){
        return res.status(400).json({'error': 'Falta el lado para calcular el area del cuadrado'})
    }
    //Calcular el area del cuadrado
    const resultado = lado * lado;
    //Enviar el resultado al front
    res.send({ resultado });
});
app.post('/restar', (req, res) => {
    const { num1, num2 } = req.body;
    //validar que se hayan enviado los dos numeros
    if(num1 === undefined || num2 === undefined){
        return res.status(400).json({'error': 'Faltan numeros para restar'})
    }
    //Restar los numeros
    const resultado = num1 - num2;
    //Enviar el resultado al front
    res.send({ resultado });
});

//Endpoint para multiplicar
app.post('/multiplicar', (req, res) => {
    const { num1, num2 } = req.body;
    //validar que se hayan enviado los dos numeros
    if(num1 === undefined || num2 === undefined){
        return res.status(400).json({'error': 'Faltan numeros para multiplicar'})
    }
    //Multiplicar los numeros
    const resultado = num1 * num2;
    //Enviar el resultado al front
    res.send({ resultado });
});

//Endpoint para dividir
app.post('/dividir', (req, res) => {
    const { num1, num2 } = req.body;
    //validar que se hayan enviado los dos numeros
    if(num1 === undefined || num2 === undefined){
        return res.status(400).json({'error': 'Faltan numeros para dividir'})
    }
    //validar que el divisor no sea cero
    if(num2 === 0){
        return res.status(400).json({'error': 'No se puede dividir entre cero'})
    }
    //Dividir los numeros
    const resultado = num1 / num2;
    //Enviar el resultado al front
    res.send({ resultado });
});