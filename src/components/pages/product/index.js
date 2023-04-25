import React from 'react'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import ProductCard from './../../atoms/ProductCard';
import { addWishList } from '../../../redux/sliceData'

function ProductPage({ }) {
  const productList = useSelector((state) => state.data.productList)
  const dispatch = useDispatch()
  const addTocartFun = (v) => {
    dispatch(addWishList(v))


  }

  return (
    <div className="container">

      <div className=' row productlistbox'>
        {productList.map((v, i) => {
          return (<div className='col-sm-12'>
            <ProductCard data={v} addTocartFun={() => { addTocartFun(v) }} />

          </div>)
        })}

      </div>
    </div>
  )
}

export default ProductPage
