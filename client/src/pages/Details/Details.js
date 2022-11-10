import React from "react";
import './Details.css';
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
const Details = () => {
  return (
    <div>
    <nav id="topbar">
      <span style= {{
marginRight: 0.25+"rem"
      }}
      >
        <a
          href="https://www.comp.nus.edu.sg/~stevenha"
          // style="text-decoration: none; color: white"
        >
        </a>
        <a
          href="https://visualgo.net"
          style= {{
            fontSize: " 20px",
            marginLeft: "4px"
          }}

        >
          <img className="logo" src="/Home/logo.png" alt="logo" />
        </a>
      </span>
      <div className="tab">
        <button className="tablinks" >Insert</button>
        <button className="tablinks"  >Delete</button>
        <button className="tablinks"  >Search</button>
      </div>
      <br/>
      <div className="content" style={{width:100+"%"}}>
        <div id="Insert" className="tabcontent">
          </div>
          
          <div id="Delete" className="tabcontent">
          </div>
          
          <div id="Search" className="tabcontent">
          </div>
      </div>
      
      </nav>
    </div>
  );
};
export default Details;
