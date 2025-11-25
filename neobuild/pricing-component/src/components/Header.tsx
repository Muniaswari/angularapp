const Header = () => {
  return (
    <header className='bg-white shadow-sm border-b border-gray-200'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>P</span>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-gray-800'>PricingPro</h1>
              <p className='text-sm text-gray-600'>Simple. Transparent. Affordable.</p>
            </div>
          </div>
          
          <nav className='hidden md:flex items-center space-x-8'>
            <a href='#features' className='text-gray-600 hover:text-primary-600 transition-colors font-medium'>
              Features
            </a>
            <a href='#pricing' className='text-gray-600 hover:text-primary-600 transition-colors font-medium'>
              Pricing
            </a>
            <a href='#about' className='text-gray-600 hover:text-primary-600 transition-colors font-medium'>
              About
            </a>
            <a href='#contact' className='text-gray-600 hover:text-primary-600 transition-colors font-medium'>
              Contact
            </a>
            <button className='bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'>
              Sign In
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <button className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'>
            <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header