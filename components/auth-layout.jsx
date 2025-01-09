import { motion } from 'framer-motion'

export const AuthLayout = ({ children, title, subtitle, features }) => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col lg:flex-row">
      {/* Left section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-2">
              {title}
            </h1>
            <p className="text-zinc-500 mb-8">{subtitle}</p>
          </motion.div>
          {children}
        </div>
      </div>
      
      {/* Right section - Split into two */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Top half - Cool graphic */}
        <div className="h-1/2 bg-zinc-900 flex items-center justify-center p-8">
          <div className="relative w-full max-w-lg aspect-square">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Welcome
            </div>
          </div>
        </div>
        {/* Bottom half - Platform features */}
        <div className="h-1/2 bg-zinc-800 p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Platform Features</h2>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-zinc-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

