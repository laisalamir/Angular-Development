let user = {
  name: 'Mariana'
};

//Alterando a propriedade de um objecto
user.name = 'Outro nome 1';
user['name']= 'Outro nome 2';

const prop = 'name';
user['prop']= 'Outro nome 3';

//criando uma propriedade
user.LastName = ' Cunha Silva';

// Deletando uma propriedade
delete user.name;