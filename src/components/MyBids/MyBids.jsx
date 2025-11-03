import { use, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  // console.log(bids);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log('', data);
          setBids(data);
        });
    }
  }, [user?.email]);

  const handleRemoveBid = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bids/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your bid has been deleted.',
                icon: 'success',
              });

              //
              const remainingBids = bids.filter((bid) => bid._id !== _id);
              setBids(remainingBids);
            }
          });
      }
    });
  };

  return (
    <div className="py-10">
      <div className="max-w-[1230px] mx-auto">
        <h2>My Bids {bids.length}</h2>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>SL No</th>
                <th>Image</th>
                <th>Product name</th>
                <th>Cetagory</th>
                <th>Bid Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <tr>
                  <th>
                    <label>{index + 1}</label>
                  </th>
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
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                  </td>
                  <td></td>
                  <td>{bid.bid_price}</td>
                  <td>
                    <td>
                      {bid.status === 'pending' ? (
                        <div className="badge badge-warning">{bid.status}</div>
                      ) : (
                        <div className="badge badge-success">{bid.status}</div>
                      )}
                    </td>
                  </td>
                  <th>
                    <button
                      onClick={() => handleRemoveBid(bid._id)}
                      className="btn btn-outline btn-xs"
                    >
                      Remove Bid
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBids;
