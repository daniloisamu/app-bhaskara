<!DOCTYPE html>
<html> <!--Começo do código--> 
<body> <!--Corpo do código (Início)-->
    
    <!--Este código corresponde a uma calculadora de raízes de uma expressão de segundo grau qualquer, inserida no app pelo usuário--> 

    <!--Formulário (Entrada dos valores dos coeficientes da equação)-->

    <form>
        <label for = "coeficienteA"> Coeficiente A:</label>
        <input type = "number" id = "coeficienteA" name = "coeficienteA"><br>
        <label for = "coeficienteB"> Coeficiente B:</label>
        <input type = "number" id = "coeficienteB" name = "coeficienteB"><br>
        <label for = "coeficienteC"> Coeficiente C:</label>
        <input type = "number" id = "coeficienteC" name = "coeficienteC"><br><br>
    </form>
    
    <!--Inserindo Java Script dentro do Html-->

    <script>
        function calculaRaiz(){
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
        }
    </script>
    
    <!--Botão da calculadora-->

    <button onclick="calculaRaiz()"> Calcular Raízes </button>
    
    <!--Parágrafo-->

    <p id = "raiz1">Raiz 1: </p>
    <p id = "raiz2">Raiz 2: </p>
    <p id = "conclusao">Conclusão: </p>


</body> <!--Corpo do código (Fim)-->
</html> <!-- Fim do código-->
