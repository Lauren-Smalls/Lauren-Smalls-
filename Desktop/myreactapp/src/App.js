import backgroundimage from ".images/bg-intro-desktop.png";
import mobileimage from ".images/bg-intro-mobile.png";
import './App.css';

function App() {

  return (      
    <>

    <head>
      <title>Week 5 Assessment 2 ReactJs</title>
      <link rel="stylesheet" href="Assessment2"/>
      <meta name="viewport" content="width-device-width, intial-scale-1.0"/>
    </head>

    <body>
<div className="container"/>
    
    
    <div className="right_section"/>
    
        <h1 className="headerliner"/>
          Learn to code by watching others
  
        <br />
        <h3 className="description">
          See how experienced developers solve problems in real-time. Watching tutorials is great, 
          but understanding how developers think is invaluable.
        </h3>
 
  
    <div className="left_section"/>
      <div className="left_section_wrapper"/>
        <div className="bluebox"/>
  
          <span className="box-highlight">
            Try it free for 7 days!
          </span>
          <span className="box-text">
            *$20/month thereafter.
          </span>
        
        <div className="form"/>
          <form autocomplete="on"/>
            <input type="text" className="first-name" placeholder="First Name" autocomplete="on"/>
            <input type="text" className="last-name" placeholder="Last Name"/>
            <input type="email" className="email" placeholder="Email Address"/>
            <input type="password" className="password" placeholder="Password"/>
            <button className="form-button">
              <span className="form-button-text">CLAIM YOUR FREE TRIAL</span>
            </button>
            <p className="terms"/>
              By clicking the button, you are agreeing to our
              <span className="terms-services">
                Terms and Services
              </span>
          </body>
      </>
    
  );
}

export default App;
