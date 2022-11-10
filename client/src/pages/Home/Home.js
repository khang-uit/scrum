import React from "react";
import './Home.css';


const Home = () => {
  return (
    <div>
    <nav id="topbar">
        
        <span style={{marginRight: 0.25+ 'rem'}}>
        <a href="index.html">
            <img class="nav-logo" src="/Home/logo.png" alt=""/>
        </a>
        <a href="index.html" style={{fontFamily: 'SilkscreenNormal,sans-serif', fontSize: 20+ 'px', marginLeft: 4+ 'px'}}>      
        </a>
        </span>
        <span style={{maxHeight: 30+'px'}}>
        </span>
        <span style={{maxHeight: 30+'px', backgroundColor:'rgb(0,0,0)', color: 'white', marginLeft: 'auto'}}>
        </span>
    </nav>
    <div id="head-content-container" style={{flex: 1}}>
        <img src="/Home/logo.png" class="head-logo" alt=""/>
        <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search"/>
              <button type="submit"><i class="search-btn fa fa-search"></i></button>
            </form>
        </div>
      <br/>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6 grid">
                <div class="gridCustom">
                    <div class="card">
                        <a href="index.html">
                            <div class="img-wrapper">
                                <img src="/Home/heap.gif" class="d-block w-100" alt="..."/>
                            </div>
                        </a>
                            <a href="index.html" class="card-title">Selection Sort</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 grid">
                <div class="gridCustom">
                    <div class="card">
                        <a href="index.html">
                            <div class="img-wrapper">
                                <img src="/Home/sorting.gif" class="d-block w-100" alt="..."/>
                            </div>
                        </a>
                            <a href="index.html" class="card-title">Selection Sort</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 grid">
                <div class="gridCustom">
                    <div class="card">
                        <a href="index.html">
                            <div class="img-wrapper">
                                <img src="/Home/graph.gif" class="d-block w-100" alt="..."/>
                            </div>
                        </a>
                            <a href="index.html" class="card-title">Heap Sort</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 grid">
                <div class="gridCustom">
                    <div class="card">
                        <a href="/">
                            <div class="img-wrapper">
                                <img src="/Home/fenwick.gif" class="d-block w-100" alt="..."/>
                            </div>
                        </a>
                            <a href="index.html" class="card-title">Graph Sort</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};
export default Home;
