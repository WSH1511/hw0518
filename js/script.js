//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time= 0
function draw(){
  time++
  ctx.clearRect(0, 0, 400, 400)

  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  

  //屋頂底
  ctx.beginPath()
  ctx.moveTo(200, 125)
  ctx.lineTo(50, 225)
  ctx.lineTo(350, 225)
 ctx.closePath()
  ctx.fillStyle="#D2691E"
  ctx.fill()
  ctx.strokeStyle="#D2691E"
  ctx.stroke()
  
  //屋頂
  ctx.beginPath()
  ctx.moveTo(200, 150)
  ctx.lineTo(100, 225)
  ctx.lineTo(300, 225)
 ctx.closePath()
  ctx.fillStyle="#FFEBCD"
  ctx.fill()
  ctx.strokeStyle="#FFEBCD"
  ctx.stroke()
  
  //煙囪
  ctx.fillStyle="#D2691E"
  ctx.fillRect (275, 120, 25, 80)
  
  //屋子主體
  ctx.fillStyle="#FFEBCD"
  ctx.fillRect (100, 225, 200, 175)
  
  //門
  ctx.fillStyle="#D2691E"
  ctx.fillRect (175, 300, 50, 100)
  
  //窗
  ctx.beginPath()
  ctx.arc(150, 250, 25, 0, Math.PI*2)
  ctx.fillStyle="#2F4F4F"
  ctx.fill()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(250, 250, 25, 0, Math.PI*2)
  ctx.fillStyle="#2F4F4F"
  ctx.fill()
  ctx.stroke()
  
  //雲?
  let c1= time%440-10
  ctx.beginPath()
  ctx.arc(c1, 47, 10, 0, Math.PI*2)
  ctx.fillStyle="#6495ED"
  ctx.fill()
  ctx.strokeStyle="#6495ED"
  ctx.stroke()
  
  let c2= time%440-12
  ctx.beginPath()
  ctx.arc(c2, 60, 12, 0, Math.PI*2)
  ctx.fillStyle="#6495ED"
  ctx.fill()
  ctx.strokeStyle="#6495ED"
  ctx.stroke()
  
  let c3= time%440-25
  ctx.beginPath()
  ctx.arc(c3, 55, 12, 0, Math.PI*2)
  ctx.fillStyle="#6495ED"
  ctx.fill()
  ctx.strokeStyle="#6495ED"
  ctx.stroke()
  
  let c4= time%440-5
  ctx.beginPath()
  ctx.arc(c4, 55, 12, 0, Math.PI*2)
  ctx.fillStyle="#6495ED"
  ctx.fill()
  ctx.strokeStyle="#6495ED"
  ctx.stroke()
  
  //煙
  ctx.beginPath()
  ctx.arc(295, 100, 10, 0, Math.PI*2)
  ctx.fillStyle="#A9A9A9"
  ctx.fill()
  ctx.strokeStyle="#A9A9A9"
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(315, 80, 15, 0, Math.PI*2)
  ctx.fillStyle="#A9A9A9"
  ctx.fill()
  ctx.strokeStyle="#A9A9A9"
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(350, 50, 20, 0, Math.PI*2)
  ctx.fillStyle="#A9A9A9"
  ctx.fill()
  ctx.strokeStyle="#A9A9A9"
  ctx.stroke()
  
  //草
  ctx.beginPath()
  ctx.moveTo(50, 400)
  ctx.lineTo(50, 375 - (time%3) -mouse.y/5)
  ctx.lineTo(60, 400 -mouse.y/5)
  ctx.lineTo(65, 360 -mouse.y/5)
  ctx.lineTo(70, 400 -mouse.y/5)
  ctx.lineTo(75, 360 -mouse.y/5)
  ctx.lineTo(80, 400 -mouse.y/5)
  ctx.closePath()
  ctx.fillStyle="#006400"
  ctx.fill()
  ctx.strokeStyle="#006400"
  ctx.stroke()
  
  }
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})