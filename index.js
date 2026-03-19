
//the audio wouldn't play first, before the .intro page loaded, no matter what I tried. I even tried with a promise, so that only once the audio started playing the rest of the page would load, but nothing. I tried with standard delays 100-600 as well, also nothing. Finally, the only thing that worked was a delay of 2500 (have it at 3000 now). I believe it's the browser's behaviour with the sound and autoplay that creates a whole mess of things. Should be addressed!
addEventListener("click", () => {
    const audio = document.getElementById("audioFile");
    const body = document.getElementById("intro");
    const crawl = document.querySelector(".crawl");

    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        body.classList.add("show");
        crawl.style.animationPlayState = "running";
    }, 4000);

}, { once: true }); // this is needed so that the listener only runs once, and then shots down



    // let playPromise = audio.play();
    //
    // if (playPromise !== undefined) {
    //     playPromise.then(() => {
    //
    //
    //
    //         setTimeout(() => {
    //             body.classList.add("show");
    //             crawl.style.animationPlayState = "running";
    //         }, 300); //THIS SMALL DELAY WAS THE ISSUE ALL LONG. 
    //     })
    // }



    // audio.play().then(() => {
    //     document.querySelector(".crawl").style.animationPlayState = "running";
    //     document.getElementById("intro").classList.add("show");
    // })
// },
// {once: true}
//
// );




