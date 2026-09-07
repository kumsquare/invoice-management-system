'use client'
import { Link } from 'react-router-dom'
import TextType from '../components/hero/text-type'

const Hero = () => {
  return (
    <div className="bg-white">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-3xl py-16 sm:py-20 lg:py-15">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="font-mono font-semibold relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <h1 className="font-mono text-3xl !text-indigo-600 font-bold tracking-tight text-gray-900 sm:text-4xl">
                  <TextType
                  text={["Manage your invoices", "Track your payments", "Stay organized"]}
                  />
                </h1>
            </div>
          </div>
          <div className="text-center">
            <h2 className="font-mono text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl ">
              Manage Your Invoices Smarter
            </h2>
            <div className="mt-6 flex items-center justify-center gap-x-6 ">
              <p className="p-4 font-mono m-10 mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 ring-1 ring-gray-900/10 hover:ring-gray-900/20 rounded-sm">
                Create, track, and manage your invoices in one simple dashboard.
              </p>
              <p className="p-4 font-mono m-10 mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 ring-1 ring-gray-900/10 hover:ring-gray-900/20 rounded-sm">
                Stay on top of payments, pending amounts, and overdue invoices with ease.
              </p>
            </div>
            <div className="font-mono mt-10 flex items-center justify-center gap-x-6">
              <Link to="/dashboard" className="text-xl rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" > 
                Get started 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;