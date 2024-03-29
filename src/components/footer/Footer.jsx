import Simplify from "../../assets/bg-simplify-section-desktop.svg";
import Logo from "../../assets/logo-footer.svg";
import CustomButton from "../CustomButton";
const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between items-center bg-bright-red px-8 md:px-44 py-12 relative">
        <img
          src={Simplify}
          className="absolute left-0 top-16 md:-top-36 md:-left-60 "
        />
        <h1 className=" w-11/12 md:w-1/2 text-4xl font-bold text-center md:text-left text-pale-red tracking-tight leading-[1.2] ">
          Simplify how your teams works today.
        </h1>
        <CustomButton footer>Get Started</CustomButton>
      </div>
      <div className="bg-darker-blue px-8 md:px-44 py-12 z-[5] grid grid-cols-[1fr_1fr] grid-rows-[1fr_1.5fr_2fr]  md:grid-cols-[1fr_1fr_1fr_2.5fr] md:grid-rows-[150px] gap-x-12 gap-y-10 md:gap-x-32 md:gap-y-0 md:relative">
        <div className="row-start-3 row-end-4 col-start-1 col-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 flex flex-col-reverse md:flex-col justify-around md:justify-between items-center">
          <div>
            <img src={Logo} />
          </div>
          <div className="flex gap-6 md:gap-2 items-center transition ease-linear duration-200">
            <svg width="20" height="20">
              <path
                className="fill-[white] hover:fill-bright-red cursor-pointer"
                d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104A1.102 1.102 0 0 0 18.896 0z"
              />
            </svg>
            <svg width="21" height="20">
              <path
                className="fill-[white] hover:fill-bright-red cursor-pointer "
                d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"
              />
            </svg>
            <svg width="21" height="18">
              <path
                className="fill-[white] hover:fill-bright-red cursor-pointer"
                d="M20.667 2.797a8.192 8.192 0 0 1-2.357.646 4.11 4.11 0 0 0 1.804-2.27 8.22 8.22 0 0 1-2.606.996A4.096 4.096 0 0 0 14.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 0 1-8.457-4.287 4.109 4.109 0 0 0 1.27 5.478A4.086 4.086 0 0 1 1.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 0 1-1.853.07 4.106 4.106 0 0 0 3.834 2.85 8.25 8.25 0 0 1-6.075 1.7 11.616 11.616 0 0 0 6.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 0 0 2.048-2.124z"
              />
            </svg>
            <svg width="21" height="20">
              <path
                className="fill-[white] hover:fill-bright-red cursor-pointer"
                d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"
              />
            </svg>
            <svg width="21" height="20">
              <path
                className="fill-[white] hover:fill-bright-red cursor-pointer"
                d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.339-9.87a1.2 1.2 0 1 0-.001 2.4 1.2 1.2 0 0 0 0-2.4z"
              />
            </svg>
          </div>
        </div>
        <div className=" row-start-2 row-end-3 col-start-1 col-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 flex flex-col justify-around gap-4 md:gap-0">
          <span className="text-gray-200 cursor-pointer hover:text-bright-red text-sm font-light">
            Home
          </span>
          <span className="text-gray-200 cursor-pointer hover:text-bright-red text-sm font-light">
            Pricing
          </span>
          <span className="text-gray-200 cursor-pointer hover:text-bright-red text-sm font-light">
            Products
          </span>
          <span className="text-gray-200 cursor-pointer hover:text-bright-red text-sm font-light">
            About us
          </span>
        </div>
        <div className="row-start-2 row-end-3 col-start-2 col-end-3 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 flex flex-col gap-4 mt-0 md:mt-3">
          <span className="text-gray-200 cursor-pointer hover:text-bright-red text-sm font-light">
            Careers
          </span>
          <span className="text-gray-200 cursor-pointer hover:text-bright-red text-sm font-light">
            Community
          </span>
          <span className="text-gray-200 cursor-pointer hover:text-bright-red text-sm font-light">
            Privacy Policy
          </span>
        </div>
        <div className="row-start-1 row-end-2 col-start-1 col-end-3 md:col-start-4 md:col-end-5 flex flex-col justify-between items-end place-self-center md:place-self-auto gap-4 md:gap-0">
          <form className="flex gap-2 items-start">
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                className="peer bg-light-grey py-3 px-4 rounded-full w-[220px] md:w-[200px] outline-none text-black text-sm text-left"
                placeholder="Updates in your inbox..."
              />
              <span className="text-xs italic text-red-500 ml-2 mt-2 peer-invalid:block hidden">
                Please insert a valid email
              </span>
            </label>
            <button
              type="submit"
              className="py-2.5 px-8 md:px-4 rounded-full shadow-lg text-pale-red text-sm bg-bright-red cursor-pointer hover:opacity-85 "
            >
              GO
            </button>
          </form>
          <p className="text-xs text-gray-400 absolute bottom-6 right-16 md:static">
            Copyright 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
