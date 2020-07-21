import router from "../../../onekit/api/system/router"
Component({
  mixins: [],
  data: {
    params:{}
  },
  props: {
    href:"",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    a_bindtap(e){
      router.push({
        uri: this.props.href,
        params:this.data.params
      })
    }
  },
});
