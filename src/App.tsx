import XHeader from './component/header';
import XContainer from './component/container';
import Body from './component/body';

function App() {

  return (
    <XContainer
      header={<XHeader>育匠通数智教学平台</XHeader>}
      body={<Body />}
    />
  );
}

export default App;
