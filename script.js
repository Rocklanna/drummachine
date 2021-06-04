const { applyMiddleware, createStore, combineReducers, bindActionCreators } = Redux;
const { Provider, connect } = ReactRedux;

const noteSelect = {

  Q: {
    left: ['Do Note', 'https://freesound.org/data/previews/316/316899_5385832-lq.mp3'],
    right: ['Re Note', 'https://freesound.org/data/previews/316/316908_5385832-lq.mp3'] },

  W: {
    left: ['Mi Note', 'https://freesound.org/data/previews/316/316906_5385832-lq.mp3'],
    right: ['Fa Note', 'https://freesound.org/data/previews/316/316904_5385832-lq.mp3'] },

  E: {
    left: ['So Note', 'https://freesound.org/data/previews/316/316912_5385832-lq.mp3'],
    right: ['La Note', 'https://freesound.org/data/previews/316/316902_5385832-lq.mp3'] },

  A: {
    left: ['Ti Note', 'https://freesound.org/data/previews/44/44936_29541-lq.mp3'],
    right: ['Dodo Note', 'https://freesound.org/data/previews/316/316901_5385832-lq.mp3'] },

  S: {
    left: ['Ti Note', 'https://freesound.org/data/previews/44/44936_29541-lq.mp3'],
    right: ['Dodo Note', 'https://freesound.org/data/previews/316/316901_5385832-lq.mp3'] },

  D: {
    left: ['Ti Note', 'https://freesound.org/data/previews/44/44936_29541-lq.mp3'],
    right: ['Dodo Note', 'https://freesound.org/data/previews/316/316901_5385832-lq.mp3'] },

  Z: {
    left: ['Ti Note', 'https://freesound.org/data/previews/44/44936_29541-lq.mp3'],
    right: ['Dodo Note', 'https://freesound.org/data/previews/316/316901_5385832-lq.mp3'] },

  X: {
    left: ['Ti Note', 'https://freesound.org/data/previews/44/44936_29541-lq.mp3'],
    right: ['Dodo Note', 'https://freesound.org/data/previews/316/316901_5385832-lq.mp3'] },

  C: {
    left: ['Ti Note', 'https://freesound.org/data/previews/44/44936_29541-lq.mp3'],
    right: ['Dodo Note', 'https://freesound.org/data/previews/316/316901_5385832-lq.mp3'] } };





//Redux

const stat = 'newStatus';
const defaultState = {
  power: 'off' };


const creator = status => {
  return {
    type: stat,
    changeStat: status };

};

const reducer = (defaultState, action) => {
  switch (action.type) {
    case 'newStatus':
      return {
        power: action.changeStat };

    default:
      return defaultState;}

};

const store = Redux.createStore(reducer);


//React

class AudioPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      powerState: 'true',
      bankState: 'right',
      drumNote: '',
      soundPick: '' };

    this.drumKeys = React.createRef();
    this.powerStatus = this.powerStatus.bind(this);
    this.playSound = this.playSound.bind(this);
    this.bankStatus = this.bankStatus.bind(this);
    this.keySound = this.keySound.bind(this);
  } // end of constructor

  componentDidMount() {
    this.drumKeys.current.focus();
  }

  async playSound(keySelect) {
    if (this.state.powerState) {
      var note = typeof keySelect === 'string' ? keySelect : event.target.querySelector('audio').id;
      await this.setState({
        drumNote: noteSelect[note][this.state.bankState][0],
        soundPick: noteSelect[note][this.state.bankState][1] },

      () => {
        var playNote = document.getElementById(note);
        playNote.load();
        playNote.play();
      } // end of callback function
      );
    } //end of If
  } // end of playSound  

  async keySound(event) {
    const charCode = event.keyCode || event.which;
    const charKey = String.fromCharCode(charCode).toUpperCase();
    const charIdKey = charKey + "notes";
    //alert(charIdKey);
    document.getElementById(charIdKey).focus();
    this.playSound(charKey);
  }




  async powerStatus() {
    var whatPower = document.getElementById("powerSwitch").checked;
    await this.setState({
      powerState: whatPower });

  } // end of powerStatus

  async bankStatus() {
    var whatBank = document.getElementById("bankSwitch").checked;
    if (whatBank) {
      await this.setState({
        bankState: 'right' });

    } //end of if
    else {
        await this.setState({
          bankState: 'left' });

      } //end of else
  } //bankStatus function



  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "drumBoard" }, /*#__PURE__*/
      React.createElement("div", { id: "pads", ref: this.drumKeys, tabIndex: "0", onKeyPress: this.keySound }, /*#__PURE__*/
      React.createElement("div", { className: "rows" }, /*#__PURE__*/

      React.createElement("button", { id: "Qnotes", className: "drum-pad", onClick: this.playSound, onKeyPress: this.keySound }, "Q", /*#__PURE__*/
      React.createElement("audio", { src: this.state.soundPick, className: "clip", id: "Q" })), /*#__PURE__*/

      React.createElement("button", { id: "Wnotes", className: "drum-pad", onClick: this.playSound, onKeyPress: this.keySound }, "W", /*#__PURE__*/
      React.createElement("audio", { src: this.state.soundPick, className: "clip", id: "W" })), /*#__PURE__*/

      React.createElement("button", { id: "Enotes", className: "drum-pad", onClick: this.playSound, onKeyPress: this.keySound }, "E", /*#__PURE__*/
      React.createElement("audio", { src: this.state.soundPick, className: "clip", id: "E" }))), /*#__PURE__*/


      React.createElement("div", { className: "rows" }, /*#__PURE__*/
      React.createElement("button", { id: "Anotes", className: "drum-pad", onClick: this.playSound, onKeyPress: this.keySound }, "A", /*#__PURE__*/
      React.createElement("audio", { src: this.state.soundPick, className: "clip", id: "A" })), /*#__PURE__*/

      React.createElement("button", { id: "Snotes", className: "drum-pad", onClick: this.playSound, onKeyPress: this.keySound }, "S", /*#__PURE__*/
      React.createElement("audio", { src: this.state.soundPick, className: "clip", id: "S" })), /*#__PURE__*/

      React.createElement("button", { id: "Dnotes", className: "drum-pad", onClick: this.playSound, onKeyPress: this.keySound }, "D", /*#__PURE__*/
      React.createElement("audio", { src: this.state.soundPick, className: "clip", id: "D" }))), /*#__PURE__*/


      React.createElement("div", { className: "rows" }, /*#__PURE__*/
      React.createElement("button", { id: "Znotes", className: "drum-pad", onClick: this.playSound, onKeyPress: this.keySound }, "Z", /*#__PURE__*/
      React.createElement("audio", { src: this.state.soundPick, className: "clip", id: "Z" })), /*#__PURE__*/

      React.createElement("button", { id: "Xnotes", className: "drum-pad", onClick: this.playSound, onKeyPress: this.keySound }, "X", /*#__PURE__*/
      React.createElement("audio", { src: this.state.soundPick, className: "clip", id: "X" })), /*#__PURE__*/

      React.createElement("button", { id: "Cnotes", className: "drum-pad", onClick: this.playSound, onKeyPress: this.keySound }, "C", /*#__PURE__*/
      React.createElement("audio", { src: this.state.soundPick, className: "clip", id: "C" })))), /*#__PURE__*/



      React.createElement("div", { id: "controls" }, /*#__PURE__*/
      React.createElement("div", { id: "power" }, /*#__PURE__*/
      React.createElement("div", { className: "custom-control custom-switch" }, /*#__PURE__*/
      React.createElement("input", { type: "checkbox", className: "custom-control-input", id: "powerSwitch", onClick: this.powerStatus, defaultChecked: this.state.powerState }), /*#__PURE__*/
      React.createElement("label", { className: "custom-control-label", for: "powerSwitch" }, "Power"))), /*#__PURE__*/


      React.createElement("div", { id: "display", dangerouslySetInnerHTML: { __html: this.state.drumNote } }), /*#__PURE__*/
      React.createElement("div", { id: "volume" }, /*#__PURE__*/
      React.createElement("label", { for: "customRange1" }), /*#__PURE__*/
      React.createElement("input", { type: "range", className: "custom-range", id: "customRange1" })), /*#__PURE__*/

      React.createElement("div", { id: "bank" }, /*#__PURE__*/
      React.createElement("div", { className: "custom-control custom-switch" }, /*#__PURE__*/
      React.createElement("input", { type: "checkbox", className: "custom-control-input", id: "bankSwitch", onClick: this.bankStatus, defaultChecked: this.state.bankState }), /*#__PURE__*/
      React.createElement("label", { className: "custom-control-label", for: "bankSwitch" }, "Bank")))))));







    // return
  } //end of render
}
//ReactRedux

const mapStateToProps = state => {
  return {
    theState: state };

};

const mapDispatchToProps = dispatch => {
  return {
    powerStat: power => {
      dispatch(creator(power));
    } };

};

const Container = connect(mapStateToProps, mapDispatchToProps)(AudioPlay);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement(Provider, { store: store }, /*#__PURE__*/
      React.createElement(Container, null)));


  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(AppWrapper, null), document.getElementById('app'));