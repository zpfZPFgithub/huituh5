let urls = {} ;

let protocol = window.location.protocol;//xieyi
let host  = window.location.host;

urls.baseURL = protocol+'//'+host;

/*首页 */
// 焦点图(type=0), 首页专题(type=1)
urls.home_getBigPics = '/PicAjax/HomePage/'   

/*user相关 */
// 注册, string mobile, string nickName, string pwd, string code
urls.reg = '/UserAjax/RegAccountH5'

// 获取手机验证码  string mobile
urls.getMobileCode = '/UserAjax/GetRegMobileSms'

//登录， string nickname, string pwd
urls.login = '/UserAjax/LoginH5'

// 展示简单个人信息数据
urls.getShortUserInfo = '/UserAjax/GetShortUserInfo'

export default urls