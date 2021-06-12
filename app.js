const buttonEl = document.getElementById('btn');
const vedioEl = document.getElementById('video');

async function startStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        vedioEl.srcObject = mediaStream;
        vedioEl.onloadedmetadata = () =>{
            vedioEl.play();
        }
    }
    catch(error){
        console.log("Error : " ,error)
    }
}
buttonEl.addEventListener('click', async()=>{
    buttonEl.disabled = true;

    await vedioEl.requestPictureInPicture();
    vedioEl.hidden = true;
    buttonEl.disabled = false;
})

startStream();