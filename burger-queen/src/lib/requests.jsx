import { config } from "./config";


async function makeRequestPost(pathname, data, token = false) {

  token = localStorage.getItem("loginToken")

  try {
    const url = `${config.API_URL}/${pathname}`
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
  const url = `${config.API_URL}/${pathname}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  const responseData = await response.json()
  console.log('REQUEST >>>>>>>>', responseData);

  return responseData
}

async function makeRequestGet(pathname) {

  const token = localStorage.getItem("loginToken")
  const url = `${config.API_URL}/${pathname}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  const responseData = await response.json()
  console.log('obtener órdenes ',responseData);
  return responseData
}

const makeRequestDelete = async (pathname, id,) => {
  
  const token = localStorage.getItem("loginToken")

  const url = `${config.API_URL}/${pathname}/${id}`
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      "content-type": "application/json",
      'authorization': `Bearer ${token}`
    },
  });

  // const responseDelete = await res.json()
  // console.log('Request Delete >>>> ',res);
  // return res

}

const makeRequestPatch = async (pathname, id, data) => {
  
  const token = localStorage.getItem("loginToken")

  const url = `${config.API_URL}/${pathname}/${id}`
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      "content-type": "application/json",
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });

  // console.log('Request PATCH >>>> ',res);
}

const makeRequestDeleteOrder = async ( id) => {
  
  const token = localStorage.getItem("loginToken")

  const url = `${config.API_URL}/orders/${id}`
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      "content-type": 'application/json',
      'authorization': `Bearer ${token}`
    },
  });
  console.log('respuesta >>', url, id)
  return res

}


export {
  makeRequestPost,
  makeRequestDeleteOrder,
  getProducts,
  makeRequestDelete,
  makeRequestPatch,
  makeRequestGet, 
}