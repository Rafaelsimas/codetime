 
function cadastrar(){
    const botao = document.querySelector('.btn')
    const nomeInput = document.querySelector('#nome')
    const sobreNomeInput = document.querySelector('#sobrenome')
    const estudanteInput = document.querySelector('#estudos')
    const horarioCampo = document.querySelector('#horarioCampo')

    const mensagem = `Olá. Meu nome é ( ${nomeInput.value} ${sobreNomeInput.value} ). Acessei o site de vocês e gostaria de mais informações:\n- Eu estudo ou já estudei programação: ( ${estudanteInput.value} )\n- Tenho 2 horas para me dedicar aos estudos: ( ${horarioCampo.value} )`
    const mensagemFormatada = encodeURIComponent(mensagem)
    const url = 'https://wa.me/5521996119461?text=' + mensagemFormatada;
    botao.setAttribute('href', url)

}
