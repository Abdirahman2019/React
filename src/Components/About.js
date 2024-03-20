// About.js
import React from 'react';

//const About = () => {
  //return <div>About Page</div>;
//};
class About extends React.Component{
  render(){
    return(
      <div>
      <div>
        <h1>"About Our Company"</h1>
        <p>Our Company is one of the best and realistic compnay in the current market.</p>
        <p>we provide various range of services,</p><p>our style is unique and our talented team will
          make you smile,</p><p>our product have been tested and tried all over the country.</p>
      </div>
      <div>
        <h1>"Vision"</h1>
        <article>To be the best Company in the market.</article>
      </div>
      <div>
      <h1>"Mission"</h1>
      <p>we are your hope in this journey,we will not letf you behind and together we can achieved great things.</p>
    </div>
    </div>

    );
  }
}
class Second extends React.Component{
  render(){
    return (
      <div>your all welcome our dear customer!!!</div>
    );
  }
}
export default About;