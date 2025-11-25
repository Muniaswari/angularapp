import { CheckIcon } from './CheckIcon'

const PricingCard = () => {
  const features = [
    'Unlimited Projects',
    '24/7 Customer Support',
    'Advanced Analytics',
    'Custom Integrations',
    'Priority Processing',
    'White-label Solution'
  ]

  return (
    <div className='card p-8 relative overflow-hidden animate-bounce-in'>
      {/* Background decoration */}
      <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-primary-700/10 rounded-full -translate-y-16 translate-x-16'></div>
      
      {/* Popular badge */}
      <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
        <div className='bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg'>
          Most Popular
        </div>
      </div>
      
      {/* Plan header */}
      <div className='text-center mb-8 pt-4'>
        <h3 className='text-2xl font-bold text-gray-800 mb-2'>Professional</h3>
        <div className='mb-4'>
          <span className='text-5xl font-bold text-primary-600'>$49</span>
          <span className='text-gray-600 text-lg'>/month</span>
        </div>
        <p className='text-gray-600'>
          Perfect for growing businesses and teams that need advanced features.
        </p>
      </div>
      
      {/* Features list */}
      <div className='space-y-4 mb-8'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-center space-x-3'>
            <div className='flex-shrink-0'>
              <CheckIcon className='w-5 h-5 text-primary-500' />
            </div>
            <span className='text-gray-700 font-medium'>{feature}</span>
          </div>
        ))}
      </div>
      
      {/* CTA Button */}
      <button className='btn-primary w-full text-lg'>
        Get Started Today
      </button>
      
      {/* Money back guarantee */}
      <div className='text-center mt-4'>
        <p className='text-sm text-gray-500'>
          30-day money back guarantee
        </p>
      </div>
    </div>
  )
}

export default PricingCard