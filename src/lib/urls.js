let urls = {} ;

let protocol = window.location.protocol;//xieyi
let host  = window.location.host;

urls.baseURL = protocol+'//'+host;

/*首页 */
// 焦点图(type=0), 首页专题(type=1)
urls.home_getBigPics = '/PicAjax/GetShowRecNewList/'   




export default urls