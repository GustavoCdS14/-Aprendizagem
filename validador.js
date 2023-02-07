/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function mascaraTel(i) {
    const tel = i.value;
    /*verifica se não é número*/
    if (isNaN(tel[tel.length - 1])) {
        i.value = tel.substring(0, tel.length - 1);
        return;
    }

    i.setAttribute("maxlength", "16");

    /*inclui mascara do telefone*/
    if (tel.length == 1) {
        i.value = "(" + i.value;
    }
    if (tel.length == 3) {
        i.value = i.value + ") ";
    }
    if (tel.length == 6) {
        i.value = i.value + " ";
    }
    if (tel.length == 11) {
        i.value = i.value + "-";
    }
}

function mascaraCPF(i) {
     const cpf = i.value;
    /*verifica se não é número*/
    if (isNaN(cpf[cpf.length - 1])) {
        i.value = cpf.substring(0, cpf.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");

    if (cpf.length == 3) {
        i.value = i.value + ".";
    }

     if (cpf.length == 7) {
         i.value = i.value + ".";
     }
 
     if (cpf.length == 11) {
          i.value = i.value + "-";
     }


}


function mascaraCNPJ(i) {
     const cnpj = i.value;
    
    if (isNaN(cnpj[cnpj.length - 1])) {
        i.value = cnpj.substring(0, cnpj.length - 1);
        return;
    }

    i.setAttribute("maxlength", "18");

    if (cnpj.length == 2) {
        i.value = i.value + ".";
    }

     if (cnpj.length == 6) {
         i.value = i.value + ".";
     }
 
     if (cnpj.length == 10) {
          i.value = i.value + "/";
     }
 
     if (cnpj.length == 15) {
          i.value = i.value + "-";
}
}

function validar(){
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var tel = formUser.fone.value;
    var endereço = formUser.end.value;
    var cpf = formUser.cpf.value;
    var cnpj = formUser.cnpj.value;
    var senha = formUser.senha.value;
    var confirmsenha = formUser.confirmsenha.value;
   

    if (nome == "" || nome.length <=3) {
        alert("informe o nome completo!");
        formUser.nome.focus();
        return false;
    }
    if (email == "" || email.length <=10) {
        alert("informe o email completo!");
        formUser.email.focus();
        return false;
    }
    if (tel == "" || tel.length <=15) {
        alert("informe o telefone completo!");
        formUser.fone.focus();
        return false;
    }
    if (endereço == "" || endereço.length <=12) {
        alert("informe o endereço completo!");
        formUser.end.focus();
        return false;
    }

    if (cpf == "" && cnpj == "") {
        alert("Selecione um documento");
        return false;
    }
   
    if (cpf != "" && cnpj =="") {
        if(cpf.length !=14){
        alert("CPF incorreto");
        formUser.cpf.focus();
        return false;
    }
}

if (cnpj != "" && cpf =="") {
    if(cnpj.length !=18){
    alert("CNPJ incorreto");
    formUser.cnpj.focus();
    return false;
    }
  }

  if (senha == "" || senha.length < 8) {
    alert("Senha não atende aos requisitos!");
    formUser.senha.focus();
    return false;
}

  if (senha != "" || confirmsenha != "") {
      if (senha != confirmsenha) {
        alert("Senhas não conferem!");
        formUser.senha.focus();
        return false;
      }

  }


} 
