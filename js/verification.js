$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "白桑" && pwd == "0") {
        $('#h').text("欢迎回来尊贵的白桑小姐");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "img.html";
        }, 4000);
    } else {
        alert("用户名或密码不正确！");
    }
});
