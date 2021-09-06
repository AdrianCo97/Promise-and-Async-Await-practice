const video = new Promise((resolve, reject) => {
    let videoStatus = true;

    if(videoStatus){
        resolve("Completed")
    }
    else{
        reject("Not completed");
    }
})


video.then((message) => {
  console.log(message);
})