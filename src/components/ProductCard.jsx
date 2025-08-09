import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddProduct }) => {
  console.log(product);

  return (
    <div
      id={product.id}
      key={product.id}
      className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
    >
      <div className="card text-left h-100">
        <img
          className="card-img-top p-3"
          src={product.image}
          alt={product.title}
          style={{
            height: '300px',
            width: '100%',
            objectFit: 'contain',
          }}
        />
        <div className="card-body mb-2">
          <h5 className="card-title mb-2">
            {product.title.substring(0, 12)}...
          </h5>
          <p className="card-text small text-muted">
            {product.description.substring(0, 90)}...
          </p>

          <p className="font-weight-bold">${product.price}</p>

          <select
            className="form-select mb-3"
            style={{
              boxShadow: 'none',
              outline: 'none',
            }}
          >
            <option>Select variant</option>
            <option value="variant1">Variant 1</option>
            <option value="variant2">Variant 2</option>
            <option value="variant3">Variant 3</option>
          </select>

          <Link to={`/product/${product.id}`} className="btn btn-dark m-1">
            Buy Now
          </Link>
          <button
            className="btn btn-outline-dark m-1"
            onClick={() => {
              toast.success('Added to cart');
              onAddProduct();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
