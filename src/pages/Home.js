import {Link, useNavigate} from 'react-router-dom';


function HomePage (){
    const navigate = useNavigate();
    const navigateHandler = () =>{
        navigate('products');
    };

    return (
      <div>
          <h1>My Home page</h1>
          <p>Go to <Link to={'products'}> products</Link></p>
          <button onClick={navigateHandler}>Navigate</button>
      </div>
      )

}

export default HomePage;
