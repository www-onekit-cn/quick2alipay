Component({
  mixins: [],
  data: {
    show:false
  },
  props: {
    Class:"",
    Style:""
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    select_click(e) {
        if (this.props.onTap) {
          this.props.onPlay({
          })
        }
      },
  },
});
