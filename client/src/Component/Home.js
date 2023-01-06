import React from 'react'


const Home = () => {
  return (
    <>
    <div className="container my-5 z-depth-1">


{/* <!--Section: Content--> */}
<section className="dark-grey-text">

  <div className="row pr-lg-5">
    <div className="col-md-7 mb-4">

      <div className="view">
        <img src="https://mdbootstrap.com/img/illustrations/graphics(4).png" className="img-fluid" alt="smaple image"/>
      </div>

    </div>
    <div className="col-md-5 d-flex align-items-center">
      <div>
        
        <h3 className="font-weight-bold mb-4">Welcome to Piyush Urode Blog</h3>

        <p> Here you learn minor or major topic of HTML / CSS /JS /React  and Database Sql and Mongodb  and Language Java™ Platform, Standard Edition (Java SE) 
          / Java Enterprises Edition applications  </p>
          

        <button type="button" className="btn btn-orange btn-rounded mx-0">Download</button>
        <button type="button" className="btn btn-orange btn-rounded mx-0" > <a href='../image/PiyushResume.pdf'> </a>MyResumeDownload</button>
        

      </div>
    </div>
  </div>

</section>
{/* <!--Section: Content--> */}


</div>
    
    </>
    
  )
}

export default Home