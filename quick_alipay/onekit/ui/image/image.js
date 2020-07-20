Component({
  mixins: [],
  data: {
    width: 0,
    height: 0,
  },
  props: {
    src:'',
    mode:'scaleToFill'
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    // 自定义方法
    image_load: function (e) {
      var width = e.detail.width;
      var height = e.detail.height;
      this.setData({ width, height });
    }
  },

});
