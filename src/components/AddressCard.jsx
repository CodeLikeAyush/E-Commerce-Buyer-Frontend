const AddressCard = ({ address, activeAddressId, handleSelect }) => {
  const { addressId, username, city, state, pincode, addressInfo, mobile } =
    address;

  const isActiveAddress = addressId === activeAddressId;

  const addressCardStylingClass =
    "h-32 w-full md:w-3/4  shadow-xl p-3 m-4 rounded-md text-left transition-transform transform duration-150 ease-in-out relative";
  const selectedAddressCardStylingClass = "bg-blue-500 text-white";
  const radioStylingClass = "w-6 h-6 absolute top-3 right-3 cursor-pointer";

  return (
    <div
      className={
        isActiveAddress
          ? `${addressCardStylingClass} ${selectedAddressCardStylingClass}`
          : addressCardStylingClass
      }
    >
      <label
        htmlFor={addressId}
        className="absolute h-full w-full cursor-pointer"
      >
        <h4 className="mx-5 font-bold text-2xl mb-2">{username}</h4>
        <span className="mx-5">
          {addressInfo}, {city}, {state},
        </span>
        <span className="font-semibold"> Pincode -</span>
        <span>{pincode}</span>

        <span className="mx-5 block font-bold">
          <span>Mobile: </span>
          <span> {mobile}</span>
        </span>
      </label>

      <input
        type="radio"
        name="address"
        id={addressId}
        checked={isActiveAddress}
        onChange={() => handleSelect(addressId)}
        className={radioStylingClass}
      />
    </div>
  );
};

export default AddressCard;
