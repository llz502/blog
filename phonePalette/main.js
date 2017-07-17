// 获取canvas标签
let canvas = document.querySelector('#app')
// 获取文档的宽和高
let clientWidth = document.documentElement.clientWidth
let clientHeight = document.documentElement.clientHeight
// 将画布的宽高设置为文档的宽高
canvas.width = clientWidth
canvas.height = clientHeight
// 获取canvas的上下文环境
let context = canvas.getContext("2d");
// 声明上一个移动点的位置
let previousPoint
let colorStyle = "green"
// 在canvas上绑定touchmove事件，并阻止默认事件
canvas.addEventListener('touchmove', function(e){
    e.preventDefault()
// 获取状态是被选中状态checked，属性name值是penType的input标签的value值
  let penType = document.querySelector('input[name="penType"]:checked').value
//   获取当前触摸事件
  let {pageX,pageY}= e.touches[0]
  
  if(penType === 'pen'){
    if(previousPoint){
      colorStyle='green';
      context.strokeStyle = colorStyle;
      context.lineWidth = 5;
      context.beginPath();
      context.moveTo(previousPoint.pageX, previousPoint.pageY); // 移动到上一个点
      context.lineTo(pageX,pageY); // 画线到这一个点
      context.stroke()
    }
    previousPoint = { pageX, pageY }
  }else if(penType === 'eraser'){
    context.clearRect(pageX-5, pageY-5, 10, 10)
  }

})
canvas.addEventListener('touchend', function(){
  previousPoint = null
})

save.onclick = function(){
  var canvas=document.getElementById("app");
  var data=canvas.toDataURL("image/png");
  var newWindow=window.open('about:blank','image from canvas');
  newWindow.document.write("<img src='"+data+"' alt='from canvas'/>");
}