async function getData(pathname, data) {

    try{
        const url = `http://localhost:8080/${pathname}`
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if(res.code != 200){
            throw new Error('Validación incorrecta')
        }
        const response = await res.json();
       console.log("respuesta json ", response);
       return response;
    }catch(error){
        console.error('catch request ',error);
        return null
    }
  }

  export {
    getData,
  }