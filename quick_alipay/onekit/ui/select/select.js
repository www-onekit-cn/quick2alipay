Component({
  mixins: [],
  data: {
    onekitClass:'',
    onekitStyle:'',
    onekitId:'',
    show:false
  },
  props: {
    onekitClass:"",
    onekitStyle:""
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
