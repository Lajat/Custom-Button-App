var inputBtn = document.getElementById("input-btn");
// btn.onclick = function() {
//     inputBtn.style.display = "block";
//     btn.style.display = "none";
// }
inputBtn.onclick= function() {
    // console.log(e.key);
    // if(e.key === 'Enter') {
    //     inputBtn.style.display = "none";
    //     btn.style.display = "block";
    // }
    btn.innerHTML = inputBtn.value;
}
inputBtn.onkeyup= function() {
    // console.log(e.key);
    // if(e.key === 'Enter') {
    //     inputBtn.style.display = "none";
    //     btn.style.display = "block";
    // }
    btn.innerHTML = inputBtn.value;
}
paddingTop.onclick = function() {
    if(paddingTop.value === 'Padding Top')
    paddingTop.value = "0px";
    btn.style.paddingTop = paddingTop.value;
}
paddingTop.onkeyup = function() {
    btn.style.paddingTop = paddingTop.value;
}

paddingRight.onclick = function() {
    if(paddingRight.value === 'Padding Right')
    paddingRight.value = "0px";
    btn.style.paddingRight = paddingRight.value;
}
paddingRight.onkeyup = function() {
    btn.style.paddingRight = paddingRight.value;
}

paddingBottom.onclick = function() {
    if(paddingBottom.value === 'Padding Bottom')
    paddingBottom.value = "0px";
    btn.style.paddingBottom = paddingBottom.value;
    // paddingBottomClicked = true;
}
paddingBottom.onkeyup = function() {
    btn.style.paddingBottom = paddingBottom.value;
    // paddingBottomClicked = true;
}

paddingLeft.onclick = function() {
    if(paddingLeft.value === 'Padding Left')
    paddingLeft.value = "0px";
    btn.style.paddingLeft = paddingLeft.value;
}
paddingLeft.onkeyup = function() {
    btn.style.paddingLeft = paddingLeft.value;
}

textColour.onchange = function() {
    btn.style.color = textColour.value;
}
btnColour.onchange = function() {
    btn.style.backgroundColor = btnColour.value;
}
borderColour.onchange = function() {
    btn.style.borderColor = borderColour.value;
}

textSize.onchange = function() {
    btn.style.fontSize = textSize.value + "px";
}
textSize.onkeyup = function() {
    btn.style.fontSize = textSize.value + "px";
}

borderSize.onchange = function() {
    btn.style.borderWidth = borderSize.value + "px";
}
borderSize.onkeyup = function() {
    btn.style.borderWidth = borderSize.value + "px";
}

borderStyleData.onchange = function () {
    btn.style.borderStyle = borderStyleData.value;
}
borderStyleData.onkeyup = function () {
    btn.style.borderStyle = borderStyleData.value;
}

var codeGen = document.getElementById("codeGenerated");

code.onclick = function () {
    codeGen.innerHTML = "";

    // if(btn.style.paddingTop == "")
    // btn.style.paddingTop = "0px";
    // if(btn.style.paddingRight == "")
    // btn.style.paddingRight = "0px";
    // if(btn.style.paddingBottom === "")
    // btn.style.paddingBottom = "0px";
    // if(btn.style.paddingLeft == "")
    // btn.style.paddingLeft = "0px";

    var htmlDataWrapper = document.createElement('div');
    var heading1 = document.createElement('h3');
    heading1.innerHTML = "HTML Codes:";

    var htmlData = document.createElement('p');
    htmlData.innerText = "<button class=\"btn\">" + btn.innerHTML + "</button>";
    htmlDataWrapper.appendChild(heading1);
    htmlDataWrapper.appendChild(htmlData);

    var cssDataWrapper = document.createElement('div');
    var heading2 = document.createElement('h3');
    heading2.innerHTML = "CSS Codes:";
    var classbtnStart = document.createElement('p');
    classbtnStart.innerHTML = ".btn {";
    var fs = document.createElement('p');
    fs.innerHTML = "font-size:" + btn.style.fontSize + ";";

    var fc = document.createElement('p');
    fc.innerHTML = "color:" + btn.style.color + ";";

    var pdingTop = document.createElement('p');
    // pding.innerHTML = "padding:" + btn.style.paddingTop + " " + btn.style.paddingRight + " "  + btn.style.paddingBottom + " "   + btn.style.paddingLeft + ";";
    pdingTop.innerHTML = "padding-top: " + btn.style.paddingTop + ";";
    var pdingRight =  document.createElement('p');
    pdingRight.innerHTML = "padding-right: " + btn.style.paddingRight + ";";
    var pdingBottom = document.createElement('p');
    pdingBottom.innerHTML = "padding-bottom: " + btn.style.paddingBottom + ";";
    var pdingLeft =  document.createElement('p');
    pdingLeft.innerHTML = "padding-left: " + btn.style.paddingLeft + ";";

    var bdrWidth =document.createElement('p');
    // bdr.innerHTML = "border:" + btn.style.borderWidth + " " + btn.style.borderStyle + " " + btn.style.borderColor + ";";
    bdrWidth.innerHTML = "border-width: " + btn.style.borderWidth + ";";
    var bdrStyle = document.createElement('p');
    bdrStyle.innerHTML = "border-style: " + btn.style.borderStyle + ";";
    var bdrColour = document.createElement('p');
    bdrColour.innerHTML = "border-color: " + btn.style.borderColor + ";";

    var btnc = document.createElement('p');
    btnc.innerHTML = "background-color:" + btn.style.backgroundColor + ";";
    var classbtnEnd = document.createElement('p');
    classbtnEnd.innerHTML = "}";
    cssDataWrapper.appendChild(heading2);
    cssDataWrapper.appendChild(classbtnStart);
    cssDataWrapper.appendChild(fs);
    cssDataWrapper.appendChild(fc);
    cssDataWrapper.appendChild(btnc);
    cssDataWrapper.appendChild(pdingTop);
    cssDataWrapper.appendChild(pdingRight);
    cssDataWrapper.appendChild(pdingBottom);
    cssDataWrapper.appendChild(pdingLeft);
    cssDataWrapper.appendChild(bdrWidth);
    cssDataWrapper.appendChild(bdrStyle);
    cssDataWrapper.appendChild(bdrColour);
    cssDataWrapper.appendChild(classbtnEnd);

    codeGen.appendChild(htmlDataWrapper);
    codeGen.appendChild(cssDataWrapper);
    codeGen.style.display = "block";
}

main.onclick = function() {
    codeGen.style.display = "none";
}