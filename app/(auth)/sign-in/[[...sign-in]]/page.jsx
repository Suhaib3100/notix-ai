'use client'

import { motion } from 'framer-motion'
import { SignIn } from '@clerk/nextjs'

import { AuthLayout } from '@/components/auth-layout'
import { Button } from '@/components/ui/button'

const features = [
  "AI-powered course generation",
  "Personalized learning paths",
  "Interactive coding exercises",
  "Real-world project simulations",
  "Cutting-edge tech stack coverage",
  "Community-driven content updates",
  "Adaptive difficulty progression"
]

export const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome Back, Developer"
      subtitle="Log in to continue your AI-powered learning journey"
      features={features}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <SignIn 
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-transparent shadow-none p-0",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              formButtonPrimary: "bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white w-full py-6 text-lg transition-all duration-300 transform hover:scale-105",
              formFieldInput: "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-white focus:ring-white transition-all duration-300 hover:from-gray-700 hover:to-gray-800",
              formFieldLabel: "text-white text-lg font-semibold",
              footer: "hidden",
              formFieldInputShowPasswordButton: "text-gray-300",
              otpCodeFieldInput: "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 text-white",
              formHeaderSubtitle: "text-gray-300",
              identityPreviewText: "text-white",
              identityPreviewEditButton: "text-gray-400 hover:text-white",
            }
          }}
        />
        <div className="text-center">
          <span className="text-gray-400">Don't have an account?</span>
          <Button variant="link" className="text-white hover:text-gray-300 transition-colors duration-200">Sign up</Button>
        </div>
      </motion.div>
    </AuthLayout>
  )
}

export default LoginPage

