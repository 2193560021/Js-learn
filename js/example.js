window.onload = function(){
    // 学习innerHTML
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML="<p>This is my <em>GTR</em>,bro.</p>";
    // createElement学习
    var para = document.createElement("p");
    var info="nodeName\: ";
    info+=para.nodeType;
    alert(info)
}