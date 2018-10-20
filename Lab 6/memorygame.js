class Card {

  constructor(src) {

    this.initialSrc = "illusion.jpeg";
    this.src = src;


    this.imgHTML = document.createElement("img");
    this.imgHTML.src =this.initialSrc;

   this.show = this.show.bind(this);
   this.imgHTML.addEventListener("click",this.show);

   this.reset = this.reset.bind(this);
   this.remove = this.remove.bind(this);

  }

  show() {
  this.imgHTML.src = this.src;
  picsrc.push(this);


  if(picsrc.length === 2) {
    console.log(picsrc[0].src);
    console.log(picsrc[1].src);



    if(picsrc[0].src === picsrc[1].src){
      setTimeout(this.remove,500);
    }
    else {
      setTimeout(this.reset,500);
          }
        }
      }

       remove(){
        picsrc[0].imgHTML.style.display="none";
        picsrc[1].imgHTML.style.display="none";
        picsrc = [];
      }

      reset(){
        picsrc[0].imgHTML.src = "illusion.jpeg";
        picsrc[1].imgHTML.src = "illusion.jpeg";
        picsrc = [];
      }

// reset(event) {


// }

// hide(event){
//   picsrc[0].imgHTML.hide();
//   picsrc[1].imgHTML.hide();
//   picsrc = [];
// }

}
