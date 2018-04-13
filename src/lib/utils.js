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
    }
}

export default utils