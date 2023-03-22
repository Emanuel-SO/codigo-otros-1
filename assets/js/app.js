const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementById('name');
const $b = document.getElementById('blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  // $n.textContent = 'cargando...';
  // const response = await fetch(`${usersEndpoint}/${username}`);
  // console.log(data);
  // $n.textContent = '${data.name}';
  // $b.textContent = '${data.blog}';
  // $l.textContent = '${data.location}';
  // Esto se agrega dentro de un try catch
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);//busca la informacion en la api
    const data = await response.json(); //espera uno respuesta y la transforma a json
    //de la respuesta muestra la informacion como corresponde en las diferentes secciones
    $n.textContent = data.name; 
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (error) {// si existe un error se ejecuta la funcion escrita para errores
    handleError(error);
  }
}

function handleError(err) {
  //imprime un texto y el error por consola y dentro de una etiqueta en HTML
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
