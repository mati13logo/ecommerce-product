import React, { useState } from 'react'
import imgIcon2 from '../images/image-product-2.jpg'
import imgIcon3 from '../images/image-product-3.jpg'
import imgIcon4 from '../images/image-product-4.jpg'
import imgIcon1 from '../images/image-product-1.jpg'
import s from '../css/Card.module.css'
import Cart from '../icons/Cart.tsx'

export const Card = () => {
    const image = [imgIcon1, imgIcon2, imgIcon3, imgIcon4]
    const [state, setState] = useState(image[0])

    return (
        <div className={s.conteiner}>
            <div className={s.images}>
                <img className={s.imgPrincipal} src={state} />
                <div className={s.conteinerIcons}>
                    {image?.map(el =>
                        { return el === state ?
                                <img
                                onClick={() => setState(el)}
                                className={s.iconSelect}
                                src={el}
                                key={el}
                                alt={el}
                                />
                        :
                        <img
                                onClick={() => setState(el)}
                                className={s.icon}
                                src={el}
                                key={el}
                                alt={el}
                                />
                        }
                    
                    )}
                </div>
            </div>
            <div className={s.text}>
                <h4>SNEAKER COMPANY</h4>
                <h2>Fall Limite Edition Sneaker</h2>
                <p>These low-profile sneakers are your perfect casual wear companion. featuring a durtable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className={s.displayFlex}>
                    <h3 className={s.price}>$125.00</h3><h3 className={s.priceDescuento}>50%</h3>
                </div>
                <h3 className={s.tachado}>$250.00</h3>
                <div className={s.conteinerButtons}>
                    <div className={s.count}>
                        <button >-</button>
                        <input placeholder='0' variant='unstyled'></input>
                        <button variant='link'>+</button>
                    </div>
                    <div className={s.conteinerCart}>
                        <button className={s.buttonAdd}><Cart />Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
