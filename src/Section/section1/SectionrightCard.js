import React from 'react'

function SectionrightCard() {
    return (
        <div className="pov-card" style={{ }}>
            <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>Pov <div style={{ background: "red", display: "inline-block", width: "230px", height: "5px" }}></div></h4>
            <div className="row">
                <div className="pov-card-right col-md-12">
                    <div className='' style={{ width: "16rem",marginLeft:"10px" }}>
                        <img src="https://static.india.com/wp-content/uploads/2022/05/Chennai-Super-Kings-vs-Kolkata-Knight-Riders.jpeg"  className='img-fluid' alt="" />
                        <div className="card-body">
                            <h6 className="card-title " style={{fontSize:"13px",marginLeft:"-10px"}}>
                                Lorem ipsum perfatione, eligendi dolorem nostrum ut atque doloribus illo veniam architecto repudiandae
                            </h6>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text"> Amit raj</span></span>
                        </div>
                    </div>
                </div>

                <div className="pov-card-right-reader-editor col-md-12 my-4">
                <div  style={{width:"18rem"}}>
                <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>Reader Editors<div style={{ background: "red", display: "inline-block", width: "150px", height: "5px",marginLeft:"3px" }}></div></h4>
                            <div style={{width:"18rem",marginLeft:"15px"}}>
                            
                               <p style={{fontSize:"12px",fontWeight:500,marginLeft:"-7px"}}> Lorem ipsum dolor elit. Placeat fugiat, maiores illo ratione impedit cumque architecto sint natus deserunt ab, similique ipsum quas, hic quam.
                               e architecto sint natus deserunt ab, e architecto sint natus deserunt ab,  e architecto sint natus deserunt ab, 
                               e architecto sint natus deserunt ab, 
                               </p>
                            </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default SectionrightCard