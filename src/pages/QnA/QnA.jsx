import Lottie from "lottie-react";
import animationData from "../../assets/ask.json";

const QnA = () => {
  return (
    <section data-aos="fade-up" data-aos-duration="2000" className="bg-white">
      <div className="flex flex-col md:flex-row lg:flex-row ">
        <div data-aos="flip-left" data-aos-duration="3000" className="relative">
          <div className=" lg:w-[400px] lg:h-[400px] rounded-full bg-yellow-200 absolute lg:right-[25px] lg:top-[100px]"></div>
          <Lottie animationData={animationData}></Lottie>
        </div>
        <div className="container flex flex-col justify-center px-4 lg:py-8 mx-auto md:p-8">
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className="text-2xl font-semibold sm:text-4xl mb-5"
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details
              data-aos="flip-right"
              data-aos-duration="3000"
              className="w-full border rounded-lg"
            >
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                How do I make a reservation?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Provide detailed instructions on how visitors can make
                reservations for your properties. Include information on booking
                procedures, available dates, pricing, and any required
                documentation or deposits.{" "}
              </p>
            </details>
            <details
              data-aos="flip-right"
              data-aos-duration="3000"
              className="w-full border rounded-lg"
            >
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What amenities are included in the accommodations?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                List the amenities available at each property, such as swimming
                pools, spa facilities, dining options, fitness centers, and
                more. Highlight any unique features or services that guests can
                expect during their stay.{" "}
              </p>
            </details>
            <details
              data-aos="flip-right"
              data-aos-duration="3000"
              className="w-full border rounded-lg"
            >
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What is your cancellation policy?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                Clearly outline your cancellation policy, including any fees or
                penalties for canceling reservations. Provide information on the
                deadline for canceling bookings, refund processes, and any
                exceptions or special circumstances that may apply.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QnA;
