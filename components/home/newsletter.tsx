export default function Newsletter() {
  return (
    <section className="py-20 bg-[#F26D51]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 opacity-90">
            Stay updated with our latest travel deals, new destinations, and inspiring travel stories.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-md text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#222222] hover:bg-[#333333] text-white font-medium rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-sm opacity-80">
            By subscribing, you agree to our Privacy Policy and consent to receive travel-related emails.
          </p>
        </div>
      </div>
    </section>
  )
}
