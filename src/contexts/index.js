import combinedContext from 'react'

import {CartContext} from './CartContext'
import {ProductContext} from './ProductContext'

const rootContext = combinedContext({
    CartContext,
    ProductContext
})

export default rootContext;