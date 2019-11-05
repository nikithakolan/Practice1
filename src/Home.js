import React from 'react';

import { shallow } from 'enzyme';



describe('./Home', () => {
    it('should render correctly in "debug" mode', () => {
      const component = shallow(<Home debug />);
    
      expect(component).toMatchSnapshot();
    });
  });
  


function Home(){
return(
    <div>
       <div className="login-form">  
     <input type="text" placeholder="email"/>< br/>
      <input type="password" placeholder="password"/>< br/>
      <button>LOGIN</button>
    </div>
    </div>
)
}
export default Home;