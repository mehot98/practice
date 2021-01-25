function setColor(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
  console.log(alist[i]);
  alist[i].style.color = color;
  i = i + 1;
}
}

  function nightDayHandler(self){
      if(self.value==='night'){
        document.querySelector('body').style.backgroundColor='black';
        document.querySelector('body').style.color='white';
        self.value=' day ';

        setColor('white');

      }
      else{
        document.querySelector('body').style.backgroundColor='white';
        document.querySelector('body').style.color='black';
        self.value='night';


        setColor('black');

      }

      }
