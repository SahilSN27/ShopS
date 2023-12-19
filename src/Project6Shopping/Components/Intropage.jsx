import './Intropage.css'
import { Link } from 'react-router-dom'
import Data from '../Data'
const Intro = ({handleClick}) =>{
    return(
        <section id='sec'>
            <div className='main'>
                <div className='SN'>
                <div className='SN1'>
                    <Link to='/'><button>Shop Now</button></Link>
                </div>
                </div>
            </div>
            <div className='main2'>
                
            </div>
            <div id='offers'>
                <div><img src="https://www.bustedtees.com/cdn/shop/files/5_10_1512x.jpg?v=1614698543" alt="" /></div>
                <div><img src="https://www.bustedtees.com/cdn/shop/files/11_3_1512x.jpg?v=1614699072" alt=""/></div>
                <div><img src="https://i.pinimg.com/originals/87/b0/2b/87b02b25551236024b9142260e908afe.jpg" alt="" /></div>
                <div><img src="https://www.bustedtees.com/cdn/shop/files/Sci-Fi_1512x.jpg?v=1625586190" alt="" /></div>
                <div><img src="https://www.bustedtees.com/cdn/shop/files/BTHats_540x.jpg?v=1616758164" alt="" /></div>
                <div><img src="https://www.bustedtees.com/cdn/shop/files/11_3_1512x.jpg?v=1614699072" alt="" height={'450px'} width={'300px'}/></div>
            </div>
            <h2></h2>
            <div id='product'>
                {Data.map((item) => { 
                    return(
                        <div className='card'>
                           <Link to={`/about/${item.id}`}><img src={item.image} alt="" height={'200px'} width={'200px'}/></Link>
                            <div>{item.title}</div>
                            <div>Price: ${item.price}</div>
                            <div>Rating: {item.rating.rate}⭐</div>
                            <button onClick={()=>handleClick(item)}>Add Cart</button>
                        </div>
                    )
                } )}
            </div>
            <footer>
                <div id='box1'>
                    <img  src="https://dwglogo.com/wp-content/uploads/2016/02/Amazoncom-yellow-arrow.png" height={'64px'} width={'150px'} alt="" />
                    <p>Men: Shirts for Men / Casual Shirts for Men / Formal Shirts for Men / Hoodies for Men / Cotton Shirts for Men</p>
                    <p>Women: Tops for Women / Kurti / Cotton Sarees / Georgette Sarees / Chiffon Sarees / Net Sarees / Dresses for Women / Jumpsuit for Women</p>
                    <p>Jewelery: Diamond Bracelets,Brass Pendents,Diammond Earrings</p>
                    <p>Electronics: Bluetooth Speakers / Headphones / Earphone / Ceiling Fan / Geysers </p>
                    <div>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div id='box2'>
                    <table>
                        <thead>
                           <tr>
                                <td>Discover</td> 
                                <td>Community</td>
                                <td>About</td>
                           </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Editor's Choice</td>
                                <td>Blog</td>
                                <td>About Us</td>
                            </tr>
                            <tr>
                                <td>Curated Collections</td>
                                <td>Forum</td>
                                <td>FAQ</td>
                            </tr>
                            <tr>
                                <td>Radio</td>
                                <td>Creators</td>
                                <td>License Summary</td>
                            </tr>
                            <tr>
                                <td>Popular Image</td>
                                <td>Camera</td>
                                <td>Terms of Service</td>
                            </tr>
                            <tr>
                                <td>Popular Videos</td>
                                <td></td>
                                <td>Privacy Policy</td>
                            </tr>
                            <tr>
                                <td>Popular Music</td>
                                <td></td>
                                <td>Cookies Policy</td>
                            </tr>
                            <tr>
                                <td>Popular Searches</td>
                                <td></td>
                                <td>API</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </footer>
        </section>
    )
}
export default Intro