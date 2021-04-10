import React from 'react';
import './home.css'


const Home = () => {
    return (
        <div className="homebody">
                <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="title-main" href="">REimagine </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Login</a>
                                </li>
                            </ul>
    
                        </div>
                    </div>
                </nav>
                <div className="content">
                   <div className="description">Topolytics is a data analytics business that is making the world’s waste Visible, Verifiable and Valuable

Our platform WasteMap helps waste producers, the waste and recycling industry, investors and regulators to gain key insights into material types, amounts, concentrations, fates and their movements through the waste system.

By ingesting, aggregating and analysing data at scale, the resulting live insights generate commercial and environmental value for all players in the waste materials and by-products supply chain.</div>
               

                </div>
                 <div className="btn">
                <button>Get Started</button>
                <br/>
            </div>
           
            </div>
           
    );
}

export default Home;
