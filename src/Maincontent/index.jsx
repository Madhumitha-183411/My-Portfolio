import pic1 from "../assets/pic1.jpeg"
import pic2 from "../assets/pic2.jpeg"
import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/css-3.png";
import jsLogo from "../assets/java-script.png";
import reactLogo from "../assets/react.png";
import bootstrapLogo from "../assets/bootstrap.png";
import rightArrow from "../assets/right-arrow.png";
import phoneIcon from "../assets/phone.png";
import { useState } from "react";
import { useFormStatus } from "react-dom"


export default function Maincontent(){
    const [data,setdata] = useState({username:"",email:"",textmessage:""})
    const [error,seterror] = useState({})

    function Submitbutton(){
        const {pending} =useFormStatus()
       return <button className="submitbtn">{pending ? "Form submitting" : "Submit" }</button>
    }

    const handlechange =(e)=>{
        const {name,value} = e.target;
        setdata({...data,[name]:value})
    }

    const validateform = () =>{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errors = {}
        if(data.username.length>=1 && data.username.length<=2 ){
            errors.username = "Please enter your full name"
        }
        if(!data.username.trim() || !data.email.trim() || !data.textmessage.trim()){
            errors.fill = "Please fill in all the fields"
        }
        if(!emailPattern.test(data.email)){
            errors.email = "Invalid email"
        }
        seterror(errors)
        return Object.keys(errors).length === 0;
    }

    async function handlesubmit(formdata){
        if(validateform()){
            setdata({username:"",email:"",textmessage:""})
            await new Promise((resolve, reject) => setTimeout(resolve,1000))
            console.log(data)
        }}


    const professionalSkills = [
  { name: "Creativity", percentage: "70%" },
  { name: "Communication", percentage: "80%" },
  { name: "Problem Solving", percentage: "75%" },
  { name: "Teamwork", percentage: "85%" },
];

    function checkname(event){
                    let char = event.key;
                    if(!/[A-Za-z ]/.test(char)){
                        event.preventDefault()
                        return false
                    }
            }
    return (
       <div>
          <section className="home" id="home">
            <div className="home-content">
        <h1 style={{ marginBottom: "5px" }}>Hi, It's Madhumitha</h1>

        <h2 style={{ color: "red", marginBottom: "5px" }}> Frontend Developer</h2>

        <p style={{fontWeight: "700",fontSize: "19px",}}>
          I can create beautiful, functional, and user-centered digital experiences.
          <br/>
          I am a fresher with a keen interest in web development. I bring ideas to life through clean code and thoughtful design.
        </p>
      </div>

      <div className="home-sci">
        <img className="pic1" src={pic1} alt="Madhu" width="250" height="300"/>
      </div>
          </section>

    <section className="about" id="about">
      <h1 className="aboutme">About Me</h1>

      <div className="about2">
        <img className="pic2" src={pic2} alt="Madhumitha" width="250" height="300"/>

        <div className="abourcontent">

          <p>Hi, I'm Madhumitha, an aspiring Frontend Developer passionate about creating responsive, user-friendly, and visually appealing web applications.</p>

          <p>I am currently learning modern frontend technologies and continuously improving my skills through hands-on projects.</p>

          <p>As a fresher actively seeking opportunities, I am eager to contribute, learn, and grow as a frontend developer while building meaningful digital experiences.</p>
        </div>
      </div>
    </section>

         <section className="mt-5" id="skills">
      <h1 className="myskills">My Skills</h1>

      <div className="skills">
        <div className="technical">
          <h3 className="technicalskills">Technical Skills</h3>

          <div className="skilldiv1 mb-4">
            <div className="html">
              <div style={{ display: "flex", position: "relative" }}>
                <p style={{ fontSize: "19px", marginBottom: 0 }}>HTML</p>
                <img src={htmlLogo} className="mt-1" alt="HTML" width="20" height="20"/>
                <div>
                  <p className="percentage">80%</p>
                </div>
              </div>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "80%", color: "red" }} > 80% </div>
            </div>
          </div>

          <div className="skilldiv1 mb-4">
            <div className="html">
              <div style={{ display: "flex", position: "relative" }}>
                     <p style={{ fontSize: "19px", marginBottom: 0 }}>CSS</p>
                    <img src={cssLogo} className="mt-1" alt="CSS"  width="20" height="20"/>
                    <div>
                    <p className="percentage">70%</p>
                    </div>
              </div>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "70%", color: "red" }}> 70% </div>
            </div>
          </div>

          <div className="skilldiv1 mb-4">
            <div className="html">
              <div style={{ display: "flex", position: "relative" }}>
                <p style={{ fontSize: "19px", marginBottom: 0 }}>JavaScript</p>
                <img src={jsLogo} className="mt-1" alt="JavaScript" width="20" height="20" />
                <div>
                  <p className="percentage">65%</p>
                </div>
              </div>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "65%", color: "red" }} > 65% </div>
            </div>
          </div>

          <div className="skilldiv1 mb-4">
            <div className="html">
              <div style={{ display: "flex", position: "relative" }}>
                <p style={{ fontSize: "19px", marginBottom: 0 }}>React</p>
                <img src={reactLogo} className="mt-1" alt="React" width="20" height="20"/>
                <div>
                  <p className="percentage">75%</p>
                </div>
              </div>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "75%", color: "red" }}> 75%</div>
            </div>
          </div>

          <div className="skilldiv1 mb-4">
            <div className="html">
              <div style={{ display: "flex", position: "relative" }}>
                <p style={{ fontSize: "19px", marginBottom: 0 }}>Bootstrap</p>
                <img src={bootstrapLogo} className="mt-1" alt="Bootstrap" width="20" height="20"/>
                <div>
                  <p className="percentage">75%</p>
                </div>
              </div>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "75%", color: "red" }}> 75% </div>
            </div>
          </div>
           </div>


            <div className="proffe">
  <h3 className="professionalskills">Professional Skills</h3>

  <div className="professional">
    {professionalSkills.map((skill, index) => (
      <div className="innerprofe" key={index}>
        <div className="radial-bar">
          <div className="inner-circle">{skill.percentage}</div>
        </div>

        <h6 className="text-white skilltext mt-2">{skill.name}</h6>
      </div>
    ))}
  </div>
</div>
       
      </div>
         </section>

      <section className="contactdiv" id="contact">
      <h1 className="text-white text-center contact-me">Contact Me</h1>

      <div className="contactme">
        <div className="contact1 mt-4">
          <p className="text-white" style={{ fontSize: "20px" }}>
            I'm currently seeking opportunities as a Frontend Developer and
            would love to connect with professionals, recruiters, and potential
            clients. Whether you have a job opportunity, project idea, or just
            want to discuss web development, feel free to reach out. I'll get
            back to you as soon as possible!
          </p>

          <p className="text-white" style={{ fontSize: "20px" }}>
            <img className="me-2" src={rightArrow} alt="Email"width="20" height="20"/>mithamadhu297@gmail.com
          </p>

          <p className="text-white" style={{ fontSize: "20px" }}>
            <img className="me-2" src={phoneIcon} alt="Phone" width="20" height="20"/> 9597896523
          </p>
        </div>

        <div className="contactform">
          <div className="row">
            <div className="col-md-12">
              <form action={handlesubmit}>
                <input
                  onChange={handlechange}
                  onKeyDown={(e)=>checkname(e)}
                  type="text"
                  value={data.username}
                  name="username"
                  placeholder="Enter your Name"
                  className="form-control m-2 entername"
                />

                <input
                  onChange={handlechange}
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder="Enter your Email"
                  className="form-control m-2 enteremail"
                />

                <textarea
                  onChange={handlechange}
                  value={data.textmessage}
                  rows="5"
                  name="textmessage"
                  placeholder="Enter your Message"
                  className="form-control m-2 entermessage"
                ></textarea>

                <p className="text-danger namevalid" style={{ display: "none" }}>Please enter your full name.</p>

                <p className="text-danger enterall" style={{ display: "none" }}> Please fill all the fields. </p>

                <p className="text-danger emailvalid" style={{ display: "none" }}> Invalid email. </p>

                <p className="text-danger">{error.username && <span>{error.username}</span>}</p>
                <p className="text-danger">{error.email && <span>{error.email}</span>}</p>
                <p className="text-danger">{error.fill && <span>{error.fill}</span>}</p>
                <Submitbutton />
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>
       </div>
    )
}