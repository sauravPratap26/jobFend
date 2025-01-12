const Footer = () => {
    return (
      <footer className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        {/* Wavy Background */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden h-10 -z-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96L60,101.3C120,107,240,117,360,122.7C480,128,600,128,720,112C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              fill="#ffffff33"
            />
          </svg>
        </div>
  
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Job Hunt</h2>
              <p className="text-sm mb-4">
                Your trusted partner in finding the perfect job for your dream
                career. Join us and explore opportunities that fit you.
              </p>
              <p className="text-sm">© 2024 Job Hunt. All rights reserved.</p>
            </div>
  
            {/* Newsletter Signup */}
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
              <p className="mb-4 text-sm">
                Subscribe to our newsletter for updates on new job postings and
                career tips.
              </p>
              <div className="flex items-center w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-full w-full text-gray-800 outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-2 rounded-r-full font-medium transition-all">
                  Subscribe
                </button>
              </div>
            </div>
  
            {/* Social Media Links */}
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <p className="mb-4 text-sm">Connect with us on social media:</p>
              <div className="flex space-x-6">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="hover:scale-125 transition-transform"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
                  </svg>
                </a>
  
                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="hover:scale-125 transition-transform"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" />
                  </svg>
                </a>
  
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="hover:scale-125 transition-transform"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  