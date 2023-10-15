import { Fragment, useRef, useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { UsersIcon, GlobeAmericasIcon, PencilSquareIcon, MicrophoneIcon, PhotoIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import WomenTalking from '@/images/women_talking.jpg';
import ContactForm from '@/components/ContactForm/contact'

const navigation = [
  { name: 'Client Solutions', href: 'client-solutions' },
  { name: 'About us', href: 'about' },
  { name: 'Career Opportunities', href: 'career' },
]

const features = [
  {
    name: 'Translation',
    description:
      'We provide professional translation services for documents, websites, marketing materials, legal documents, and more. Our team of experienced translators are fluent in Haitian Creole and English and can help you communicate your message accurately and effectively.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Interpretation',
    description:
      'We offer both onsite and remote interpretation services for meetings, conferences, and events. Our team of skilled interpreters can provide simultaneous or consecutive interpretation to ensure effective communication between speakers of the Haitian Creole and English languages.',
    icon: UsersIcon,
  },
  {
    name: 'Localization',
    description:
      'We help businesses adapt their products, services, and marketing materials for specific target markets by providing cultural and linguistic adaptation services. This includes translating and adapting content, images, and design elements to ensure they resonate with the target audience.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Transcription',
    description:
      'We offer transcription services for audio and video recordings in Haitian Creole. Our team of expert transcribers can accurately transcribe your content, including translating it into Haitian Creole if required.',
    icon: MicrophoneIcon,
  },
]

const aboutUs = [
  {
    name: 'Vision',
    description:
      'Empowering You and the Haitian Creole speakers with seamless language access, fostering effective communication without linguistic barriers.',
  },
  {
    name: 'Mission',
    description:
      'Providing tailored Haitian Creole language solutions for individuals, businesses, and organizations across diverse sectors, including Healthcare, Legal Justice, and Education.',
  },
  {
    name: 'Purpose',
    description:
      'Bridging language gaps within the Haitian Creole community and empowering language access for clients by unleashing the power of communication.',
  },
]

const footer = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Client Solutions', href: '#' },
    { name: 'Career Opportunities', href: '#' },
  ]
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openContactForm, setOpenContactForm] = useState(false)
  const cancelButtonRef = useRef(null)


  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="text-4xl font-bold leading-6 text-gray-900">
                Translucid
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center lg:justify-end rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 items-center lg:justify-end">
            <div className="hidden lg:flex lg:gap-x-12 px-6 whitespace-nowrap">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex">
                <a
                  href="#"
                  className="rounded-md bg-blue-950 mx-4 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 whitespace-nowrap"
                  onClick={() => setOpenContactForm(true)}
                >
                  Contact us
                </a>
            </div>
            <div className="flex">
                <a
                  href="#"
                  className="rounded-md bg-white px-8 py-3 text-md font-semibold bg-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Login
                </a>
            </div>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Translucid</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate pt-4 lg:pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="lg:mx-0 grid lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering You Through Language Access
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600"> 
              We specialize in Haitian Creole translation, interpretation, transcription and localization,
              offering a seamless bridge between cultures and languages like never before.
              </p>
              <div className="mt-10 flex gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-blue-950 px-7 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  onClick={() => setOpenContactForm(true)}
                >
                  Get in touch
                </a>
              </div>
            </div>
            <div>
              {/* Illustration taken from pch.vector on Freepik: https://lucid.pixsellz.io/ */}
              <Image src={WomenTalking} alt="Women talking" />
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={openContactForm} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenContactForm}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <ContactForm></ContactForm>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
                    onClick={() => setOpenContactForm(false)}
                  >
                  {`Submit`}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Client Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Translucid Languages, our client-centric approach involves understanding your distinct 
            requirements, objectives, and brand identity to provide tailored solutions aligned with your vision. 
            Our commitment to meticulous care and confidentiality ensures your projects are in trusted hands.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="bg-slate-100 my-10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Us
            </h2>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16">
              {aboutUs.map((items) => (
                <div key={items.name}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {items.name}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600">{items.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-2xl pt-20 sm:pt-32 lg:pt-24 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {`We're Hiring!`}
        </h2>
        <p className="my-6 text-lg leading-8 text-gray-600">
          {`Join our team! We're actively seeking talented translators and interpreters to shape language excellence with us.`}
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto my-16 max-w-xl sm:mt-12">
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
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
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
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
              Resume
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PDF, DOC, DOCX, TXT, RTF</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
          >
            {`Submit`}
          </button>
        </div>
      </form>

      <footer className="bg-slate-100 mt-8">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-14 lg:px-8">
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Translucid, Inc. All rights reserved.
          </p>
        </div>
    </footer>
    </div>
  )
}