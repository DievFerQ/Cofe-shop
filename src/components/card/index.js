import React from "react";

const Card = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Why Choose Us
          </h2>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-600 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
                 Community Engagement:
                </h3>
                <p className="leading-relaxed text-base">
                  We are involved in the coffee community, participating in coffee festivals, hosting events, and supporting local coffee shops.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-600 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Sustainability
                </h3>
                <p className="leading-relaxed text-base">
                  We are committed to sustainability and ethical trade, using biodegradable packaging, sourcing from fair trade farms, and reducing your carbon footprint.
                </p>
                
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-600 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Expertise
                </h3>
                <p className="leading-relaxed text-base">
                  Your team of coffee experts has years of experience in selecting, roasting, and blending coffee beans to create unique and delicious flavors.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
