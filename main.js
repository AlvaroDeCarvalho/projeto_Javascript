//puxando os elementos
function validaNumero(a,b){
    let numeroa = a;
    let numerob = b;
    let veridico = 0;
    if(numeroa > numerob ){
        veridico = true;
    }else{
        veridico = false ;
    }
    return veridico;
}
const numeroA = document.getElementById("numberA");
const numeroB = document.getElementById("numberB");

const form = document.getElementById("grl-form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const numeroTotA = parseFloat(numeroA.value)
    const numeroTotB = parseFloat(numeroB.value)
    const mensagemError = document.querySelector('.error')
    const mensagemSucesso = document.querySelector('.success-mensage')
    let verificandoNumero = validaNumero(numeroTotA,numeroTotB)
    
    if(!verificandoNumero){
        mensagemError.style.display = 'block'
    }else{
        mensagemError.style.display = 'none'
        mensagemSucesso.style.display = 'block'
    }
})

/* NÃO CONSEGUIR VALIDAR O NUMERO EM TEMPO REAL, QUANDO O A FICAVA MAIOR QUE O B A MENSAGEM
CONTIANUAVA ...    CODIGO A SEGUIR ==>

numeroA.addEventListener('keyup',function(a){
    const mensagemSucesso = document.querySelector('.success-mensage')
    const mensagemError = document.querySelector('.error')
    let numeroAtual = a.target.value
    let novaValidacao = parseFloat(numeroAtual)
    let verificandoNumero = validaNumero(novaValidacao)
    
    if(!verificandoNumero){
        mensagemError.style.display = 'block'
    }else{
        mensagemError.style = 'none'
        mensagemSucesso.style.display= 'block'
    }
})



*/