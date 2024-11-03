import Image from "next/image"
import Search from"../images/Search.png"
import fav from "../images/Favorites.png"
import user from "../images/User.png"
import cart from "../images/Cart.png"
import Link from "next/link"
export default function Header(){
    return(
        <>
       <nav className=" px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="text-2xl font-bold">
          
            <h1>cyber</h1>
          
        </div>

        <div className="flex space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact"className="hover:text-gray-300">Contact Us</Link>
          <Link href="/blog" className="hover:text-gray-300">Blog</Link>
        </div>

        <div className="flex items-center space-x-4">
        <Image src={Search} alt="Search icon" width={24} height={24} />
        <Image src={fav} alt="fav icon" width={24} height={24} />
        <Image src={user} alt="user icon" width={24} height={24} />
        <Image src={cart} alt="cart icon" width={24} height={24} />
         
        </div>
      </div>
    </nav>
        </>
    );
}