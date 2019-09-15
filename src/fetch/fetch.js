import axios from 'axios';
import { message, Modal } from 'antd';
import { getToken } from '../libs/getUserInfo';
import { ipcRenderer } from 'electron';
/**
 * 处理method
 * @param {AxiosRequestConfigMethod} config 包含method的config属性
 * @param {object} [params] 参数
 */
function handleMethodPlugin(config, params,) {
  const configs = config;
  configs.headers = {
    Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json;charset=UTF-8',
  };
  switch (configs.method.toLowerCase()) {
    case 'get': {
      configs.params = params;
      break;
    }
    case 'post':
    case 'put':
    case 'patch': {
      configs.data = params;

      if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        // config.data = qs.stringify(params);
      }
      break;
    }
    default: {
      configs.params = params;
    }
  }
}
/**
 * 接口请求
 * @param {string} urlParams 接口url
 * @param {object} [params] 接口参数
 * @param {AxiosRequestConfig} [options] 接口配置参数
 * @param {options} [urlParams] 如果接口需要用url参数去调用，options.urlParams 可以传入变量参数，可为数组，按顺序拼接，可为字符串
 * @returns
 */
function fetch(urlParams, params, options) {
  let configUrl = urlParams;
  if (options.urlParams) {
    if (Array.isArray(options.urlParams)) {
      const list = options.urlParams.join('/');
      configUrl = `${configUrl}/${list};`
    } else if (typeof options.urlParams === 'string') {
      configUrl = `${configUrl}/${options.urlParams}`;
    }
    delete options.urlParams;
  }
  const config = Object.assign({
    url: configUrl,
    method: 'get',
  }, options);
  handleMethodPlugin(config, params);
  return axios(config).then((response) => {
    if (+response.data.code === 403 || +response.data.code === 401) {
      if (window.location.hash !== '#/login') {
        Modal.error({
          title: '登录信息',
          content: response.data.message,
          okText: '确定',
          centered: true,
          onOk: () => {
            ipcRenderer.send('closeMain');
            setTimeout(() => {
              ipcRenderer.send('openLogin');
            }, 1000)
          }
        });
      }
    }
    return response.data;
  }).catch((error) => {
    message.error('请求已断开');
  });
}

export default fetch;
