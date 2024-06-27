import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  // Lets write some required javascript here..

  function FrontClick() {
    let Cur_Banner = document.querySelector(".active");
    let Aft_Banners = document
      .querySelector(".Second")
      .getElementsByTagName("img");

    if (!Cur_Banner || Aft_Banners.length === 0) {
      console.error("One or both of the elements were not found:", {
        Cur_Banner,
        Aft_Banners,
      });
      return;
    }

    if (Cur_Banner.classList.contains("active")) {
      Cur_Banner.classList.remove("active");
      Aft_Banners[0].classList.add("active"); // Assuming you want to switch to the Second image
      let FrontBtn = document
        .getElementById("next")
        .getElementsByTagName("img")[0];
      let BackBtn = document
        .getElementById("previous")
        .getElementsByTagName("img")[0];
      FrontBtn.style.display = "none";
      BackBtn.style.display = "block";
    } else {
      Cur_Banner.classList.add("active");
      Aft_Banners[0].classList.remove("active"); // Assuming you want to switch to the first image
    }
  }

  function BackClick() {
    let Cur_Banner = document.querySelector(".active");
    let Aft_Banners = document
      .querySelector(".Second")
      .getElementsByTagName("img");

    if (!Cur_Banner || Aft_Banners.length === 0) {
      console.error("One or both of the elements were not found:", {
        Cur_Banner,
        Aft_Banners,
      });
      return;
    }

    if (Cur_Banner.classList.contains("active")) {
      Cur_Banner.classList.remove("active");
      Aft_Banners[0].classList.add("active"); // Switch back to the first image
    } else {
      Cur_Banner.classList.add("active");
      Aft_Banners[0].classList.remove("active"); // Switch to the Second image
    }
  }

  return (
    // This is the site URL for udemy official website....
    // https://www.udemy.com/?utm_source=bing-brand&utm_medium=udemyads&utm_campaign=BG-Brand-Udemy_la.EN_cc.INDIA&utm_term=_._ag_1213861249973830_._ad__._de_c_._dm__._pl__._ti_kwd-75866662443679:loc-90_._li_156843_._pd__._&utm_term=_._pd__._kw_udmymcom_._&matchtype=e&msclkid=b8ca3bfb6d8c18a921d95da378882d83
    <>
      <Navbar />
      <div className="Carousel">
        <div className="First">
          <img
            className="active"
            width="1300px"
            height="auto"
            src="/12c0830f-aa27-4843-993d-b440aa389991.jpeg"
            alt=""
          />
        </div>
        <div className="Second">
          <img
            width="1300px"
            height="auto"
            src="/bb0acdaf-d3e9-41dc-9d51-bfcf2b526ba1.jpg"
            alt=""
          />
        </div>
        <div className="Btn">
          <button id="previous" type="button">
            <img
              onClick={BackClick}
              src="https://cdn0.iconfinder.com/data/icons/web-seo-and-advertising-media-1/512/218_Arrow_Arrows_Back-512.png"
              alt=""
            />
          </button>
          <button id="next" type="button">
            <img
              onClick={FrontClick}
              src="https://th.bing.com/th?id=OIP.L9CHuVVYnv-wX5ehToxvIgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="Text_1">
        <h1>All the skills you need in one place</h1>
        <div>
          From critical skills to technical topics, Udemy supports your
          professional development.
        </div>
      </div>
      <div className="Courses Text_1">
        <ul className="Course_Ul">
        {/* className="First" */}
          <li>Web Development</li>
          <li>IT Certifications</li>
          <li>Leadership</li>
          <li>Communication</li>
          <li>Data Science</li>
          <li>Buisness Analytics & Intelligence</li>
        </ul>
      </div>
      <hr />
      <div className="Skills">
        <div className="Header">
          <ul className="Flex">
            <li>
              <h3  className="color">Web Development</h3>
              <div className="color">13.3M+ learners</div>
            </li>
            <li>
              <h3 className="color">Javascript</h3>
              <div className="color">16.6M+ learners</div>
            </li>
            <li>
              <h3 className="color">React</h3>
              <div className="color">7.7M+ learners</div>
            </li>
            <li>
              <h3 className="color">Angular</h3>
              <div className="color">4M+ learners</div>
            </li>
            <li>
              <h3 className="color">Java</h3>
              <div className="color">15.5M+ learners</div>
            </li>
            <li>
              <h3 className="color">Andoid Dev</h3>
              <div className="color">8.8M+</div>
            </li>
            <li>
              <h3 className="color">ios Dev</h3>
              <div className="color">3.2M+</div>
            </li>
          </ul>
        </div>
        <div className="Course_Sec Flex">
          <div className="Card">
            <div>
              <img
                width="342px"
                src="https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg"
                alt=""
              />
            </div>
            <h4>The Complete 2024 Web Development Bootcamp</h4>
            <h5>Dr.Angela Yu</h5>
            <span className="Flex">
              <span>4.7</span>
              <img className="rating" src="/rating.png" alt="" />
              <span>(380,250)</span>
            </span>
            <div className="Cost">$45</div>
            <div className="BestSeller">BestSeller</div>
          </div>
          <div className="Card">
            <div>
              <img
                width="342px"
                src="https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg"
                alt=""
              />
            </div>
            <h4>The Complete 2024 Web Development Bootcamp</h4>
            <h5>Dr.Angela Yu</h5>
            <span className="Flex">
              <span>4.7</span>
              <img className="rating" src="/rating.png" alt="" />
              <span>(380,250)</span>
            </span>
            <div className="Cost">$45</div>
            <div className="BestSeller">BestSeller</div>
          </div>
          <div className="Card">
            <div>
              <img
                width="342px"
                src="https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg"
                alt=""
              />
            </div>
            <h4>The Complete 2024 Web Development Bootcamp</h4>
            <h5>Dr.Angela Yu</h5>
            <span className="Flex">
              <span>4.7</span>
              <img className="rating" src="/rating.png" alt="" />
              <span>(380,250)</span>
            </span>
            <div className="Cost">$45</div>
            <div className="BestSeller">BestSeller</div>
          </div>
          <div className="Card">
            <div>
              <img
                width="342px"
                src="https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg"
                alt=""
              />
            </div>
            <h4>The Complete 2024 Web Development Bootcamp</h4>
            <h5>Dr.Angela Yu</h5>
            <span className="Flex">
              <span>4.7</span>
              <img className="rating" src="/rating.png" alt="" />
              <span>(380,250)</span>
            </span>
            <div className="Cost">$45</div>
            <div className="BestSeller">BestSeller</div>
            <img
              id="CourseArrow"
              src="https://th.bing.com/th?id=OIP.L9CHuVVYnv-wX5ehToxvIgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="Box">
        Best Web Development Courses Available
      </div>
    </>
  );
}

export default App;
