import { useState } from "react";
import React from "react";
//import { Image } from "react-bootstrap";
import "./About.css";
import "./Home.css"
<style> 
    alert(" welcome ");
</style>

const Menu = () =>{

        // forom her chat gpt function for the view more start
    const [showInfo, setShowInfo] = useState(false);

    // Function to toggle the state when the "View" button is clicked
    const toggleInfo = () => {
      setShowInfo(!showInfo);
    };
  // here it ends  
    return(
        <><div className="back2 vh-100">
        <h1 class="text-center">Our other Top  hit Recipies </h1><br/>

        <div class="container">
    <div class="row mt-3 px-2">
        <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://th.bing.com/th/id/OIP.J1z1rfZEnkmSNj4XYCcX1QHaEK?pid=ImgDet&rs=1" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Paneer Gheeroast</h4></div>
                   
                    <button class="btn btn-outline-success btn-sm" >view now</button>
                </div>
            </div>
            

            {showInfo && (
                <div className="card mt-3">
                  <div className="card-body">
                    <h5 className="card-title">Additional Information</h5>
                    <p className="card-text">
                      Indegriendts:
                      <li></li>
                    </p>
                  </div>
                </div>
              )}
        </div>

        <div class="col-md-4">
            <div class="card bg-warning-subtle">
            <img src="https://i1.wp.com/cookingfromheart.com/wp-content/uploads/2017/07/Mushroom-Manchurian-7.jpg?resize=1024%2C683&ssl=1" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Mushroom Manchurian </h4></div>
                    
                    <button class="btn btn-outline-success btn-sm">View now</button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-danger-subtle">
            <img src="https://th.bing.com/th/id/OIP.Idsom9sMhdi8nlWOud_qkAAAAA?pid=ImgDet&w=474&h=355&rs=1" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Sev Puri</h4></div>
                   
                    <button class="btn btn-outline-success btn-sm">view Now </button>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-3 px-2">
        <div class="col-md-4">
            <div class="card bg-sucess-subtle">
                <img src="https://i.pinimg.com/originals/53/2c/bd/532cbda4a0c6ed0adf00b66df50b15ea.jpg" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Gobi Tikka </h4></div>
                    
                    <button class="btn btn-outline-success btn-sm">View Now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-primary-subtle">
            <img src="https://1.bp.blogspot.com/-wOk65sO6K7U/Xyh5G6U_5gI/AAAAAAAABPs/r-Z8s-_8HrUQa3-bV2yrDAQ6mLZH4GZswCNcBGAsYHQ/s2048/DSC_8030%2Bcopy.jpg" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Paneer Tikka </h4></div>
                    
                    <button class="btn btn-outline-success btn-sm">View now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-dark-subtle">
                <img src="https://i.ytimg.com/vi/LvyGMCRNnw8/mqdefault.jpg" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h4>Gudbad Ice-cream</h4></div>
                  
                    <button class="btn btn-outline-success btn-sm">View now</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        </>
);
}
export default Menu;

