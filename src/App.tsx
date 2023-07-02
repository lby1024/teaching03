import XHeader from './component/header';
import XContainer from './component/container';
import Body from './component/body';

function App() {

  return (
    <XContainer
      header={<XHeader>智学通教学评一体数字化平台</XHeader>}
      body={<Body />}
    />
  );
}

export default App;
