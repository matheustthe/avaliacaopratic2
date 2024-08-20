let usuarios = [];


function adicionarUsuario(nome, idade, email) {




   if (!nome || !idade || !email) {
    console.error("Erro: Preencha todos os campos!");
    return;
  }




  if (idade <= 0) {
    console.error("Erro: Idade deve ser maior que 10!");
    return;
  }




  let usuario = {
    nome: nome,
    idade: idade,
    email: email
  };




          usuarios.push(usuario);




         console.log(`Usuário adicionado com sucesso!`);
        }




function listarUsuarios() {
  console.log("Usuários cadastrados:");
  for (let i = 0; i < usuarios.length; i++) {
    console.log(`Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade}, Email: ${usuarios[i].email}`);
  }
}
adicionarUsuario("James", 24, "jamesada@gmail.com");
adicionarUsuario("Luana", 31, "luanamath@gmail.com");
listarUsuarios();


