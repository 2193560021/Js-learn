window.onload = function(){
    // 学习innerHTML
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML="<p>This is my <em>GTR</em>,bro.</p>";
    // createElement学习
    var para = document.createElement("p");
    testdiv.appendChild(para);
    //createTextNode()方法
    var txt = document.createTextNode("hello world");
    para.appendChild(txt);
}