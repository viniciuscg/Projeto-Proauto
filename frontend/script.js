let id = null

async function autenticar() {
  const dadosUsuario = document.getElementById('dados-usuario')
  const cpf = document.getElementById('cpf').value
  const placa = document.getElementById('placa').value

  const response = await axios.post('http://localhost:3333/associate/authenticate', {
    cpf: cpf,
    placa: placa
  })

  id = response.data.id

  if (id) { 
    dadosUsuario.innerHTML = `
       
      <span>CPF: ${response.data.cpf || ''}</span>
      <span>Telefone: ${response.data.telefone || ''}</span>
      <span>Endereço: <input id="endereco" value="${response.data.endereco || ''}"></span>
      <span>Placa: ${response.data.placa || ''}</span>
      <button onclick="salvar()">Salvar</button>  
    `
  } else {
    dadosUsuario.innerHTML = ""
  }
}

function salvar() {
  const endereco = document.getElementById('endereco').value

  axios.put('http://localhost:3333/associate', {
    id: id, 
    endereco: endereco, 
  })
  alert("Você salvou o seu endereço!")
}
