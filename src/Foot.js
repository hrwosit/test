import Footer from 'rc-footer';
import React from 'react';
import { Text, View, Image } from "react-native";

import 'rc-footer/assets/index.css'; 
import img from '../assets/img.png';
// import 'rc-footer/asssets/index.less';
// import { render } from 'react-dom';
//  import _default from 'react-navigation-stack/lib/src/vendor/utils/HeaderHeightContext';
class Foot extends React.Component {
render(){
    return (
  <Footer
    columns={[

      {
        icon: (
          <Image source={img} style={{width: 228, height:68 ,alignSelf:'flex-end' }} />    
        ),
        title: 'contact us',
        url: 'https://yuque.com',
        description: 'kjsdk',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ "
  />
    );
}
}
export default  Foot;