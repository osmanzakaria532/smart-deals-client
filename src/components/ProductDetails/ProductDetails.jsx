import { use, useEffect, useRef, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';

const ProductDetails = () => {
  const [bids, setBids] = useState([]);
  const { user } = use(AuthContext);
  const { _id: productId, title } = useLoaderData();
  const navigate = useNavigate();
  const bidModalRef = useRef(null);

  //   console.log({ user, bids });

  const handleBidModalOpen = () => {
    // console.log('bids modal');
    bidModalRef.current.showModal();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('bids for this product', data);
        setBids(data);
      });
  }, [productId]);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;

    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      buyer_image: user?.photoURL,
      bid_price: bid,
      status: 'pending',
    };

    // console.log(productId, name, email, bid);

    fetch('http://localhost:5000/bids', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          // add the new bid to the state
          // first add id
          newBid._id = data.insertedId;
          // new bidke ager golor sathe add kra
          const newBids = [...bids, newBid];
          //   srial akare sajanu
          newBids.sort((a, b) => b.bid_price - a.bid_price);
          // stateke update kra
          setBids(newBids);
        }
      });
  };

  return (
    <div className="bg-[#F5F5F5] py-16">
      <div className="max-w-[1230px] mx-auto">
        <div className="flex items-center gap-10">
          <div className="w-[600px]">
            <div className="w-full h-[500px] bg-gray-500 rounded-xl mb-7"></div>
            <div>
              <h5 className="text-2xl font-semibold mb-6">Product Description</h5>
              <div className="flex gap-[150px] font-semibold">
                <p className="">
                  <span className="linear-color bg-clip-text text-transparent ">Condition</span>:
                  New
                </p>
                <p className="">
                  <span className="linear-color bg-clip-text text-transparent">Usage Time</span>: 3
                  Month
                </p>
              </div>
              <div className="border mt-3 mb-6"></div>
              <p className="text-[#969A9D] font-medium">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
              </p>
            </div>
          </div>
          <div className="w-[800px] space-y-6">
            <div>
              <Link onClick={() => navigate(-1)} className="flex items-center gap-4">
                <FaArrowLeftLong />
                Back to Products
              </Link>
              <h2 className="font-bold text-5xl my-4">{title}</h2>
              <p className="bg-linear-to-r from-[#632EE3]/20 to-[#9F62F2]/20 rounded-full inline-block px-2.5 py-0.5 text-[#632EE3] text-sm">
                Art and Hobbies
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-[#4CAF50] text-[28px] font-bold mb-2">$22.5 - 30</p>
              <p className="text-[#001931]">Price starts from </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h5 className="text-2xl font-semibold mb-6">Product Details</h5>
              <p className="text-[#001931]">
                <span className="font-semibold">Product ID</span>: 68f753ae2174ca368ec882f4
              </p>
              <p>
                <span className="font-semibold">Posted</span>: 10/19/2024
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Seller Information</h3>
              <div className="flex items-center gap-1.5 mb-4">
                <div className="bg-gray-500 w-10 h-10 rounded-full"></div>
                <div>
                  <p className="font-semibold">Sara Chen</p>
                  <p className="text-sm">crafts.by.sara@shop.net</p>
                </div>
              </div>
              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Location:</span> Los Angeles, CA
                </p>
                <p>
                  <span className="font-semibold">Contact:</span> sara.chen_contact
                </p>
                <p>
                  <span className="font-semibold">Status:</span>{' '}
                  <span className="bg-[#FFC107] rounded-full py-0.5 px-2 text-xs">on Sale</span>
                </p>
              </div>
            </div>
            <div className="">
              <button
                onClick={handleBidModalOpen}
                className="btn linear-color w-full text-white font-semibold"
              >
                I want Buy This Product
              </button>

              {/* Open the modal using document.getElementById('ID').showModal() method */}

              <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle max-h-screen">
                <div className="modal-box flex justify-center items-center max-w-[700px]">
                  <div>
                    <form onSubmit={handleBidSubmit} className="mx-auto">
                      <h3 className="font-bold text-lg text-center">
                        Give Seller Your Offered Price!
                      </h3>
                      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                        <div className="card-body">
                          <fieldset className="fieldset space-y-3.5">
                            <div className="flex gap-3">
                              <div>
                                <label className="label mb-1.5">Buyer Name</label>
                                <input
                                  type="email"
                                  className="input"
                                  name="name"
                                  placeholder="Your Name"
                                  defaultValue={user && user.displayName}
                                  readOnly
                                />
                              </div>
                              <div>
                                <label className="label mb-1.5">Buyer Email</label>
                                <input
                                  type="email"
                                  className="input"
                                  name="email"
                                  placeholder="Your Email"
                                  defaultValue={user?.email}
                                  readOnly
                                />
                              </div>
                            </div>
                            <div>
                              <label className="label mb-1.5">Buyer Image URL</label>
                              <input
                                type="text"
                                name="photoUrl"
                                className="input w-full"
                                placeholder="https://...your_img_url"
                              />
                            </div>
                            <div>
                              <label className="label mb-1.5">Place your Price</label>
                              <input
                                type="text"
                                name="bid"
                                className="input w-full"
                                placeholder="e.g. Artisan Roasters"
                                required
                              />
                            </div>
                            <div>
                              <label className="label mb-1.5">e.g. +1-555-1234</label>
                              <input
                                type="text"
                                className="input w-full"
                                placeholder="e.g. +1-555-1234"
                              />
                            </div>

                            <div className="flex items-center justify-end gap-4 mt-10">
                              <div className="modal-action mt-0!">
                                <form method="dialog">
                                  {/* if there is a button in form, it will close the modal */}
                                  <button className="btn border border-[#632EE3] bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                                    Cancel
                                  </button>
                                </form>
                              </div>
                              <button className="btn linear-color text-white">Submit Bid</button>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Bids Display */}
      <div className="max-w-[1230px] mx-auto pt-20">
        <h2 className="text-2xl font-semibold mb-10">
          Bids For This Products:{' '}
          <span className="linear-color bg-clip-text text-transparent">{bids.length}</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Buyer Bids</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <tr key={bid._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{bid.buyer_email}</td>
                  <td>{bid.bid_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            {/* <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
