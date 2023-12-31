import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Contact() {
    return (
        <form action="#" method="POST" className="z-50 mx-auto mt-4 max-w-xl sm:mt-2">
            <div className="text-center mb-5">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Contact our team
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
                </label>
                <div className="mt-2.5">
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Company
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                What industry in your company in?
              </label>
              <div className="mt-2">
                <select
                  id="industry"
                  name="industry"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                >
                  <option>Healthcare</option>
                  <option>Legal</option>
                  <option>Insurance</option>
                  <option>Financial Services</option>
                  <option>Government</option>
                  <option>Education</option>
                  <option>Personal</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone number
                </label>
                <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">Country</label>
                    <select
                        id="country"
                        name="country"
                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                    >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                    </select>
                    <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                    />
                </div>
                <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
                </label>
                <div className="mt-2.5">
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
                </div>
            </div>
            </div>
      </form>
    )
}