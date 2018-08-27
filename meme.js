var imgCounter = 0;

function buttonClick (){
    
    var imgurl = document.getElementById("imgurl").value;
    var toptext = document.getElementById("toptext").value;
    var bottomtext = document.getElementById("bottomtext").value;
    
    append(imgurl, toptext, bottomtext);

    //clear out text 
    $('input').val('');
    
}



function append(imgurl, toptext, bottomtext) {
    var newMeme = `<tr>
    <td>
    <div class="container">
     <img src="${imgurl}" id = "img${imgCounter}" onclick="imageClick(this)" style="width:100%;  height:50%">
     <div class="toptext">${toptext}</div>
     <div class="bottomtext">${bottomtext}</div>
    </div>
    </td>
</tr>`;
    
    $("table").append(newMeme);
    imgCounter++;
}

function imageClick(elem){
    var elemToRemove = elem.parentElement.parentElement.parentElement
    elemToRemove.parentElement.removeChild(elemToRemove);

    
}


