import ProductContainer from "../components/ProductContainer";
import { Link } from "react-router-dom";
import useProduct from "../utils/usePorduct";
import Loader from "../components/Loader";
import { useState } from "react";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const { products, totalProducts } = useProduct(
    productsPerPage,
    (currentPage - 1) * productsPerPage
  );

  if (products.length == 0) {
    return <Loader />;
  }

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {products.length === 0 ? (
        <Loader />
      ) : (
        <div className="body">
          <div className="p-4">
            <div className="relative rounded-full px-3 py-2 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <h1>
                <b>Products</b>
              </h1>
            </div>
          </div>

          <div className="p-4">
            <div className="relative rounded-xl px-3 py-2 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <div className="flex flex-wrap">
                {" "}
                {products &&
                  products.map((product) => (
                    <Link to={`./products/${product.id}`} key={product.id}>
                      <ProductContainer data={product} />
                    </Link>
                  ))}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-3 py-1 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
