import { IoIosSearch } from 'react-icons/io';

const Hero = () => {
  return (
    <div className="bg-linear pt-[70px] pb-[90px]">
      <div className="max-w-[1230px] mx-auto text-center">
        <h1 className="text-7xl font-bold">
          <p>
            Deal your <span className="linear-color bg-clip-text text-transparent">Products</span>
          </p>
          <p>
            in a <span className="linear-color bg-clip-text text-transparent">Smart</span> way !
          </p>
        </h1>
        <p className="text-[#627382] mt-4 mb-8">
          SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
        </p>
        <div>
          <div className="join">
            <div>
              <label className="input validator join-item w-md rounded-s-full">
                <input
                  type="email"
                  placeholder="search For Products, Categoriees..."
                  required
                  className=""
                />
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>
            </div>
            <button className="btn btn-neutral join-item rounded-e-full linear-color border-none">
              <IoIosSearch className="text-white text-xl" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="join space-x-2.5">
            <button className="btn join-item text-white linear-color rounded">
              Watch All Products
            </button>
            <button className="btn join-item linear-color bg-clip-text text-transparent border border-[#632EE3] rounded">
              Post an Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
