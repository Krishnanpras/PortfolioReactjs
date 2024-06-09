import React from 'react';
import './work.css'
function WorkSection() {
  return (
    <div className='whole'>
      <div class="title reveal">
        <h2 class="section-title">Projects</h2>
      </div>
    <div className="imagecontainer" style={{display:"flex",flexWrap:'wrap',gap:"50px",justifyContent:"center",marginTop:"20px", background: "#fff"}}>
    <div className="box">
      <img  src="images/Project1.png" alt="" />
      <h3 style={{textAlign:"center"}}>SHOPPING</h3>
  
      <h5 style={{textAlign:"center",marginTop:"10px"}}>Tech used <br />  <span style={{color:"blue"}}>Html,CSS,ReactJs</span>      </h5>
      <div className="buttons">
        <div>
      <a href="https://shoppyreactjs.netlify.app"><button>Show Live</button></a>    
        </div>
        <div>
       <a href="https://github.com/Krishnanpras/ShoppyReactjs"><button>Github</button></a>   
        </div>
      </div>
    </div>
    <div className="box">
    <img style={{}} src="images/project2.png" alt="" />
      <h3 style={{textAlign:"center"}}>CRYPTO DASHBOARD</h3>
      <h5 style={{textAlign:"center",marginTop:"10px"}}>Tech used  <br /><span style={{color:"blue"}}>Html,CSS,Reactjs,Nodejs,Api's</span>      </h5>
     
      <div className="buttons">
        <div>
        <a href="https://livecryptodashboard.netlify.app"><button>Show Live</button></a>  
        </div>
        <div>
       <a href="https://github.com/Krishnanpras/Reactjs-ApiCRYPTODASHBOARD"><button>Github</button></a>   
        </div>
      </div>
    </div>

    <div className="box">
    <img style={{}} src="images/project3.png" alt="" />
      <h3 style={{textAlign:"center"}}>Image Traverse</h3>
      <h5 style={{textAlign:"center",marginTop:"10px"}}>Tech used  <br /><span style={{color:"blue"}}>Html,CSS,Javascript,Api's</span>      </h5>
     
      <div className="buttons">
        <div>
         <a href="https://imagegalleryhtmlcssjs.netlify.app/"><button>Show Live</button></a> 
        </div>
        <div>
        <a href="https://github.com/Krishnanpras/HTML_CSS_JS_Image_Gallery"><button>Github</button></a> 
        </div>
      </div>
    </div>
    

    <div className="box">
    <img style={{}} src="images/project4.png" alt="" />
      <h3 style={{textAlign:"center"}}>IP Address Tracking</h3>
      <h5 style={{textAlign:"center",marginTop:"10px"}}>Tech used  <br /><span style={{color:"blue"}}>Html,CSS,Javascript,Api's</span>      </h5>
     
      <div className="buttons">
        <div>
         <a href="https://ipaddresstracking12.netlify.app"><button>Show Live</button></a> 
        </div>
        <div>
        <a href="https://github.com/Krishnanpras/IP-addressTracking"><button>Github</button></a> 
        </div>
      </div>
    </div>


    <div className="box">
    <img style={{}} src="images/pro5.png" alt="" />
      <h3 style={{textAlign:"center"}}>Rest Countries Api</h3>
      <h5 style={{textAlign:"center",marginTop:"10px"}}>Tech used  <br /><span style={{color:"blue"}}>Html,CSS,Javascript,Api's</span>      </h5>
     
      <div className="buttons">
        <div>
         <a href="https://restcountriesapi11.netlify.app/"><button>Show Live</button></a> 
        </div>
        <div>
        <a href="https://github.com/Krishnanpras/Rest-Countries-API"><button>Github</button></a> 
        </div>
      </div>
    </div>

   <br />
   
  </div></div>
    
  );
}

export default WorkSection;
