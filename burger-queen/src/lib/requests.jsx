async function makeRequestPost(pathname, data, token = false) {

  token = localStorage.getItem("loginToken")

  try {
    const url = `http://localhost:8080/${pathname}`
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });
    if (res.status >= 400) {
      throw new Error('Validación incorrecta')
    }
    const response = await res.json();
    console.log("respuesta json ", response);
    return response;
  } catch (error) {
    console.error('catch request ', error);
    return null
  }
}

async function getProducts(pathname) {

  const token = localStorage.getItem("loginToken")
  const url = `http://localhost:8080/${pathname}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  const responseData = await response.json()

  return responseData
}

const makeRequestDelete = async (pathname, id, ) => {
  const url = `http://localhost:8080/${pathname}/${id}`
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'content-Type': 'application/json',
      // 'authorization': `Bearer ${token}`
    },
  });

  // const responseData = await response.json()

  // return responseData
}


// fetch('https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/products/8452', {
//     method: 'DELETE',
//     headers: {
//         'accept': 'application/json'
//     }
// });

export {
  makeRequestPost,
  getProducts, 
  makeRequestDelete
}