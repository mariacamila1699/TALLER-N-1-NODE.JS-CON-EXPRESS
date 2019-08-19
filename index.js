const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// configurar las vistas

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// bootstrap

app.use(express.static(path.join(__dirname,'public')));

// routes

// ---- Ejercicio 1 ------ //

app.get('/ejercicioUno', (req,res) => {
    res.render('ejercicio1');
})

app.post('/ejercicioUno', (req,res) => {

    var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10;

    n1 = parseInt(req.body.num1);
    n2 = parseInt(req.body.num2);
    n3 = parseInt(req.body.num3);
    n4 = parseInt(req.body.num4);
    n5 = parseInt(req.body.num5);
    n6 = parseInt(req.body.num6);
    n7 = parseInt(req.body.num7);
    n8 = parseInt(req.body.num8);
    n9 = parseInt(req.body.num9);
    n10 = parseInt(req.body.num10);
    
    var numMayor = Math.max(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
    var numMenor = Math.min(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);

    res.render('ejercicio1',{
        numMayor: numMayor,
        numMenor: numMenor
    });
});

// Ejercicio 2

app.get('/ejercicioDos', (req,res) => {
    res.render('ejercicio2');
});

app.post('/ejercicioDos', (req,res) => {
    var mes = req.body.mes;
    var result;
    switch(mes) {
        case '1':
            result = 'enero';
            break;
        case '2':
            result = 'febrero';
            break;
        case '3':
            result = 'marzo';
            break;
        case '4':
            result = 'abril';
            break;
        case '5':
            result = 'mayo';
            break;
        case '6':
            result = 'junio';
            break;
        case '7':
            result = 'julio';
            break;
        case '8':
            result = 'agosto';
            break;
        case '9':
            result = 'septiembre';
            break;
        case '10':
            result = 'octubre';
            break;
        case '11':
            result = 'noviembre';
            break;
        case '12':
            result = 'diciembre';
            break;
        default:
            result = 'fuera del rango';
            break;
    }

    res.render('ejercicio2',{
        result:result
    })

});

// Ejercicio 3

app.get('/ejercicioTres', (req,res) =>{
    res.render('ejercicio3');
});

app.post('/ejercicioTres', (req,res) =>{
    var num1,num2,num3;
    var re_num1,re_num2,re_num3;

    num1 = parseInt(req.body.num1);
    num2 = parseInt(req.body.num2);
    num3 = parseInt(req.body.num3);

    if(num1 > 50){
        re_num1 = 'es mayor a 50';
    }else if(num1 >= 0 && num1 <= 20){
        re_num1 = 'menor de 20';
    }else if(num1 < 0){
        re_num1 = 'es negativo';
    }else{
        re_num1 = 'no cumple con las condiciones';
    }

    if(num2 > 50){
        re_num2 = 'es mayor a 50';
    }else if(num2 >= 0 && num2 <= 20){
        re_num2 = 'menor de 20';
    }else if(num2 < 0){
        re_num2 = 'es negativo';
    }else{
        re_num2 = 'no cumple con las condiciones';
    }

    if(num3 > 50){
        re_num3 = 'es mayor a 50';
    }else if(num3 >= 0 && num3 <= 20){
        re_num3 = 'menor de 20';
    }else if(num3 < 0){
        re_num3 = 'es negativo';
    }else{
        re_num3 = 'no cumple con las condiciones';
    }

    res.render('ejercicio3',{
        re_num1:re_num1,
        re_num2:re_num2,
        re_num3:re_num3
    });
});

// Ejercicio 4

app.get('/ejercicioCuatro', (req,res) =>{
    res.render('ejercicio4');
});

app.post('/ejercicioCuatro', (req,res) =>{
    var numero = req.body.numero;
    var r_numero;
    if(numero % 2 == 0){
        r_numero = 'Es par';
    }else{
        r_numero = 'Es impar';
    }

    res.render('ejercicio4',{
        r_numero:r_numero
    });
});

// Ejercicio 5

app.get('/ejercicioCinco', (req,res) =>{
    res.render('ejercicio5');
});

app.post('/ejercicioCinco', (req,res) =>{

    var pares = [];
    var impares = [];
    var n1,n2,n3,n4,n5,n6,n7,n8,n9,n10;

    n1 = parseInt(req.body.num1);
    n2 = parseInt(req.body.num2);
    n3 = parseInt(req.body.num3);
    n4 = parseInt(req.body.num4);
    n5 = parseInt(req.body.num5);
    n6 = parseInt(req.body.num6);
    n7 = parseInt(req.body.num7);
    n8 = parseInt(req.body.num8);
    n9 = parseInt(req.body.num9);
    n10 = parseInt(req.body.num10);

    var numMayor = Math.max(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
    var numMenor = Math.min(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10);
    var numeros = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];

    for(var i = 0; i <= numeros.length; i++){
        if(numeros[i] % 2 == 0){
            pares.push(numeros[i]);
        }else{
            impares.push(numeros[i]);
        }
    }

    console.log(typeof(n1));

    res.render('ejercicio5',{
        numMayor: numMayor,
        numMenor: numMenor,
        pares: pares,
        impares: impares
    });
});

// Ejercicio 6

app.get('/ejercicioSeis', (req,res) =>{
    res.render('ejercicio6')
});

app.post('/ejercicioSeis', (req,res) =>{

    var nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12,nota12,nota13,nota14,nota15,nota16,nota17,nota18,nota19,nota20,nota21,nota22,nota23,nota24,nota25;
    var sumaNota = 0;
    var o = 0;
    var p = 0;

    nota1 = parseInt(req.body.nota1);
    nota2 = parseInt(req.body.nota2);
    nota3 = parseInt(req.body.nota3);
    nota4 = parseInt(req.body.nota4);
    nota5 = parseInt(req.body.nota5);
    nota6 = parseInt(req.body.nota6);
    nota7 = parseInt(req.body.nota7);
    nota8 = parseInt(req.body.nota8);
    nota9 = parseInt(req.body.nota9);
    nota10 = parseInt(req.body.nota10);
    nota11 = parseInt(req.body.nota11);
    nota12 = parseInt(req.body.nota12);
    nota13 = parseInt(req.body.nota13);
    nota14 = parseInt(req.body.nota14);
    nota15 = parseInt(req.body.nota15);
    nota16 = parseInt(req.body.nota16);
    nota17 = parseInt(req.body.nota17);
    nota18 = parseInt(req.body.nota18);
    nota19 = parseInt(req.body.nota19);
    nota20 = parseInt(req.body.nota20);
    nota21 = parseInt(req.body.nota21);
    nota22 = parseInt(req.body.nota22);
    nota23 = parseInt(req.body.nota23);
    nota24 = parseInt(req.body.nota24);
    nota25 = parseInt(req.body.nota25);

    var notas = [nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12,nota13,nota14,nota15,nota16,nota17,nota18,nota19,nota20,nota21,nota22,nota23,nota24,nota25];

    //for(var i = 0; i <= notas.length-1; i++){
    //    sumaNota = sumaNota + notas[i];
    //}

    //while (o <= notas.length-1){
    //    sumaNota = sumaNota + notas[o];
    //    o++;
    //}

    do{
        sumaNota = sumaNota + notas[p];
        console.log(p + " " + sumaNota);
        p++;
    }while (p < notas.length) 

    var promedio = parseFloat(sumaNota / notas.length);

    res.render('ejercicio6',{
        promedio: promedio
    })

});

// Ejercicio 7

app.get('/ejercicioSiete', (req,res) =>{
    res.render('ejercicio7');
});

app.post('/ejercicioSiete', (req,res) =>{

    var n1,n2,n3,n4,n5,n6,n7,n8
    var numeros = [];
    var suma = 0;

    n1 = parseInt(req.body.num1);
    n2 = parseInt(req.body.num2);
    n3 = parseInt(req.body.num3);
    n4 = parseInt(req.body.num4);
    n5 = parseInt(req.body.num5);
    n6 = parseInt(req.body.num6);
    n7 = parseInt(req.body.num7);
    n8 = parseInt(req.body.num8);

    numeros.push(n1,n2,n3,n4,n5,n6,n7,n8);
    
    for(var i = 0; i <= numeros.length-1; i++){
        suma = suma + numeros[i];
    };

    res.render('ejercicio7',{
        suma:suma
    });

});

// Ejercicio 8

app.get('/ejercicioOcho', (req,res) =>{
    res.render('ejercicio8');
});

app.post('/ejercicioOcho', (req,res) =>{

    var numeros = [];
    var sumaPares = 0;
    var sumaImpares = 0;
    var cantPares = 0;
    var cantImpares = 0;

    var tamanoArray = parseInt(req.body.array);

    if(tamanoArray >= 0 && tamanoArray <= 20){
        for(var i = 1; i <= tamanoArray; i++){
            var numero = Math.floor(Math.random() * (1+100));
            numeros.push(numero);
        }
        for(var o = 0; o <= numeros.length-1; o++){
            if(numeros[o] % 2 == 0){
                sumaPares = sumaPares + numeros[o];
                cantPares++
            }else{
                sumaImpares = sumaImpares + numeros[o];
                cantImpares++
            }
        }
    }else{
        alert('El rango no es valido');
    }

    res.render('ejercicio8',{
        numeros:numeros,
        sumaPares:sumaPares,
        sumaImpares:sumaImpares,
        cantPares:cantPares,
        cantImpares:cantImpares
    })
    
});





// escuchando el puerto

app.listen(3000, () =>{
    console.log('escuchando puerto 3000');
})
