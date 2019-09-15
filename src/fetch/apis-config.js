/*
 * @Company: JiangSu LangChuang
 * @Author: Lu YiMing
 * @Date: 2019-09-15 11:44:41
 * @LastAuthor: Lu YiMing
 * @lastTime: 2019-09-15 11:56:50
 * @FileUse: 文本文件用于
 */
import system from './config/system/index';

// 此值为true时，开发环境强行不使用mock接口，即使在接口配置项中配置了mock为true(仅限开发环境)
const GLOBAL_IS_NOT_MOCK_WHEN_DEV = false;

const configList = [
  ...system,
];
// 根据当前环境切换hostUrl
configList.forEach((apiConfig) => {
  const config = apiConfig;
  config.hostUrl = global.envConfig[apiConfig.hostName];
  // 开发环境
  
  if (process.env.CUSTOM_ENV === 'dev') {
    // 要求强行开启非mock接口
    if (GLOBAL_IS_NOT_MOCK_WHEN_DEV) {
      return;
    }
    if (apiConfig.mock) {
      config.hostUrl = global.envConfig[apiConfig.mockHost];
    }
  }
});

export default configList;
