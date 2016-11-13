function t(dom){
  return document.querySelector(dom) || document.getElementById(dom);
}


init()

function init(){
  var name = t(".name");
  var arr = splitText(name);
  var newHTML = convertToDom(arr);
  name.innerHTML = newHTML;

  moveText(".nameInnen");

  }




function moveText(dom){
  var counter=0;
  var state = true;
  setInterval(function(){
    if(state === true)
    {
      counter+=.1;
      if(counter>3){state = false;}

    } else
    {
      counter-=.1;
      if(counter<0){state = true;}
    }
    console.log(counter)

  }, 50)


    setInterval(function move(){
        for(var i =0; i<arr.length; i++){
              if(i%2===0){
                arr[i].style= "transform:translate("+(i*32.4)+"px,"+ counter/2 +"px)"
            } else {
                arr[i].style= "transform:translate("+(i*32.4)+"px,"+ -(counter/2) +"px)"
            }
        }
    },10)

    

    var arr = document.querySelectorAll(dom);
    console.log(arr);
}



function convertToDom(string){
    var string = string;
    var arrAlles = "";
  for(i=0; i<string.length; i++){
    var inside = string[i];
    string[i] = "<span class="+"divsFor"+"><span class="+"nameInnen"+">"+inside+"</span></span>";
    arrAlles += string[i];
  }
  return arrAlles;
}

function splitText(string){
  var arr = string.innerText.split("");
  return arr;
}
