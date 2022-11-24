

import{ BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Lab2 from './lab2';
import Assignment from './assignment';
import Card from './card';
import Lab from './lab';
import Linked from './link';
import Login from './login';
import Result from './result';
import Stdform from './studentform';
import Check2 from './check2';

import Fifa from './mids/fifa';
import Middlesection from './mids/middlesection';
import Mainfunction from './mids/mainmids';
import Footer from './mids/footer';
import Middlebotttom from './mids/middlesectionbottom';
import Submenu from './mids/submenu';






function App() {

  return (
    <div>
      {<Mainfunction/>}
   
      {/* <Fifa/> */}
      {/* <Test4/>
    <Routes>
      <Route path='/test' element={<Test2/>}></Route>
    </Routes> */}
    </div>



  
   
  );
}

export default App;
