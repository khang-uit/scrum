import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css";
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
function ShareLink() {  navigator.clipboard.writeText(document.location.href);
  alert('Copied link!')
}
const Details = () => {
  const [content, setContent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getContent = async () => {
      const contentData = await axios.post(
        "http://localhost:5000/api/content/get",
        { id }
      );
      setContent(contentData.data.content);
    };
    getContent();
  }, []);
  return (
    <div>
      <nav id="topbar">
        <span
          style={{
            marginRight: 0.25 + "rem",
          }}
        >
          <a
            href="https://www.comp.nus.edu.sg/~stevenha"
            // style="text-decoration: none; color: white"
          ></a>
          <a
            href="/"
            style={{
              fontSize: " 20px",
              marginLeft: "4px",
            }}
          >
            <img className="logo" src="/Home/logo.png" alt="logo" />
          </a>
        </span>
        <div className="tab">
          <button className="tablinks">Insert</button>
          <button className="tablinks">Delete</button>
          <button className="tablinks">Search</button>
        </div>
        <br />
        <div className="button-link">
          <button style={{ fontWeight: 700 }} onClick={ShareLink}>SHARE</button>
        </div>
        <div className="content" style={{ width: 100 + "%" }}>
          <div id="Insert" className="tabcontent"></div>

          <div id="Delete" className="tabcontent"></div>

          <div id="Search" className="tabcontent"></div>
        </div>
      </nav>
      <div className="body">
        <img src={content.thumb} />
        <h1>{content.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.postContent }} />
      </div>
    </div>
  );
};
export default Details;
