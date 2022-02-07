const buttons = document.getElementsByClassName("btn");
const slider = document.getElementById("slider");
for (const button of buttons) {
  button.addEventListener("click", () => {
    if(window.innerWidth>=600){
        slider.style.backgroundImage=`url(https://picsum.photos/1920/1080/?random&rnd${new Date().getTime()}`
    }
    else {
                slider.style.backgroundImage = `url(https://picsum.photos/1080/1920/?random&rnd${new Date().getTime()}`;

    }
  });
}
