
console.log("start");
function getvideolist(email,cb){
    setTimeout(()=>{
        cb([{title: "video1"}, {title: "video2"}]);
    },2000);
};