let codeStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//验证码长度
let length = 4;
let capcha = document.getElementById("capcha");
let change_capcha = document.getElementById("change_capcha");
// 用来生成一个[n,m]随机整数
function getRandom(n, m) {
    return parseInt(Math.random() * (m - n + 1) + n);
}
// 将随机生成的整数下标对应的字母放入span中
function getCode() {
    let str = "";
    // 验证码有几位就循环几次
    for (let i = 0; i < length; i++) {
        let index = getRandom(0, 61);
        str += codeStr.charAt(index);
    }
    capcha.innerHTML = str;
}
// 页面初始加载时就调用函数生成验证码，页面刷新也会执行
getCode();
// 点击刷新验证码
capcha.addEventListener("click", getCode);
// change_capcha.addEventListener("click", getCode)

function Submit() {
    alert('恭喜您注册成功（目前没有设置任何的检查函数）');
}
var msg = document.getElementById("msg"); // 根据id值找到span元素
window.onload = function () {
    msg.innerHTML = document.getElementById("salary").value; // 获取区间域初始value值 
}
document.getElementById("salary").onchange = function () {
    msg.innerHTML = this.value; // 将当前区间域的value作为span元素的内容
}

var fileInput = document.getElementById('test-image-file');
var info = document.getElementById('test-file-info');
var preview = document.getElementById('test-image-preview');
fileInput.addEventListener('change', function () { // 监听change事件
    preview.style.backgroundImage = ''; // 清除背景图片
    if (!fileInput.value) {
        // info.innerHTML = '没有选择文件';
        return;
    }
    var file = fileInput.files[0]; // 获取File引用
    // 获取File信息:
    // info.innerHTML = '文件: ' + file.name + '<br>' + '大小: ' + file.size + '<br>' + '修改: ' + file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        // alert('不是有效的图片文件!');
        return;
    }
    var reader = new FileReader(); // 读取文件
    reader.onload = function (e) { // 发起一个异步操作来读取文件内容
        var data = e.target.result; // data串形如： 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...' 
        preview.style.backgroundImage = 'url(' + data + ')';
    };
    reader.readAsDataURL(file); // 以DataURL的形式读取文件
});
