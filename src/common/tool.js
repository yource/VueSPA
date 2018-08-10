(function(window) {
  /**
    * $tool.setCookie(key,value,time) 设置cookie
    * $tool.setStorage(key,value) 设置本地存储
    * $tool.md5(str) MD5加密
    * $tool.isIOS 鉴别操作系统
    **/
    var $tool = {};

    if(typeof plus==="undefined" || !plus.os){
      $tool.isIOS = window.navigator.appVersion.indexOf("iPhone")>-1;
    }else{
      $tool.isIOS = plus.os.name=="iOS"
    }

    /****************  cookie和localstorage  ****************/
    // 是否支持localStorage
    if (!window.localStorage) {
        $tool.supportLocalStorage = false;
    } else {
        $tool.supportLocalStorage = true;
    }

    // time为超时时间（单位毫秒），非必填
    $tool.setStorage = function(key, value, time) {
        if (this.supportLocalStorage) {
            if (typeof key != "string") {
                console.log("*STORAGE ERROR* key必须是字符串");
                return;
            }
            if (time) {
                if (typeof time != "number") {
                    console.log("*STORAGE ERROR* time必须是数字");
                    return;
                } else {
                    time = parseInt(time) + (new Date()).getTime();
                }
            } else {
                time = null;
            }
            var setValue = {
                value: JSON.stringify(value),
                time: time
            }
            localStorage.setItem(key, JSON.stringify(setValue));
        } else {
            $tool.setCookie(key, value, time)
        }
    };

    // 不存在的值会返回null
    $tool.getStorage = function(key) {
        if (this.supportLocalStorage) {
            var getValue = JSON.parse(localStorage.getItem(key));
            if (!getValue) {
                return null;
            }
            if (getValue.time && getValue.time < (new Date()).getTime()) {
                localStorage.removeItem(key);
                return null;
            } else {
                return JSON.parse(getValue.value)
            }
        } else {
            $tool.getCookie(key)
        }
    };

    // 移除某个值
    $tool.removeStorage = function(key) {
        if (this.supportLocalStorage) {
            localStorage.removeItem(key);
        } else {
            $tool.removeCookie(key)
        }
    };
    // 清空存储
    $tool.clearStorage = function() {
        if (this.supportLocalStorage) {
            localStorage.clear();
        } else {
            $tool.clearCookie();
        }
    };

    /**** cookie方法 ****/
    $tool.setCookie = function(key, value, time) {
        if (typeof key != "string") {
            console.log("*STORAGE ERROR* key必须是字符串");
            return;
        } else {
            if (typeof time != "number") {
                // cookie默认存365天
                time = 365 * 24 * 60 * 60 * 1000;
            }
            var d = new Date();
            d.setTime(d.getTime() + time);
            document.cookie = key + "=" + value + "; expires=" + d.toGMTString();
        }
    };
    $tool.getCookie = function(key) {
        var cookies = document.cookie.split(";")
        var cookieValue;
        for (var i = 0; i < cookies.length; i++) {
            if (key == cookies[i].split("=")[0]) {
                cookieValue = cookies[i].split("=")[1];
                break;
            }
        }
        return cookieValue;
    };
    $tool.removeCookie = function(key) {
        document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    };
    $tool.clearCookie = function() {
        var cookies = document.cookie.split(";")
        for (var i = 0; i < cookies.length; i++) {
            document.cookie = cookies[i].split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    };

    /****************  md5加密  ****************/
    $tool.md5 = function(s) { return binl2hex(core_md5(str2binl(s), s.length * chrsz)); }

    var hexcase = 0;
    var b64pad = "";
    var chrsz = 8;

    function core_md5(x, len) {
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;

            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);
    }

    function str2binl(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz)
            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
        return bin;
    }

    function binl2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
                hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
        }
        return str;
    }

    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    window.$tool = $tool;
})(window)