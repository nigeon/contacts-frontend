const apiConfig = {
  host: 'http://localhost:1337'
};

export const encodeParams = (params) => Object.keys(params).map((key) => {
  return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
}).join('&');

class Api {
  executeCall = async (method, endpoint, params = null) => {
    let options = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XmlHttpRequest',
      },
    };
    
    if(params && typeof params == 'object' && Object.keys(params).length !== 0){
      if(method === 'GET'){
        endpoint += '?' + encodeParams(params);
      }else{
        options.body = JSON.stringify(params);
      }
    }

    let response = await fetch(endpoint, options);
    try { 
      return response.json();
    } catch(error) {
      return { error };
    } 
  }

  listContacts = async () => {
    return await this.executeCall('GET', `${apiConfig.host}/contacts`);
  };

  getContact = async (id) => {
    return await this.executeCall('GET', `${apiConfig.host}/contacts/${id}`);
  };

  createContact = async (data) => {
    return await this.executeCall('POST', `${apiConfig.host}/contacts`, data);
  };

  updateContact = async (id, data) => {
    return await this.executeCall('PATCH', `${apiConfig.host}/contacts/${id}`, data);
  };

  deleteContact = async (id) => {
    return await this.executeCall('DELETE', `${apiConfig.host}/contacts/${id}`);
  };

  apiErrorsToFormik = (errors) => {
    let formErrors = {}
    errors.data.forEach((v, i) => {
      let e = '';
      Object.keys(v.constraints).forEach((c) => {
        e += v.constraints[c];
      });
  
      formErrors[v.field] = e;
    });
  
    return formErrors;
  }
}

export default new Api();