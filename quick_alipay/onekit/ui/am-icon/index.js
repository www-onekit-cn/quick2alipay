import fmtUnit from "../../lib/fmtUnit";
Component({
  props: {
    type: '',
    size: fmtUnit(17),
    color: '',
    className: ''
  },
  data: {
    valueUnit: fmtUnit('px')
  }
});