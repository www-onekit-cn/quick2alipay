
import prompt from "../../onekit/api/system/prompt"
Page({
  data: {
     componentName: 'list',
      loadMore: true,
      listAdd: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      listData: [],
      scrollPage: false,
      showListBtn: true,
      listClass: 'selected',
      arrayClass: '',
      columnsNum: 3,
      columnsNumNew: 0
  },
  onLoad() {},
   onInit() {
      this.$page.setTitleBar({ text: 'List' })
      // 初始化列表数据
      this.listData = [].concat(this.listAdd)
      this.$page.setTitleBar({ text: 'List' })
    },
    showListMethod() {
      if (!this.showListBtn) {
        this.showListBtn = true
        this.listClass = 'selected'
        this.arrayClass = ''
      }
    },
    showArrayMethod() {
      if (this.showListBtn) {
        this.showListBtn = false
        this.listClass = ''
        this.arrayClass = 'selected'
      }
    },
    scrollbottom() {
      // 加载下一页
      const self = this
      const renderData = [].concat(self.listData, self.listAdd)
      setTimeout(function () {
        self.listData = renderData
      }, 1000)
    },
    handleScroll(param) {
      if (param.scrollState === 0) {
        console.info(`### handleScroll ### scrollState: ${param.scrollState}, scrollX: ${param.scrollX}, scrollY: ${param.scrollY}`)
      }
    },
    writeCloumnsNum(e) {
      // 写入新的list行数
      this.columnsNumNew = e.text || 0
    },
    setCloumnsNum() {
      // 设置新的list行数
      if (this.columnsNumNew && this.columnsNumNew != this.columnsNum) {
        this.goIndex()
        this.columnsNum = this.columnsNumNew
      }
      this.$element('columns').focus({ focus: false })
    },
    switchScrollMode() {
      // 改变list滚动模式
      this.goIndex()
      this.scrollPage = !this.scrollPage
    },
    goIndex() {
      this.$element('list').scrollTo({ index: 0 })
    },
    clickPush() {
      this.listData.push('push')
      prompt.showToast({
        message: '向数组的末尾添加一个"push"元素'
      })
    },
    clickPop() {
      prompt.showToast({
        message: '删除数组的最后一个元素' + JSON.stringify(this.listData.pop())
      })
    },
    clickShift() {
      prompt.showToast({
        message: '删除数组的第一个元素' + JSON.stringify(this.listData.shift())
      })
    },
    clickUnshift() {
      this.listData.unshift('unshift')
      prompt.showToast({
        message: '向数组的开头添加一个"unshift"元素'
      })
    },
    clickSplice() {
      prompt.showToast({
        message: '删除第一个元素' + JSON.stringify(this.listData.splice(0, 1, 'splice')[0]) + '，并添加一个"splice元素"'
      })
    },
    clickSort() {
      this.listData.sort()
      prompt.showToast({
        message: 'sort'
      })
    },
    clickReverse() {
      this.listData.reverse()
      prompt.showToast({
        message: 'reverse'
      })
    },
    scrolltouchup() {
      prompt.showToast({
        message: 'touch up'
      })
    },
    scrollend() {
      prompt.showToast({
        message: 'scroll end'
      })
    }
});
