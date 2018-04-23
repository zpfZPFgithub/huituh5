let utils={
    addScript: function(url, callback)  
    {  
        let old_script = document.getElementById(url);  
        if (old_script)  
        {  
            if (old_script.ready == true)  
            {  
                // console.log("INFO:already load:" + url);  
                callback();  
                return;  
            }  
            else  
            {  
                document.body.removeChild(old_script);  
                // console.log("INFO:remove an old script that not ready:" + url);  
            }  
        }  
        let script = document.createElement('script');  
        script.id = url;  
        script.src = url;  
        script.charset="utf-8";
        script.onload = script.onreadystatechange = function() {  
            if (script.ready) {  
                return false;  
            }  
            if (!script.readyState //这是FF的判断语句，因为ff下没有readyState这个值，IE的readyState肯定有值  
                || script.readyState == "loaded" || script.readyState == 'complete' // 这是IE的判断语句  
            ) {  
                // console.log("INFO:load:" + url);  
                script.ready = true;  
                callback();  
            }  
        };  
        document.head.appendChild(script);  
    },
    toZero:(data)=>{
        if(data<10){
            return '0'+data
        }
        return data.toString()
    },
    getUrlParam: function (url) {
        var url = url || location.search.toLowerCase(); //获取url中"?"符后的字串  
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.split("?")[1];
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    timeFormait:(date)=>{
        if(!date){
            return 
        }
        let data =  new Date(+date);
        return [
            data.getFullYear(),
            utils.toZero(data.getMonth()+1),
            utils.toZero(data.getDate()),
        ].join('-')+' '+[
            utils.toZero(data.getHours()),
            utils.toZero(data.getMinutes()),
            utils.toZero(data.getSeconds())
        ].join(':')
    },
    getCookie: (key)=>{
        // 读取cookie
        var result = key ? undefined : {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decodeURIComponent(parts.shift());
            var cookie = decodeURIComponent(parts.join(''));
            if (key && key === name) {
                result = decodeURIComponent(cookie);
                break;
            }
            if (!key) {
                result[name] = cookie;
            }
        }
        return result;
    },
    setCookie: (key, value, options) => {
        options = options || {};
        var expires = "";
        if (typeof options.expires != 'undefined') {
            expires = options.expires;
            if (typeof options.expires == "number") {
                expires = new Date();
                expires.setTime(expires.getTime() + options.expires * 24 * 60 * 60 * 1000);
            }
        }
        // 写入cookie
        if (arguments.length > 1) {
            return (document.cookie = [
				encodeURIComponent(key), '=', encodeURIComponent(value),
				'; expires=' + expires,
				options.path ? ';path=' + options.path : '',
				options.domain ? ';domain=' + options.domain : '',
				options.secure ? ';secure' : '',
            ].join(' '));
        }
        
    },
    removeCookie: (key, options) => {
        if (utils.cookie(key) == undefined) {
            return false;
        }
        utils.cookie(key, '', {...options, ...{expires: -1}});  
        return !utils.cookie(key)
    }
}

export default utils