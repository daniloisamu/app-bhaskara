import React from 'react'
import Chart from './Chart';

const Content = () => {
    const data = [
        {
          name:10,
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
            name:20,
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name:40,
            uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
            name:60,
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
            name:80,
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
            name:100,
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
            name:120,
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    
    const calcular = () => {
        let coeficienteA = parseFloat(document.getElementById("coeficienteA").value);
            console.log("coeficienteA: "+coeficienteA);
            let coeficienteB = parseFloat(document.getElementById("coeficienteB").value);
            console.log("coeficienteB: "+coeficienteB);
            let coeficienteC = parseFloat(document.getElementById("coeficienteC").value);
            console.log("coeficienteC: "+coeficienteC);
            
            // Verficar se 'a' é zero
            if (coeficienteA === 0){
                alert('o coeficiente "a" não pode ser zero em uma expressão de segundo grau');
                return;
            }

            // Calcular o discriminante
            const discriminante = coeficienteB ** 2 - 4 * coeficienteA * coeficienteC;

            // Definindo as variáveis do resultado
            let raiz1, raiz2, conclusao;

            // Verificar o discriminante para determinar as raízes
            if (discriminante > 0){
                raiz1 = (-coeficienteB + Math.sqrt(discriminante)) / (2 * coeficienteA);
                raiz2 = (-coeficienteB - Math.sqrt(discriminante)) / (2 * coeficienteA);
                conclusao = 'A equação possui duas raízes reais diferentes';
            } else if (discriminante === 0){
                raiz1 = raiz2 = -coeficienteB / (2 * coeficienteA);
                conclusao = 'A equação possui uma raíz real repetida';
            } else{
                raiz1 = raiz2 = NaN; 
                conclusao = 'A equação não possui raízes reais'
            }

            // Para mostrar o resultado
            document.getElementById("raiz1").innerHTML = "Raiz 1: "+raiz1;
            document.getElementById("raiz2").innerHTML = "Raiz 2: "+raiz2;
            document.getElementById("conclusao").innerHTML = "Conclusão: "+conclusao

            for(let i = 0; i < 100; i++) {
                data[i] = {Valor : (coeficienteA * (i+1)) + coeficienteB * (i+1) + coeficienteC }
            }
            
    }

    return ( 
    <div className="Mycontent">
        <div class="divEntrada">
            <form>
                <label for = "coeficienteA"> Coeficiente A:</label>
                <input type = "number" id = "coeficienteA" name = "coeficienteA"/><br></br>
                <label for = "coeficienteB"> Coeficiente B:</label>
                <input type = "number" id = "coeficienteB" name = "coeficienteB"/><br></br>
                <label for = "coeficienteC"> Coeficiente C:</label>
                <input type = "number" id = "coeficienteC" name = "coeficienteC"/><br></br>

                <button onClick={calcular}> Calcular Raízes </button>
        

                <p id = "raiz1">Raiz 1: </p>
                <p id = "raiz2">Raiz 2: </p>
                <p id = "conclusao">Conclusão: </p>
            </form>
        </div>

        <div className="divGrafico">
            <Chart data={data}/>
        </div>
    </div>
     );
}
 
export default Content;