/**
 * Created by thinkpad on 2017/3/9.
 */
$(function () {
    $(".win").click(function () {
        redBall();
        blueBall();
    })
})
function blueBall() {
    var x = 16;
    var y = 1;
    var rand = parseInt(Math.random() * 16)+1;
    $(".blueBall").html(rand);
}
function redBall() {
    var redBall = document.getElementById('redBall');
    var arr = [];
    for(var i=0;i<6;i++){
        getx(arr);
    }
    function getx(arr){
        for(var i=1;i>0;i++){
            var flag = true;
            var num = Math.floor(Math.random()*33)+1;
            for(var i in arr){
                if(arr[i] == num){
                    flag= false;
                    break;
                }
            }
            if(flag == true){
                console.log(num);
                arr.push(num);
                return;
            }
        }
    }
    function sortNumber(a, b)
    {
        return a - b;
    }
    arr.sort(sortNumber);

    redBall.innerHTML = arr;
}