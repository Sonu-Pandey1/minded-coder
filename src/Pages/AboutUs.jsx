import Card from "../Components/Card/Card"
import "./About.scss"

function AboutUs() {
  return (
    <>
      <div className="AboutSection">
        <div className="container">

          <div className="row row1">
            <div className="col col1 text-center">
              <h1 className="textGradient">About Minded Coder</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis hic, perferendis voluptatum veniam nihil laboriosam! Possimus iusto maxime, odit atque autem quisquam? Sunt dignissimos ipsam velit nemo a natus repellat ad distinctio optio debitis dolor, mollitia provident hic unde dolorum expedita omnis commodi quo fugit ullam enim voluptates rerum quos. Dolorum deleniti unde sunt earum inventore libero, quia quas impedit.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi laborum, nemo porro illo nobis optio ea voluptas numquam debitis repellat cum similique eos placeat aliquam in iste molestias deserunt impedit ab maiores voluptatibus blanditiis! Ipsam mollitia, debitis aut, possimus nisi quod, amet ipsum doloribus nihil est libero perspiciatis eum enim!</p>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolores recusandae rerum magni harum modi laborum nobis possimus eius esse, alias, ad sint. Perspiciatis distinctio quasi maxime laudantium quidem, dolorem cum cumque adipisci deserunt dolore consequatur alias exercitationem temporibus tempora commodi saepe ab velit, totam eligendi aliquid iste vel. Soluta dignissimos in rerum iure ipsam voluptatibus laudantium sed, veritatis ad, ratione et. Modi aspernatur dolor voluptatem omnis, nulla alias unde?</p> */}
            </div>
          </div>

          <div className="row row2">
            <div className="col col2 text-center">
              <h2 className="mb-5 textGradient">Why Choose Minded Coder</h2>
              <p className="mb-4">At Ducat India, we specialise in upskilling your employees to meet your organization`s learning and development goals. We are committed to providing customised training tailored to your company`s needs with a proven track record in delivering successful IT courses, including full-stack programming, Cloud Computing, DevOps, ERP, Data Science & Machine Learning, and more.</p>
              <img src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fcorporate%2FCorporateImages.jpg&w=1200&q=75" alt="proceesImg0" />
            </div>
          </div>

          <div className="row row3">
            <div className="col col3">
              <h3 className=" mt-5 pt-5 textGradient">Benifits</h3>
              <div className=" text-center 0cardsContainer d-flex justify-content-between mt-5 flex-wrap">
                <Card page={"about"} imgUrl={"https://scalive.in/assets/images/category/1.png"} pera={"We want to help you in building a career you love. Get trained in cutting edge technologies, with hands-on practice, helping you in changing your career or succeeding in the job you already have."} title={"Give a flight to your career"} />
                <Card page={"about"} imgUrl={"https://scalive.in/assets/images/category/2.png"} pera={"We provide Daily/alternate days Classes at our academy. Also, students get assistance throughout online/offline classes.They can easily join our online classes at their comfort zone at anywhere in any place."} title={"Offline & Online classes"} />
                <Card page={"about"} imgUrl={"https://scalive.in/assets/images/category/3.png"} pera={"We pay equal importance to student's practical knowledge as well as theoretical lessons. We also provide assistance in the revision of course material like pdf, ppt, codes and hand written notes for students."} title={"Practice and revise"} />
                <Card page={"about"} imgUrl={"https://scalive.in/assets/images/category/4.png"} pera={"Our courses are designed keeping one thing in mind that student should get prepared for interviews after completing this course, so if you are struggling with interviews you are at right place."} title={"Become Job Ready"} />
                <Card page={"about"} className="card" imgUrl={"https://scalive.in/assets/images/category/5.png"} pera={"We know that being a noob in technology, you will have many doubts while learning, our 24x7 doubtsin this world helping you in utilizing your free time for new skill  solving support will let you resolve your queries in minutes."} title={"Seamless Doubt Solving"} />
                <Card page={"about"} className="card" imgUrl={"https://scalive.in/assets/images/category/6.png"} pera={"Our counsellor are in regular touch with students to in this world helping you in utilizing your free time for new skill provide the right career advice and support ilizing your free time for new skill .We have a fully dedicated team for Counselling."} title={"Career Counselling"} />
                <Card page={"about"} className="card" imgUrl={"https://scalive.in/assets/images/category/7.png"} pera={"Our specially designed LMS will let you learn from anywhere and learn from anywhere and  anytime in this world helping you in utilizing your free time for new skill development in this world helping you in utilizing your free time for new skill ."} title={"Learn from anywhere"} />
                <Card page={"about"} className="card" imgUrl={"https://scalive.in/assets/images/category/8.png"} pera={"We provide tech support services to address your issues on call/Email. Call our Customer Service executive or submit your request online, our tech support staff will get in in this world helping you in utilizing your free time for new skill touch with you."} title={"24x7 Support0"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
