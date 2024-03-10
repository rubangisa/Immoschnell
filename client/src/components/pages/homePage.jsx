import "../../../styling/homepage.css";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { BsBuildings } from "react-icons/bs";
import { TbCamper } from "react-icons/tb";
import { PiCastleTurretLight } from "react-icons/pi";
import { PiTent } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>
        Explore our selection of boutique rentals to find your perfect home away
        from home.
      </h1>
      <div>
        <ul className="homeIcons">
          <li>
            <HiOutlineHome />
          </li>
          <li>
            <BsBuildings />
          </li>
          <li>
            <TbCamper />
          </li>
          <li>
            <PiCastleTurretLight />
          </li>
          <li>
            <PiTent />
          </li>
          <li>
            <HiOutlineHomeModern />
          </li>
        </ul>
      </div>
      <div className="homebox1">
        <h2>Popular properties</h2>
        <button>Book now</button>
      </div>

      <div className="home-cards">
        <div className="home-prop-cards">
          <img
            src="https://f7e5m2b4.rocketcdn.me/wp-content/uploads/2016/01/Modern-Australian-Farm-House-with-Passive-Solar-Design-1.jpg"
            alt="kookaburra ranch,queensland"
          />
          <div className="home-prop-cont">
            <h4>
              <b>Kookaburra Ranch</b>
            </h4>
            <p>Queensland, Australia</p>
            <br />
            <p>
              Bedrooms: 4
              <br />
              Bathrooms: 4
              <br />
              Guests: 4
              <br />
              Price per Night: 780€
            </p>
          </div>
        </div>
        <div className="home-prop-cards">
          <img
            src="https://st.hzcdn.com/simgs/pictures/exteriors/modern-homes-in-laguna-beach-j-kramer-corp-img~9e51960000f722cb_4-8314-1-1292123.jpg"
            alt="sunset spires, california"
          />
          <div className="home-prop-cont">
            <h4>
              <b>Sunset Spires</b>
            </h4>
            <p>California, USA</p>
            <br />
            <p>
              Bedrooms: 7
              <br />
              Bathrooms: 9
              <br />
              Guests: 14
              <br />
              Price per Night: 1300€
            </p>
          </div>
        </div>
        <div className="home-prop-cards">
          <img
            src="https://www.underthethatch.co.uk/uploads/estateCategoryImages/63c03761091c6.JPG"
            alt="inkwell cottage, oxfordshire"
          />
          <div className="home-prop-cont">
            <h4>
              <b>Inkwell Cottage</b>
            </h4>
            <p>Oxfordshire, England</p>
            <br />
            <p>
              Bedrooms: 2
              <br />
              Bathrooms: 1.5
              <br />
              Guests: 4
              <br />
              Price per Night: 200€
            </p>
          </div>
        </div>
      </div>

      <div className="homebox2">
        <h2>Why book with us?</h2>
        <div className="homebox2-cont">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="minial home interior with plants"
          />
          <div className="homebox2-icons">
            <FontAwesomeIcon icon={faComments} className="icon" />
            <p>direct contact with hosts</p>
            <FontAwesomeIcon icon={faShieldHalved} className="icon" />
            <p>secure payment options</p>
            <FontAwesomeIcon icon={faHandHoldingDollar} className="icon" />{" "}
            <p>transparant and fair pricing</p>
          </div>
          <div className="homebox2-icons2">
            <FontAwesomeIcon icon={faAward} className="icon" />
            <p>trusted and verified reviews</p>
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <p>accessability and inclusivity</p>
            <FontAwesomeIcon icon={faSeedling} className="icon" />
            <p>eco-friedly and sustainable properties</p>
          </div>
        </div>
      </div>

      <div className="homebox3">
        <h2>
          Unlock your property with <span>myhome</span>
        </h2>
        <div className="homebox3-cont">
          <div className="homebox3-text">
            <p>
              <span>myhome</span> is designed to empower property owners like
              you, offering a streamlined and effective avenue to showcase your
              unique space to a global audience of travelers. By partnering with
              us, you embark on a journey of hospitality excellence, elevating
              your property into a sought-after destination that stands out in
              the marketplace. Our platform is built with you in mind, featuring
              user-friendly interfaces, transparent pricing, and secure
              transactions, ensuring that you have all the tools and support
              needed to excel. This allows you to concentrate on what you do
              best – crafting an unforgettable and enriching experience for your
              guests, while we handle the intricacies of connecting you with
              those eager to discover what you have to offer.
              <br />
              <br />
              Embark on a journey of hospitality excellence by signing up with{" "}
              <span>myhome </span>today. Watch as your property transforms into
              a sought-after destination, attracting global travelers seeking
              distinctive and memorable stays. Our user-friendly platform,
              transparent pricing, and secure transactions give you the peace of
              mind to focus on what you do best – providing an unforgettable
              experience for your guests.
              <br />
              <br />
              Don't miss out on the opportunity to maximize your property's
              potential. By joining our community of esteemed hosts, you let
              your property shine on the global stage, captivating the hearts
              and minds of travelers with its unique charm and unparalleled
              hospitality. <span>myhome</span> is not just a platform; it's a
              gateway to bringing the world to your doorstep, allowing your
              property to be discovered and appreciated by a diverse and
              discerning audience. Let's embark on this journey together,
              transforming your space into more than just a place to stay, but a
              destination in its own right, cherished by guests from around the
              world.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1633113215988-4eaddc3965d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="couple using computer"
          />
        </div>
      </div>
      <div className="homebox4">
        <h2>Our Partners</h2>
        <div className="partner-card">
          <div className="partner-info">
            <img
              src="https://byplenty.com/wp-content/uploads/2021/05/cooee_3.jpg.webp"
              alt="cooee sustainable oral care "
            />
            <div className="partner-card-cont">
              <h4>
                <b>Cooee</b>
              </h4>
            </div>
          </div>
          <div className="partner-info">
            <img
              src="https://i.pinimg.com/564x/1b/c1/48/1bc14897ade16ff205209ca51727786b.jpg"
              alt="goshen ethically sourced coffee"
            />
            <div className="partner-card-cont">
              <h4>
                <b>Goshen Coffee</b>
              </h4>
            </div>
          </div>
          <div className="partner-info">
            <img
              src="https://i.pinimg.com/736x/5e/7b/a5/5e7ba53e012a89ce0b83f85f4363f80a.jpg"
              alt="tekla home furnishings"
            />
            <div className="partner-card-cont">
              <h4>
                <b>Tekla</b>
              </h4>
            </div>
          </div>
          <div className="partner-info">
            <img
              src="https://i.pinimg.com/564x/d3/28/0e/d3280e55f73fb98d33d21a6ac98afe86.jpg"
              alt="ode natural aperatif"
            />
            <div className="partner-card-cont">
              <h4>
                <b>Ode NA</b>
              </h4>
            </div>
          </div>
          <div className="partner-info">
            <img
              src="https://shop.ashleyandco.co/cdn/shop/products/AC_SZLLL_Web.jpg?v=1646865262%20%20%20%20%20%20%20%20//shop.ashleyandco.co/cdn/shop/products/AC_SZLLL_Web.jpg?v=1646865262"
              alt="ashley&co natural cleaning products"
            />
            <div className="partner-card-cont">
              <h4>
                <b>Ashley&Co</b>
              </h4>
            </div>
          </div>
          <div className="partner-info">
            <img
              src="https://i.pinimg.com/564x/6a/da/6c/6ada6c337b9ce083435ab1953605ab9a.jpg"
              alt="antipodes organic cosmetics"
            />
            <div className="partner-card-cont">
              <h4>
                <b>Antipodes</b>
              </h4>
            </div>
          </div>
        </div>
        <p className="partner-text">
          Diving deeper into our commitment, <span>myhome</span> has established
          partnerships with pioneering brands that are at the forefront of
          sustainability and ethical practices. By choosing to equip our
          properties with these thoughtfully selected products, we're not just
          offering you a place to stay; we're inviting you into a lifestyle that
          celebrates and supports global sustainability efforts. Every product
          you interact with during your stay, from the soft linens on your bed
          to the artisanal coffee in your kitchen, embodies a story of
          dedication to environmental stewardship and social responsibility.
          This meticulous selection process ensures that your stay is not only
          comfortable but also aligned with values that matter to you and the
          planet.
          <br />
          <br />
          Furthermore, we believe that luxury and sustainability can coexist,
          and our mission is to prove that to our guests. By staying with{" "}
          <span>myhome</span>, you become part of a movement that prioritizes
          the well-being of our environment without compromising on quality or
          comfort. We encourage you to explore the stories behind the brands we
          partner with, to understand the impact of your choice to stay with us.
          From reducing carbon footprints to supporting local communities, your
          stay at <span>myhome</span> contributes to a cycle of positive change.
          We're excited for you to experience the harmony between luxury living
          and sustainable practices, and to see how small choices can lead to
          significant impacts.
        </p>
      </div>
      <div className="homebox5">
        <h2>Happy guests and happy hosts</h2>
        <div className="homebox3-cont">
          <img
            src="https://images.unsplash.com/photo-1633113215988-4eaddc3965d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="couple using computer"
          />
          <div className="homebox3-text">
            <p>
              <span>myhome</span> is designed to empower property owners like
              you, offering a streamlined and effective avenue to showcase your
              unique space to a global audience of travelers. By partnering with
              us, you embark on a journey of hospitality excellence, elevating
              your property into a sought-after destination that stands out in
              the marketplace. Our platform is built with you in mind, featuring
              user-friendly interfaces, transparent pricing, and secure
              transactions, ensuring that you have all the tools and support
              needed to excel. This allows you to concentrate on what you do
              best – crafting an unforgettable and enriching experience for your
              guests, while we handle the intricacies of connecting you with
              those eager to discover what you have to offer.
              <br />
              <br />
              Embark on a journey of hospitality excellence by signing up with{" "}
              <span>myhome </span>today. Watch as your property transforms into
              a sought-after destination, attracting global travelers seeking
              distinctive and memorable stays. Our user-friendly platform,
              transparent pricing, and secure transactions give you the peace of
              mind to focus on what you do best – providing an unforgettable
              experience for your guests.
              <br />
              <br />
              Don't miss out on the opportunity to maximize your property's
              potential. By joining our community of esteemed hosts, you let
              your property shine on the global stage, captivating the hearts
              and minds of travelers with its unique charm and unparalleled
              hospitality. <span>myhome</span> is not just a platform; it's a
              gateway to bringing the world to your doorstep, allowing your
              property to be discovered and appreciated by a diverse and
              discerning audience. Let's embark on this journey together,
              transforming your space into more than just a place to stay, but a
              destination in its own right, cherished by guests from around the
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
