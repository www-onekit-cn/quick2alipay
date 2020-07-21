Component({
  mixins: [],
  data: {},
  props: {
    text: "",
    direction: "",
    scrollamount: 6,
    loop: 0,
  },
  didMount() {
    var that = this;
      var length = that.data.text.length * that.data.size;
      var windowWidth = my.getSystemInfoSync().windowWidth
      that.setData({
        length: length,
        windowWidth: windowWidth
      });
      that._scrolling();
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    _scrolling: function () {
      var that = this;
      var timer = setInterval(() => {
        if (-that.data.marqueeDistance < that.data.length) {
          that.setData({
            marqueeDistance: that.data.marqueeDistance - that.data.marqueePace
          })
        } else {
          clearInterval(timer);
          that.setData({
            marqueeDistance: that.data.windowWidth
          });
          that._scrolling();
        }
      }, that.properties.scrollamount);
    }
  },
});
