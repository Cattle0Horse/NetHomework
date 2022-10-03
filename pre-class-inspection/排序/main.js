let gg = document.querySelectorAll('.gg');
let hh = document.querySelectorAll('.hh');

//判断是前面一个字符串大还是后面一个字符串大
let check = (Na1, Co1, Na2, Co2) => {
    if (Na1 != Na2) return Na1 > Na2;
    return Co1 > Co2;
};
//排序
for (let i = 1; i < gg.length; i++) {
    for (let j = i; j < gg.length; j++) {
        if (check(gg[j - 1].innerHTML, hh[j - 1].innerHTML, gg[j].innerHTML, hh[j].innerHTML)) {
            let temp = gg[j - 1].innerHTML;
            gg[j - 1].innerHTML = gg[j].innerHTML;
            gg[j].innerHTML = temp;

            temp = hh[j - 1].innerHTML;
            hh[j - 1].innerHTML = hh[j].innerHTML;
            hh[j].innerHTML = temp;
        }
    }
}


// 查找
function search() {
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("myTable");
    let tr = table.querySelectorAll("tr");
    // 循环表格每一行，查找匹配项
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].querySelectorAll("td")[0]; //获得第一列（公司名称）
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
let input = document.getElementById("myInput");
input.addEventListener("input", search);