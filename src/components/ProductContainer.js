const ProductContainer = (props) => {
  const { thumbnail, title, price } = props.data;

  return (
    <div className="m-4 p-4 w-[250px] hover:bg-gray-200">
      <img className="rounded-lg" alt="rest-img" src={thumbnail} />
      <h3 className="font-bold py-2 text-xl">{title}</h3>
      <p>{price} $</p>
    </div>
  );
};

export default ProductContainer;
