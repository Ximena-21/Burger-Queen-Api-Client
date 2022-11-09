async function makeRequestPost(pathname, data) {

  try {
    const url = `http://localhost:8080/${pathname}`
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
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

async function makeRequest(pathname, data) {

  const token = localStorage.getItem("loginToken")
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

export {
  makeRequestPost,
  getProducts, 
  makeRequest
}