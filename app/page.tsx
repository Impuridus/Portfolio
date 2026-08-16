export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-2">Cheng Wu</h1>
          <p className="text-lg text-gray-400 mb-4">Cybersecurity Enthusiast</p>
          <p className="text-gray-300 leading-relaxed">
            I am passionate about cybersecurity, from network security and
            penetration testing to secure application development. This
            portfolio showcases my projects, skills, and ongoing work in the
            field.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-200">Python</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-200">Linux</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-200">C++</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-200">Git</span>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          <div className="border border-gray-800 rounded-lg p-5 mb-6">
            <h3 className="text-lg font-medium mb-1">Real-Time Gesture-Controlled Rock-Paper-Scissors</h3>
            <p className="text-gray-400 text-sm mb-3">
              Collaborated on a team project combining computer vision and embedded hardware: 
              built a real-time camera-based hand gesture recognition pipeline and a low-cost 
              physical signaling device to communicate player moves to the game logic running 
              on a Raspberry Pi.
            </p>
            <a href="#" className="text-blue-400 hover:underline text-sm">
              View on GitHub
            </a>
          </div>

          <div className="border border-gray-800 rounded-lg p-5">
            <h3 className="text-lg font-medium mb-1">Pet Adoption Website</h3>
            <p className="text-gray-400 text-sm mb-3">
              Built the frontend for a group project pet adoption platform, developing reusable 
              filter components and pet card UI to support browsing by breed, age, and adoption status. 
              Collaborated with teammates to define component structure and ensure consistent state 
              handling across the interface.
            </p>
            <a href="#" className="text-blue-400 hover:underline text-sm">
              View on GitHub
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="flex gap-4 text-gray-300">
            <a href="mailto:chengjwu2004@gmail.com" className="hover:text-white">Email</a>
            <a href="https://github.com/Impuridus" className="hover:text-white">GitHub</a>
            <a href="www.linkedin.com/in/cheng-wu-983162331" className="hover:text-white">LinkedIn</a>
          </div>
        </section>

      </div>
    </main>
  );
}
