import axios from 'axios';

const service = axios.create({
  timeout: 30000,
  cache: false,
});

// request 拦截器
service.interceptors.request.use(
  config => {
    // TODO
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 304) {
      const { data } = response;
      return data;
    } else {
      // notification.error({
      //   message: `请求错误 ${response.status}: ${response.url}`,
      //   description: response.statusText,
      // });
      return Promise.reject(new Error('error'));
    }
  },
  error => {
    // notification.error({
    //   message: `error`,
    //   description: error.message,
    // });
    return Promise.reject(error);
  }
);

export default service;
