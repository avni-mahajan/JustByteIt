import playstore from "../utils/images/playstore.png"
import applestore from "../utils/images/applestore.png"
import logo from "../utils/images/logo.png"

const Footer = () => {
    return (
        <div className="bg-pink-50 flex flex-col pb-10 ">
            <div className="flex  mx-64">
                <h1 className="font-extrabold text-xl mt-10 mr-3 text-pink-600">For better experience,download the JustByteIt app now</h1>
                <img  className = "w-52 h-20 mt-4 hover:cursor-pointer" src = {playstore}/>
                <img className = "w-52 h-14 mt-7 hover:cursor-pointer"  src = {applestore}/>
            </div>
            <div className="flex mx-64 mt-14 flex-row gap-x-6">
                <div className="">
                    <img className ="w-36 ml-5" src={logo} />
                    <h1 className="mt-2 font-medium ">© 2024 JustByteIt Limited</h1>
                </div>
                <div className=" mt-10">
                    <h1 className="font-bold text-2xl text-slate-600">Company</h1>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer text-slate-400">About Us</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">JustByteIt Corporate</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">Careers</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">Team</h2>
                </div>
                <div className="mt-10">
                    <h1 className="font-bold text-2xl text-slate-600">Contact us</h1>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer text-slate-400">Help & Support</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">Partner with us</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">Ride with us</h2>
                </div>
                <div className=" mt-10">
                    <h1 className="font-bold text-2xl text-slate-600">Also available in:</h1>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer text-slate-400">Bangalore</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">Gurgaon</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">Hyderabad</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">Delhi</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">Mumbai</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">Pune</h2>
                </div>
                <div className="mt-10">
                    <h1 className="font-bold text-2xl text-slate-600">Life at JustByteIt</h1>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer text-slate-400">Explore with Swiggy</h2>
                    <h2 className="font-medium text-lg mt-1 hover:cursor-pointer  text-slate-400">Snackables</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;
