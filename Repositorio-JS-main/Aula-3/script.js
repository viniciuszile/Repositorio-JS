function cpfcheck(){

   var resultado
   var digito
   var teste

   let cpf = document.getElementById("cpf").value
   console.log(cpf)
   digito = cpf.charAt(10)
    
    switch(digito){    

        case "0":
            resultado = "Rio grande do sul"
            teste = "(Caso seu cpf nao seja de nenhum desses estados confira se voce inseriu igual o exemplo)"
            break;

        case "9":
            resultado = "Parana,Sanata catarina"
            "(Caso seu cpf nao seja de nenhum desses estados confira se voce inseriu igual o exemplo)"
            break;

        case "8":
            resultado ="São paulo"
            teste = "(Caso seu cpf nao seja de nenhum desses estados confira se voce inseriu igual o exemplo)"
            break;

        case "7":
            resultado = "Espirito Santo, Rio Den Janeiro"
            teste = "(Caso seu cpf nao seja de nenhum desses estados confira se voce inseriu igual o exemplo)"
            break;

        case "6":
            resultado = "Minas Gerais"
            teste = "(Caso seu cpf nao seja de nenhum desses estados confira se voce inseriu igual o exemplo)"
            break;

        case "5":
            resultado = "Bahia, Sergipe"
            teste = "(Caso seu cpf nao seja de nenhum desses estados confira se voce inseriu igual o exemplo)"
            break;

        case "4":
            resultado = "Alagoas,Paraiba,Pernambuco,Rio Grande Do Norte"
            teste = "(Caso seu cpf nao seja de nenhum desses estados confira se voce inseriu igual o exemplo)"
            break;

        case "3":
            resultado = "Ceara,Maranhão,Piau"
            teste = "(Caso seu cpf nao seja de nenhum desses estados confira se voce inseriu igual o exemplo)"
            break;

        case "2":
            resultado = "Acre,Amazonas,Amapa,Para,Roraima,Rondonia"
            teste = "(Caso seu cpf nao seja de nenhum desses estados confira se voce inseriu igual o exemplo)"
            break;

        case "1":
            resultado = "Destitro Federal,Goias,Mato Grosso Do Sul, Mato Grosso,Tocantins"
            teste = "(Caso seu cpf nao seja de nenhum desses estados confira se voce inseriu igual o exemplo)"
            break;
        case "":
            resultado = "Cpf invalido"

        }
        document.getElementById("resultado").value = resultado
        
        document.getElementById("teste").value = teste
    }