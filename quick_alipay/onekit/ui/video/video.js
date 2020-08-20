Component({
  mixins: [],
  data: {},
  props: {
    onekitClass:'',
    onekitStyle:'',
    onekitId:'',
    src:"",
    autoplay:true,
    poster:"",
    controls:true,
    muted:false,
    direction:"",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
      video_start(e) {
        if (this.props.onPlay) {
          this.props.onPlay({
            
          })
        }
      },
      video_pause(e) {
        if (this.props.onPause) {
          this.props.onPause({})
        }
      },
      video_finish(e) {
        if (this.props.onEnded) {
          this.props.onEnded({})
        }
      },
      video_timeupdate(e) {
        if (this.props.onTimeUpdate) {
          this.props.onTimeUpdate({})
        }
      },
      video_fullscreenchange(e) {
        if (this.props.onFullScreenChange) {
          this.props.onFullScreenChange({})
        }
      },
      video_error(e) {
        if (this.props.onError) {
          this.props.onError({})
        }
      },


  },
});
