import axios from 'axios';
import router from '../router/index';
import store from '../store/index';
import { Toast } from 'vux';

var AUTH_TOKEN = ''

const instance = axios.create({
  timeout: 30000, // 请求超时时间
})

function msg(message){
  console.log(Toast)
}

instance.defaults.timeout = 10000;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
instance.defaults.headers.common['token'] = AUTH_TOKEN;

instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if( !config.headers.common.token ){
    //console.log('token不存在')
    msg("test")
  }
    

  return config;
}, function (error) {
  //错误事件
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
//   console.log(response);
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


export default instance
