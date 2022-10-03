// 样式部分
// 要操作的元素
// const Jump = document.querySelector(".jump");
// const Stop = document.querySelector(".stop");

document.getElementById("stop").addEventListener("click", () => {
    alert("还没搞好");
});

document.getElementById("jump").onclick = () => {
    // let but = document.getElementById("Jump");
    // //使按钮失效
    // but.disabled = true;
    let result = confirm("确定跳转吗（请自行检查网址）");
    if (result == true) {
        document.querySelector(".photo").style.opacity = "0";
        document.getElementById("time").style.opacity = "1";
        document.querySelector(".button1").style.opacity = "0";
        document.querySelector(".button2").style.opacity = "1";
        document.querySelector(".button2").style.zIndex = "3";

        let url = document.getElementById("URL").value;
        let wait = document.getElementById("time");
        // 等待时间
        let id = setInterval(() => {
            if (wait.innerHTML <= 0) {
                clearInterval(id);
                if (url == "") {
                    window.location = "https://www.wust.edu.cn";
                } else {
                    window.location = "https://" + url;
                }
            } else {
                wait.innerHTML = wait.innerHTML - 1;
            }
        }, 1000);//每隔1s执行一次
    }
    // else {
    //     but.disabled = false;
    // }
}

