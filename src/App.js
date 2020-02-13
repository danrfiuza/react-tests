import React, {
  Component
} from 'react';
// import logo from './logo.svg';
import './App.css';

import InputComponent from './Components/InputComponent';
import TextComponent from './Components/TextComponent';
import ButtonComponent from './Components/ButtonComponent';
import { ToggleDrawer } from './Components/ToggleDrawer';
import ListaTimesComponent from './Components/CampeonatoComponent/ListaTimesComponent';

import PComponent from './Components/hoc/PComponent'
import AutoFocusTextInput from './Components/refs/AutoFocusTextInput'
import CheckedInput from './Components/refs/CheckedInput'
import UserForm from './Components/formikTest/UserForm'
import StepForm from './Components/steps/StepForm'

import ROUTES, {
  RenderRoutes,
  displayRouteMenu
} from './routes'

const mock = require('./mock.json');


class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      open: false,
      times: mock.times,
      jogadores: mock.jogadores,
      banco: [],
      campeonato: []
    };
  }

 handleChange = (value) => {
   this.setState({value});
 }

  handleToggleDrawer = () => {
    this.setState({ open: !this.state.open });
 }
  
  render () {
      return (
    <div className="App">
      <InputComponent onValueChange={this.handleChange} />
      <TextComponent value={this.state.value}/>
      <ButtonComponent text='Click me!' handleClick={this.handleToggleDrawer}/>
      <ToggleDrawer open={this.state.open} />
      <ListaTimesComponent list={this.state.times} />
      <PComponent text={this.state.value} />
      <AutoFocusTextInput />
      <CheckedInput />
      <RenderRoutes routes={ROUTES} />
      <UserForm />
      <StepForm/>
    </div>
  );
  }
}

export default App;
