import Header from './components/Header'
import PricingSection from './components/PricingSection'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      <Header />
      <main>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in'>
              Choose Your Plan
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up'>
              Get started with our premium service and unlock all the features you need to succeed.
            </p>
          </div>
          <PricingSection />
        </div>
      </main>
    </div>
  )
}

export default App