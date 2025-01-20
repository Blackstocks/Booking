import Layout from "@/components/layout/Layout";

import Category from "@/components/sections/Category";
import FilterSearch from "@/components/sections/FilterSearch";
import Flights1 from "@/components/sections/Flights1";
import News1 from "@/components/sections/News1";
import Payments1 from "@/components/sections/Payments1";
import PopularDestinations1 from "@/components/sections/PopularDestinations1";
import Subscriber1 from "@/components/sections/Subscriber1";
import Testimonials1 from "@/components/sections/Testimonials1";
import TopRated1 from "@/components/sections/TopRated1";
import WhyChooseUs1 from "@/components/sections/WhyChooseUs1";
import YourJourney from "@/components/sections/YourJourney";
import SearchFilterBottom from "@/components/elements/SearchFilterBottom";
import SwiperGroup8Slider from "@/components/slider/SwiperGroup8Slider";
import TopCategory1 from "@/components/sections/TopCategory1";
import OurFeatured1 from "@/components/sections/OurFeatured1";
import FlightSearch from "../components/FlightSearch";
export default function Home() {
  return (
    <>
      
		
		<section>
			<FlightSearch/>
		</section>
        <section className="section-box box-popular-destinations background-body">
          <div className="container">
            <div className="box-swiper box-swiper-pd mt-0 wow fadeInDown">
              <div className="swiper-container swiper-group-8">
                <SwiperGroup8Slider />
              </div>
              <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-group-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-group-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <OurFeatured1 />
        <TopRated1 />
        {/* <WhyChooseUs1 /> */}
        <Flights1 />
        {/* <Category /> */}
        <Payments1 />
        {/* <Testimonials1 /> */}
        {/* <News1 /> */}
        <Subscriber1 />
      
    </>
  );
}
