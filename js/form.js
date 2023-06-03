
const form = document.querySelector('#form');
const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const email = document.getElementById('email');
const cep = document.getElementById('cep');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('uf');
const rua = document.getElementById('rua');
const mensagem = document.querySelector('#mensagem');
const notNull = document.getElementsByClassName('not-null');

function validaEmail(elem){
    return elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? '' : `Digite um <strong>e-mail</strong> válido`;
}

function isEmpty(elem){
    return elem.value.length < 1 ? `O campo <strong>${elem.name}</strong> não pode ser vazio.` : '';
}

function validaCEP(elem){
    if(!elem.value.match(/^[0-9]{8}/)) 
        return `Digite um CEP válido.`;
    else return '';
}

function updateAdress(data) {
    if( !('erro' in data)) {
        rua.value=(data.logradouro);
        bairro.value=(data.bairro);
        cidade.value=(data.localidade);
        uf.value=(data.uf);
        mensagem.innerHTML = '';
    } else {
        mensagem.innerHTML = `CEP não encontrado`;
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    let msg = [];
    
    let markup = '';
   /*
    Array.from(notNull).forEach(field => {
        let fieldState = isEmpty(field);
        if(fieldState) 
            msg.push(fieldState);
    });
    */

    /* incializa o retorno da mensagem */
   


    const isNome= isEmpty(nome);
    if( isNome ) {
        msg.push(isNome);
        document.getElementById("nome").style.backgroundColor = '#FFEAA5';
        document.getElementById('mensg_nome').innerHTML = 'Precisa preeencher o Nome!';
    } else {
        document.getElementById("nome").style.backgroundColor = '#eceef0';
        document.getElementById('mensg_nome').innerHTML = '';
    }



    const isEmail = validaEmail(email);
    //if(isEmail) { msg_email = isEmail; }
    if(isEmail ) {
        //msg.push(isEmail2);
        document.getElementById("email").style.backgroundColor = '#FFEAA5';
        document.getElementById('mensg_email').innerHTML = 'Digite um e-mail válido!';
    } else {
        
        document.getElementById("email").style.backgroundColor = '#eceef0';
        document.getElementById('mensg_email').innerHTML = '';
        
    }

    const isEmail2= isEmpty(email);
    if(isEmail2) {
        //msg.push(isEmail2);
        document.getElementById("email").style.backgroundColor = '#FFEAA5';
        document.getElementById('mensg_email').innerHTML = 'Precisa preeencher o E-mail!';
    } else {
        //document.getElementById("email").style.backgroundColor = '#eceef0';
        //document.getElementById('mensg_email').innerHTML = '';
    }


    const isCPF= isEmpty(cpf);
    if(isCPF || cpf.value.length !== 14) {
        //msg.push(isCPF);
        document.getElementById("cpf").style.backgroundColor = '#FFEAA5';
        document.getElementById('mensg_cpf').innerHTML = 'Precisa preeencher o CPF!';
    } else {
        document.getElementById("cpf").style.backgroundColor = '#eceef0';
        document.getElementById('mensg_cpf').innerHTML = '';
    }

console.log(cep.value.length);
    const isCEP2= isEmpty(cep);   // && cep.value.length == 8
    if(cep.value.length !== 8 ) {
        //msg.push(isCPF);
        document.getElementById("cep").style.backgroundColor = '#FFEAA5';
        document.getElementById('mensg_cep').innerHTML = 'Precisa preeencher o CEP correto!';
    } else {
        document.getElementById("cep").style.backgroundColor = '#eceef0';
        document.getElementById('mensg_cep').innerHTML = '';
    }

    
    const isCEP = validaCEP(cep);
    if(isCEP.length > 0) {
        //msg.push(isCEP);
    } else {  
        const script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/' + cep.value + '/json?callback=updateAdress';
        document.body.appendChild(script);
    }

    msg.forEach(item => {
        markup += `<p>${item}</p>` 
    });

    //mensagem.innerHTML = markup;

     //if(msg.length == 0)  form.submit();

});