import React,{useState, useEffect} from 'react'
import ProductsSection from '../components/ProductsSection'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
//import { Link } from 'gatsby'
import './checkbox.css'

export const data = graphql`
  {
    products: allProducts{
     edges {
        node {
          id
          slug
          categories
          model
          previewImg
          description
          category
        }
      }
    }
  }
`

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

const ProductsSectionTemplate = ({ data }) => {
  
  const [products, setProducts ] = useState([])
 
  const [product, setProduct ] = useLocalStorage(product, '')
  
   function handleChangeProduct (e) {
      setProduct(e.target.value);
   };

  function getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  }
  
  useEffect(()=>{
    const productsList = data.products.edges.map( product => ({
      ...product.node,
       previewImg: product.node.previewImg,
       category:product.node.category,
       categories:product.node.categories
    }))
    setProducts(productsList)
  },[data])
  
  const uniqueProduct = getUnique(products, 'category')
  
  const filterDropdown = products.filter(result => result.category === product)
  
  return(
    <Layout>

      <h1>Productos</h1>

        <h4 className="title">Filtrar Productos:</h4>
        <div className="filters">
         {uniqueProduct.map(product => (    
             <label key={product.id}>
                <input
                      className='filters-available-size'
                      type="checkbox"
                      value={product.category}
                      onChange={handleChangeProduct}
                   />
                   <span className="checkmark">
                       {product.category}
                   </span>
             </label>
          ))}
        </div>
        
        {!!filterDropdown.length && (
          <div>
             <p>{product}</p>
             <ProductsSection products={filterDropdown}/>
          </div>
        )}
        {!!products.length && !filterDropdown.length && (
          <div>
            <p>Categorias</p>
            <ProductsSection products={uniqueProduct}/>
          </div>
        )}

    </Layout>
  )
}

export default ProductsSectionTemplate