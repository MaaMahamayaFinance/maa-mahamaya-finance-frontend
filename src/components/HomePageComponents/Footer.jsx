const Footer = () => {

    return (

        <footer className="cursor-pointer bg-gray-100 text-gray-700 mt-20">
            <div className="cursor-pointer max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                <h3 className="cursor-pointer text-lg font-semibold mb-3">Support</h3>
                <ul className="cursor-pointer space-y-2 text-sm">
                    <li>
                    <a className="cursor-pointer hover:underline">Help Center</a>
                    </li>
                    <li>
                    <a className="cursor-pointer hover:underline">Contact Us</a>
                    </li>
                    <li>
                    <a className="cursor-pointer hover:underline">FAQs</a>
                    </li>
                    <li>
                    <a className="cursor-pointer hover:underline">Terms & Conditions</a>
                    </li>
                    <li>
                    <a className="cursor-pointer hover:underline">Privacy Policy</a>
                    </li>
                </ul>
                </div>
                <div>
                <h3 className="cursor-pointer text-lg font-semibold mb-3">Company</h3>
                <ul className="cursor-pointer space-y-2 text-sm">
                    <li><a className="cursor-pointer hover:underline">About Us</a></li>
                    <li><a className="cursor-pointer hover:underline">Careers</a></li>
                    <li><a className="cursor-pointer hover:underline">Blog</a></li>
                </ul>
                </div>

                <div>
                <h3 className="cursor-pointer text-lg font-semibold mb-3">Products</h3>
                <ul className="cursor-pointer space-y-2 text-sm">
                    <li><a className="cursor-pointer hover:underline">Personal Loans</a></li>
                    <li><a className="cursor-pointer hover:underline">Health Insurance</a></li>
                    <li><a className="cursor-pointer hover:underline">Home Loan</a></li>
                    <li><a className="cursor-pointer hover:underline">Car Insurance</a></li>
                    <li><a className="cursor-pointer hover:underline">Credit Cards</a></li>
                    <li><a className="cursor-pointer hover:underline">Loan Against Property</a></li>
                </ul>
                </div>

                <div>
                <h3 className="cursor-pointer text-lg font-semibold mb-3">Connect</h3>
                <ul className="cursor-pointer space-y-2 text-sm">
                    <li><a className="cursor-pointer hover:underline">Facebook</a></li>
                    <li><a className="cursor-pointer hover:underline">Twitter</a></li>
                    <li><a className="cursor-pointer hover:underline">LinkedIn</a></li>
                </ul>
                </div>
            </div>
            <div className="cursor-pointer border-t border-gray-300 text-center py-4 text-sm text-white bg-gray-800">
                Handcrafted with Love<span className="cursor-pointer text-red-500">❤️</span> in Bharat
            </div>
        </footer>
    );
};

export default Footer;
