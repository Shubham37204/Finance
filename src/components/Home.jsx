import React from 'react'
import p1 from "../image/p1.jpg"
import "../css/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="image">
                        <img src={p1} alt="" />
                    </div>
                </div>
            </div>

            <div className="container-fluid upper">
                <div className="row niche">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col ">
                            <div class="card size bgc">
                                <FontAwesomeIcon icon="fa-solid fa-paper-plane" style={{ color: "#4d8eff", }} />
                                <div class="card-body">
                                    <h5 class="card-title middle">BRANDING</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card size">
                                <div class="card-body">
                                    <h5 class="card-title extra">Who We Are</h5>
                                    <p class="card-text para">We specialize in helping our clients create and run successful, well-organized, and prosperous businesses</p>
                                    <button type="button" class="btn btn-primary blue">Contact Us</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card size bgc1">
                                <div class="card-body">
                                    <h5 class="card-title middle">CONSULTING</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card size bgc2">
                                <div class="card-body">
                                    <h5 class="card-title  middle">STRATEGY</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card size bgc3">
                                <div class="card-body">
                                    <h5 class="card-title  middle">DEVELOPMENT</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card size bgc2">
                                <div class="card-body">
                                    <h5 class="card-title  middle">FINANCE</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
