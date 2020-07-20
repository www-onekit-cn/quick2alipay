Page({
  data: {
    // nodes: [{
    //   name: 'div',
    //   attrs: {
    //     class: 'wrapper',
    //     style: 'color: orange;',
    //   },
    //   children: [{
    //     type: 'text',
    //     text: 'Hello&nbsp;World!',
    //   }],
    // }],
    componentName: 'richtext',
      content: `<div class="item-content"  style="background-color: #FFFFFF">
        <style>h1{color: yellow;}</style>
        <p class="item-title">h1</p>
        <h1 style="color: yellow;">文本测试</h1>
        <p class="item-title">h2</p>
        <h2>文本测试</h2>
        <p class="item-title">h3</p>
        <h3>文本测试</h3>
        <p class="item-title">h4</p>
        <h4>文本测试</h4>
        <p class="item-title">h5</p>
        <h5>文本测试</h5>
        <p class="item-title">h6</p>
        <h6>文本测试</h6>
        <p class="item-title">a</p>
        <div>
          <a href="https://www.quickapp.cn/" style="color: #09ba07;text-decoration: underline">文本测试</a>
        </div>
        <p class="item-title">img</p>
        <div>
         <img src="snapshot.png" style="width: 100%; border: 2rpx solid red"/>
        </div>
        <p class="item-title">p</p>
        <p>文本测试</p>
        <p class="item-title">span</p>
        <p><span>文本测试</span></p>
        <p class="item-title">strong</p>
        <p><strong>文本测试</strong></p>
        <p class="item-title">del</p>
        <p><del>文本测试</del></p>
        <p class="item-title">b</p>
        <p><b>文本测试</b></p>
        <p class="item-title">i</p>
        <p><i>文本测试</i></p>
      </div>`
  },
  onLoad() {},
  onInit () {
      this.$page.setTitleBar({text: 'richtext'})
    }
    
});
