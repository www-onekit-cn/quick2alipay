import{OnekitPage,tt} from '../toutiao2alipay/index'

// slider
// const pageData = {
//     onShareAppMessage:function(){
//       return {
//         title:'slider',
//         path:'page/component/pages/slider/slider'
//       }
//     },
//     bindchanging:function(e){
//       console.log('拖动过程中触发的事件',e)
//     }
//   }
// for(var i = 1;i < 5;++i){
//   (function(index){
//     pageData[(('slider' + index)) + 'change'] = function(e){
//     console.log((('slider' + index)) + '发生change事件，携带值为',e.detail.value)
//   }
//   })(i);
// }
// OnekitPage(pageData)

// switch
// OnekitPage({
//     switch1Change:function(e){
//       console.log('switch1 发生 change 事件，携带值为',e.detail.value)
//     },
//     switch2Change:function(e){
//       console.log('switch2 发生 change 事件，携带值为',e.detail.value)
//     }
//   })

//picker
// var ms = [
//   [
//     '无脊柱动物',
//     '脊柱动物'
//   ],
//   [
//     [
//       '扁性动物',
//       '线形动物',
//       '环节动物',
//       '软体动物',
//       '节肢动物'
//     ],
//     [
//       '鱼',
//       '两栖动物',
//       '爬行动物'
//     ]
//   ],
//   [
//     [
//       [
//         '猪肉绦虫',
//         '吸血虫'
//       ],
//       [
//         '蛔虫'
//       ],
//       [
//         '蚂蚁',
//         '蚂蟥'
//       ],
//       [
//         '河蚌',
//         '蜗牛',
//         '蛞蝓'
//       ],
//       [
//         '昆虫',
//         '甲壳动物',
//         '蛛形动物',
//         '多足动物'
//       ]
//     ],
//     [
//       [
//         '鲫鱼',
//         '带鱼'
//       ],
//       [
//         '青蛙',
//         '娃娃鱼'
//       ],
//       [
//         '蜥蜴',
//         '龟',
//         '壁虎'
//       ]
//     ]
//   ]
// ]
// OnekitPage({
//     data:{
//         array:[
//           '美国',
//           '中国',
//           '巴西',
//           '日本'
//         ],
//         index:0,
//         objectArray:[
//           {
//               id:0,
//               name:'美国',
//               en:'USA'
//             },
//           {
//               id:1,
//               name:'中国',
//               en:'China'
//             },
//           {
//               id:2,
//               name:'巴西',
//               en:"Brasil"
//             },
//           {
//               id:3,
//               name:'日本',
//               en:"Japan"
//             }
//         ],
//         objectIndex:0,
//         multiArray:[
//           [
//             '无脊柱动物',
//             '脊柱动物'
//           ],
//           [
//             '扁性动物',
//             '线形动物',
//             '环节动物',
//             '软体动物',
//             '节肢动物'
//           ],
//           [
//             '猪肉绦虫',
//             '吸血虫'
//           ]
//         ],
//         multiIndex:[
//           0,
//           0,
//           0
//         ],
//         objectMultiIndex:[
//           0,
//           0,
//           0
//         ],
//         date:'2016',
//         date1:'2016-09',
//         date2:'2016-09-01',
//         time:'12:01',
//         region:[
//           "北京市",
//           "北京市",
//           "朝阳区"
//         ],
//         timeStart:'09:01',
//         timeEnd:'21:01'
//       },
//     bindPickerChange:function(e){
//       this.setData({
//         index:e.detail.value
//       })
//     },
//     bindObjectPickerChange:function(e){
//       this.setData({
//         objectIndex:e.detail.value
//       })
//     },
//     bindMultiPickerChange:function(e){
//       this.setData({
//         multiIndex:e.detail.value
//       })
//     },
//     bindMultiPickerColumnChange:function(e){
//       var data = {
//         multiArray:this.data.multiArray,
//         multiIndex:this.data.multiIndex
//       }
//           switch(e.detail.column){
//       case 0:
//         data.multiIndex[0] = e.detail.value;
//         data.multiIndex[1] = 0;
//         data.multiIndex[2] = 0;
//         data.multiArray[1] = ms[1][data.multiIndex[0]];
//         data.multiArray[2] = ms[2][data.multiIndex[0]][data.multiIndex[1]];
//         break;
//       case 1:
//         data.multiIndex[1] = e.detail.value;
//         data.multiIndex[2] = 0;
//         data.multiArray[2] = ms[2][data.multiIndex[0]][data.multiIndex[1]];
//         break;
//       case 2:
//         data.multiIndex[2] = e.detail.value;
//         break;
//     }
//       this.setData(data)
//     },
//     bindDateChange:function(e){
//       this.setData({
//         date:e.detail.value
//       })
//     },
//     bindDateChange1:function(e){
//       this.setData({
//         date1:e.detail.value
//       })
//     },
//     bindDateChange2:function(e){
//       this.setData({
//         date2:e.detail.value
//       })
//     },
//     bindTimeChange:function(e){
//       this.setData({
//         time:e.detail.value
//       })
//     },
//     bindRegionChange:function(e){
//       this.setData({
//         region:e.detail.value
//       })
//     },
//     cancel:function(){
//       console.log("取消选择并收起 picker ")
//     }
//   })

// navigator
// OnekitPage({
//     onShareAppMessage:function(){
//       return {
//         title:'navigator',
//         path:'page/component/pages/navigator/navigator'
//       }
//     }
//   })

// video
// function getRandomColor(){
//   const rgb = [
//   ]
//   for(var i = 0;i < 3;++i){
//     var color = Math.floor(Math.random() * 256).toString(16);
//     color = color.length == 1?'0' + color:color;
//     rgb.push(color);
//   }
//   return '#' + rgb.join('')
// }
// OnekitPage({
//     onReady:function(res){
//     },
//     inputValue:'',
//     data:{
//         src:'',
//         danmuList:[
//           {
//               text:'第 1s 出现的弹幕',
//               color:'#ff0000',
//               time:1
//             },
//           {
//               text:'第 3s 出现的弹幕',
//               color:'#ff00ff',
//               time:3
//             }
//         ],
//         isFullscreen:false,
//         isLoopPlay:false,
//         isShowPlayBtn:true,
//         isShowControls:true,
//         playBtnPosition:'center',
//         objectFitNum:0,
//         objectFitType:'contain',
//         poster:"https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png",
//         unitId:'hefbc5g67f9g1axb6p'
//       },
//     bindadload:function(e){
//       console.log('广告加载成功',e)
//     },
//     bindaderror:function(e){
//       console.log('广告出错',e)
//     },
//     bindadclose:function(e){
//       console.log('关闭广告',e)
//     },
//     bindadstart:function(e){
//       console.log('播放广告',e)
//     },
//     bindwaiting:function(e){
//       console.log('视频正在缓冲',e)
//     },
//     bindtimeupdate:function(e){
//     },
//     bindended:function(e){
//       console.log('视频已经播放结束',e)
//     },
//     bindpause:function(e){
//       console.log('视频暂停了',e)
//     },
//     bindplay:function(e){
//       console.log('视频开始播放了',e)
//     },
//     bindInputBlur:function(e){
//       this.inputValue = e.detail.value
//     },
//     bindButtonTap:function(){
//       var that = this
//       tt.chooseVideo({
//         sourceType:[
//           'album',
//           'camera'
//         ],
//         maxDuration:60,
//         camera:[
//           'front',
//           'back'
//         ],
//         success:function(res){
//           that.setData({
//             src:res.tempFilePath
//           })
//         }
//       })
//     },
//     videoErrorCallback:function(e){
//       console.log(e.detail.errMsg)
//     },
//     switchFullScreen:function(){
//       this.setData({
//         isFullscreen:!this.data.isFullscreen
//       })
//     },
//     switchLoopPlay:function(){
//       this.setData({
//         isLoopPlay:!this.data.isLoopPlay
//       })
//     },
//     switchPlayBtn:function(){
//       this.setData({
//         isShowPlayBtn:!this.data.isShowPlayBtn
//       })
//     },
//     switchControls:function(){
//       this.setData({
//         isShowControls:!this.data.isShowControls
//       })
//     },
//     switchPlayBtnPosition:function(){
//       console.log('switchPlayBtnPosition:',this.data.playBtnPosition)
//       this.setData({
//         playBtnPosition:this.data.playBtnPosition == 'center'?'bottom':'center'
//       })
//     },
//     switchFit:function(){
//       const objectFitEnum = [
//       'contain',
//       'fill',
//       'cover'
//     ]
//       this.setData({
//         objectFitType:objectFitEnum[this.data.objectFitNum % 3],
//         objectFitNum:this.data.objectFitNum + 1
//       })
//     }
//   })

// canvas
const app = getApp()
var canvas,gl,width,height,nativeCanvas2d,nativeCanvas2dCtx,nativeCanvasGl,nativeCanvasGlCtx
var stopAnimate = false
var animateId = -1
OnekitPage({
    data:{
        width:100,
        id:'123'
      },
    onReady:function(){
      var res = tt.getSystemInfoSync()
      this.draw_web(this.data.id)
      this.draw_native('#canvas_type_2d','2d')
    },
    onUnload:function(){
      this.cancelAnimationFrame()
    },
    draw_web:function(id){
      console.log(id)
      const ctx = tt.createCanvasContext(id)
      ctx.beginPath()
      ctx.arc(20,20,10,0,Math.PI * 2)
      ctx.rect(10,30,20,15)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(17,18,2,0,Math.PI * 2)
      ctx.arc(23,18,2,0,Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.save()
      ctx.lineWidth = 3
      ctx.moveTo(18,25)
      ctx.quadraticCurveTo(23,22,26,23)
      ctx.stroke()
      ctx.restore()
      ctx.draw()
    },
    draw_native:function(id,type){
      tt.createSelectorQuery().select(id).node().exec((res)=>{
      const canvas = res[0].node
      var ctx = canvas.getContext(type)
      this.draw_byType(ctx,type,canvas)
    })
    },
    draw_byType:function(ctx,type,canvas){
      if(type == '2d'){
      nativeCanvas2d = canvas;
      nativeCanvas2dCtx = ctx;
      this.draw_native_2d(0,0,50,50);
      this.draw_native_2d1(50,50,50,50);
    } else {
      nativeCanvasGl = canvas;
      nativeCanvasGlCtx = ctx;
      this.draw_native_gl(1,0,1,1);
    }
    },
    draw_native_2d:function(x,y,width,height){
      var that = this
      var num = nativeCanvas2d.requestAnimationFrame(function(){
      nativeCanvas2dCtx.fillStyle = 'red'
      nativeCanvas2dCtx.fillRect(x,y,width,height)
    })
    },
    draw_native_2d1:function(x,y,width,height){
      var that = this
      var num = nativeCanvas2d.requestAnimationFrame(function(){
      nativeCanvas2dCtx.fillStyle = 'red'
      nativeCanvas2dCtx.fillRect(x,y,width,height)
    })
    },
    draw_native_gl:function(r,g,b,a){
      var that = this
      nativeCanvasGl.requestAnimationFrame(function(){
      nativeCanvasGlCtx.clearColor(r,g,b,a)
      nativeCanvasGlCtx.clear(nativeCanvasGlCtx.COLOR_BUFFER_BIT)
    })
    },
    drawGl:function(e){
      gl = canvas.getContext('webgl',{
        alpha:true
      })
      gl.clearColor(0.0,0.3,0.0,1.0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      this.cancelAnimationFrame()
    },
    cancelAnimationFrame:function(){
      if(!stopAnimate){
      stopAnimate = true;
      canvas.cancelAnimationFrame(animateId);
    }
    },
    testBindtouchstart:function(e){
      console.log('--- mytouchstart',e)
    },
    testBindtouchmove:function(e){
      console.log('--- mytouchmove',e)
    },
    testBindtouchend:function(e){
      console.log('--- mytouchend',e)
    },
    testBindtouchcancel:function(e){
      console.log(e)
    },
    testBinderror:function(e){
      console.log('==== canvas err',e)
    }
  })