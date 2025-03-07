import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-pink-50 to-purple-50 py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">
              Plan Your Perfect Wedding Day
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl">
              Our comprehensive suite of planning tools helps you create the wedding of your dreams without the stress.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/register" 
                className="px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors font-medium"
              >
                Start Planning Now
              </Link>
              <Link 
                href="/features" 
                className="px-6 py-3 bg-white text-pink-600 border border-pink-600 rounded-md hover:bg-pink-50 transition-colors font-medium"
              >
                Explore Features
              </Link>
            </div>
          </div>
          <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://source.unsplash.com/1600x900/?wedding,couple,happy"
              alt="Happy couple on their wedding day"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Everything You Need for Your Special Day</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Our platform brings all your wedding planning needs together in one place
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Planning Tools</h3>
              <p className="text-gray-600">
                Manage your budget, guest list, seating arrangements, and timeline all in one place. Stay organized from engagement to &ldquo;I do.&rdquo;
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Vendor Directory</h3>
              <p className="text-gray-600">
                Find and connect with the best photographers, caterers, venues, and more. Read reviews and book vendors with confidence.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">RSVP Management</h3>
              <p className="text-gray-600">
                Easily track guest responses, meal preferences, and plus-ones. Send digital invitations and manage everything online.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Countdown & Reminders</h3>
              <p className="text-gray-600">
                Never miss an important deadline with customized reminders and a wedding countdown that keeps you on track throughout your planning journey.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Wedding Website</h3>
              <p className="text-gray-600">
                Create a beautiful, personalized wedding website to share your love story, provide event details, and manage RSVPs all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Wedding Inspiration Gallery</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Browse our collection of beautiful wedding moments for inspiration
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Gallery Images */}
            <div className="grid gap-4">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/800x1200/?wedding,ceremony"
                  alt="Wedding ceremony"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/800x600/?bride,groom"
                  alt="Bride and groom"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/800x600/?wedding,rings"
                  alt="Wedding rings"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/800x1200/?wedding,venue"
                  alt="Wedding venue"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/800x1200/?wedding,cake"
                  alt="Wedding cake"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/800x600/?wedding,decorations"
                  alt="Wedding decorations"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/800x600/?wedding,flowers"
                  alt="Wedding flowers"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://source.unsplash.com/800x1200/?wedding,reception"
                  alt="Wedding reception"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link 
              href="/gallery" 
              className="px-6 py-3 bg-white text-pink-600 border border-pink-600 rounded-md hover:bg-pink-50 transition-colors font-medium"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="w-full py-16 px-4 bg-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Planning Your Dream Wedding?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of couples who have planned their perfect day with our tools.
          </p>
          <Link 
            href="/register" 
            className="px-8 py-4 bg-white text-pink-600 rounded-md hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Create Your Free Account
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">What Our Couples Say</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from couples who planned their weddings with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {/* 5 stars */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &ldquo;This platform made wedding planning so much easier! We were able to manage our guest list, track RSVPs, and stay on budget all in one place.&rdquo;
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://source.unsplash.com/100x100/?woman,man,couple"
                    alt="Sarah & Michael"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Sarah & Michael</p>
                  <p className="text-gray-500 text-sm">Married June 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {/* 5 stars */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &ldquo;I loved the vendor directory! We found our photographer, DJ, and florist all through this website and they were all amazing. The reviews were so helpful.&rdquo;
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://source.unsplash.com/100x100/?bride,groom"
                    alt="Jessica & David"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Jessica & David</p>
                  <p className="text-gray-500 text-sm">Married September 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {/* 5 stars */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                &ldquo;The seating chart tool saved us so much time and stress! Being able to drag and drop guests at different tables was a game-changer.&rdquo;
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://source.unsplash.com/100x100/?wedding,couple"
                    alt="Emily & James"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Emily & James</p>
                  <p className="text-gray-500 text-sm">Married August 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
