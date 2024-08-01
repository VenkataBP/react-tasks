import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <h3 style={{textAlign:"center", color:"orange"}}>Slide 1</h3>
          <img 
            src="https://e7.pngegg.com/pngimages/940/390/png-clipart-film-free-family-movie-night-graphics-liam-page-cinema-cinema-poster-film-movie-thumbnail.png" 
            alt="Slide 1"
            style={{ marginTop: "50px", width: "500px", height: "400px" , marginLeft:"35%"}} 
          />
        </div>
        <div>
          <h3 style={{textAlign:"center", color:"yellow"}} >Slide 2</h3>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhA9XrdYS1c3e0XZKxaQnlKmgolbIKF83tvw&s" 
            alt="Slide 2" 
            style={{ width: "500px", height: "400px",marginLeft:"35%",marginTop:"50px" }}
          />
        </div>
        <div>
          <h3 style={{textAlign:"center",color:"red"}}>Slide 3</h3>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1ndjO8j5-AagW38eDlzP9nkLunLJo_b3Xw&s" 
            alt="Slide 3" 
            style={{ width: "500px", height: "400px",marginLeft:"35%",marginTop:"50px"  }}
          />
        </div>
        <div>
          <h3 style={{textAlign:"center",color:"brown"}}>Slide 4</h3>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUX42k2Sx6ZfTSE52E-_9_zsDUJeRpA_HtQ&s" 
            alt="Slide 4" 
            style={{ width: "500px", height: "400px",marginLeft:"35%",marginTop:"50px"  }}
          />
        </div>
        <div>
          <h3 style={{textAlign:"center",color:"grey"}}>Slide 5</h3>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpHKynylXEGIZcA1JsX1d8CfpabeKT-mkhw&s" 
            alt="Slide 5" 
            style={{ width: "500px", height: "400px",marginLeft:"35%",marginTop:"50px"  }}
          />
        </div>
        <div>
          <h3 style={{textAlign:"center",color:"skyblue"}}>Slide 6</h3>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9abxY1I5DJYKO22a9TP49nQlsSHovidQ1A&s" 
            alt="Slide 6" 
            style={{ width: "500px", height: "400px",marginLeft:"35%",marginTop:"50px"  }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default About;
