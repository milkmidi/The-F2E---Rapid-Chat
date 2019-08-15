import axios from 'axios';
// import qs from 'qs';

const axiosRequest = (config) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`%c${config.url}`, 'background: #fff; color: #2ecc71; font-size:14px;');
  }
  // store.commit('setProgressStart', true);
  return config;
};


const errorResponseHandler = (error) => {
  console.log(error);
  if (error.response) {
    const { status, data, statusText } = error.response;
    console.error(status, statusText);
    console.log(data);
  } if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  return Promise.reject(error);
};

axios.interceptors.request.use(axiosRequest);
axios.interceptors.response.use((response) => {
  // store.commit('setProgressStart', false);
  if (process.env.NODE_ENV === 'development') {
    const { config } = response;
    console.log(`%cresponse ${config.url}`, 'background: #2ecc71; color: #fff; font-size:14px;');
  }
  return response;
}, errorResponseHandler);


export const healthy = (formData:Object):Promise => axios.post('/api/api_exchange.ashx', formData)
  .then(({ data }) => data);
