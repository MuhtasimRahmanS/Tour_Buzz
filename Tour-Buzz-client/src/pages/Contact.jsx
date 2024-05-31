import Lottie from "lottie-react";
import contactPic from "../../public/Animation - 1714100307742.json";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact-TourBuzz</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Contact Us
            </h2>
            <div className="dark:text-gray-600">
              Have a question or want to learn more? Don&apos;t hesitate to get
              in touch with us!
            </div>
          </div>
          <Lottie animationData={contactPic} loop={true} />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded-xl border-2 border-[#3DB043] dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded-xl border-2 border-[#3DB043] dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded-xl border-2 border-[#3DB043] dark:bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-xl text-white bg-[#3DB043] dark:bg-violet-600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
