const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`, {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
});

function get_enviroment(proxy_array) {
    for (var i = 0; i < proxy_array.length; i++) {
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}

proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'screen']  // 代理的属性
window = global;
location = {
    "ancestorOrigins": {},
    "href": "https://www.douyin.com/search/slime?aid=27face1a-3b96-4198-819c-b48fbfd6047e&type=general",
    "origin": "https://www.douyin.com",
    "protocol": "https:",
    "host": "www.douyin.com",
    "hostname": "www.douyin.com",
    "port": "",
    "pathname": "/search/slime",
    "search": "?aid=27face1a-3b96-4198-819c-b48fbfd6047e&type=general",
    "hash": ""
}
document = dom.window.document
window.requestAnimationFrame = function (res) {
    console.log("window.requestAnimationFrame ->", res)
}
window._sdkGlueVersionMap = {
    "sdkGlueVersion": "1.0.0.51",
    "bdmsVersion": "1.0.1.5",
    "captchaVersion": "4.0.2"
}
window.onwheelx = {
    "_Ax": "0X21"
}
window.innerWidth = 1707
window.innerHeight = 791
window.outerWidth = 1707
window.outerHeight = 912
window.screenX = 0
window.screenY = 0
window.pageYOffset = 0
window.fetch = function (res) {
    console.log("window.fetch ->",res)
}

screen = {
    availWidth: 1707,
    availHeight: 912,
    width: 1707,
    height: 960,
    colorDepth: 24,
    pixelDepth: 24,
}
XMLHttpRequest = dom.window.XMLHttpRequest;
span = []
document = {
    createElement: function (res) {
        console.log("document.createElement ->", res)
        return []
    },
    documentElement: function (res) {
        console.log("document.documentElement ->", res)
    },
    createEvent: function (res) {
        console.log("document.createEvent ->", res)
    },
    body: []
}

setTimeout = function () {
}
navigator = {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    vendorSubs: {
        "ink": 1713882586968
    },
    platform: 'Win32'
}


get_enviroment(proxy_array)
require('./code1')
// Giả lập full môi trường để lừa đống code Douyin

function get_ab(url) { 
    c = new XMLHttpRequest()
    
    c.bdmsInvokeList = [
        {
            "args": [
                "GET",
                url,
                true
            ]
        },
        {
            "args": [
                "Accept",
                "application/json, text/plain, */*"
            ]
        },
        {
            "args": [
                "uifid",
                "5bdad390e71fd6e6e69e3cafe6018169c2447c8bc0b8484cc0f203a274f99fdba2dc9d48a62163b398efb405f116877ea2ef2c778db3bc15c12f675761e674a737bd92355a61ca004cef8a3bb8a735f126db666dc698b186024ce0fb9eeeb677a52f434a1d4c311101f464790c762a9205a9263aeddbe04c9b8a20776eb3de3881d9a0f50f24677ec6d63d397ec6f375e36032852d53433a046f9abad1593df5"
            ]
        }
    ]
    c.send(null)
    return window.a_bogus
}      


