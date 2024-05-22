import XHeader from './component/header';
import XContainer from './component/container';
import Body from './component/body';

function App() {

  return (
    <XContainer
      header={<XHeader>无人驾驶列车故障数智化处理</XHeader>}
      body={<Body />}
    />
  );
}

export default App;
