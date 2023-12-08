import { useParams, Link} from 'react-router-dom';


function ProductDetailPage () {
    const params = useParams();

    // params.productId productId - name defined on router
//<p><Link to = ".." relative='route' >Back</Link></p> //  to = ".." - go one level up, relatively to rout definition,  thus it will go to '/'
    // <p><Link to = ".." relative='path'>Back</Link></p> // relative to current active path
    return (
      <>
          <h1> Product Details!</h1>
          <p>{params.productId}</p>
          <p><Link to = ".." relative='path'>Back</Link></p>
      </>
    );

}

export default ProductDetailPage;
