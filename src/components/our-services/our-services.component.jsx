import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import PropertySales from '../our-services/property-acquisition.ico'

const features = [
  {
    name: 'Property Acquisition',
    description: 'With credibility and expertise as watch-words, we lead you through from finding the right property to your owning the same problems without any hassles.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Property Sales',
    description: 'You sit back as we create and ensure a suitable platform for all kinds of property sales that fits your profile and financial options',
    icon: ScaleIcon,
  },
  {
    name: 'Property Brokerage',
    description:
      '',
    icon: BoltIcon,
  },
  {
    name: 'Facility Management',
    description:
      '',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

export default function OurServices() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            OUR SERVICES
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          With us, you can explore all things property!. It is always a 'you-first' engagement!. Your Satisfaction First!. 
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
