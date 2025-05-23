import Productcard from "../../Components/Productcard/Productcard";
import Spinner from "../../icons/Spinner";

function Productcards({ products }) {
  if (!products) {
    console.log("No products");
  } else {
    products.forEach((product) => {
      console.log("product.id:", product.id);
      console.log("product.image:", product.image);
      console.log("product.images or imageArray:", product.images || product.imageArray);
    });
  }

  return (
    <div className="flex flex-wrap justify-around items-center w-full sm:w-full lg:w-60vw xl:w-60vw">
      {products && Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <Productcard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            realPrice={product.realPrice}
            color={product.color}
            specifications={product.specifications}
            stock={product.stock}
            category={product.category}
            brand={product.brand}
            deleted={product.deleted}
            images={product.image}
            discount={product.discount}
          />
        ))
      ) : (
        <div><Spinner /></div>
      )}
    </div>
  );
}

export default Productcards;
