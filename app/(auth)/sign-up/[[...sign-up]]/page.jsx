'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SignUp } from '@clerk/nextjs'
import { ChevronDown } from 'lucide-react'

import { AuthLayout } from '@/components/auth-layout'
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const features = [
  "AI-powered course generation",
  "Personalized learning paths",
  "Interactive coding exercises",
  "Real-world project simulations",
  "Cutting-edge tech stack coverage",
  "Community-driven content updates",
  "Adaptive difficulty progression"
]

const programmingLanguages = [
  "JavaScript", "Python", "Java", "C++", "Ruby", "Go", "Rust", "TypeScript", "Swift", "Kotlin"
]

const experienceLevels = [
  "Beginner", "Intermediate", "Advanced", "Expert"
]

const aiInterests = [
  "Machine Learning", "Natural Language Processing", "Computer Vision", "Robotics", "Deep Learning", "Reinforcement Learning", "AI Ethics"
]

const Step1 = ({ onNext }) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="fullName">Full Name</Label>
      <Input 
        id="fullName" 
        type="text" 
        placeholder="Ada Lovelace" 
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email Address</Label>
      <Input 
        id="email" 
        type="email" 
        placeholder="ada@futurecoder.ai" 
      />
    </div>
    <Button onClick={onNext} className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white text-lg py-6 transition-all duration-300 transform hover:scale-105">Next: Your Coding Profile</Button>
  </div>
)

const Step2 = ({ onNext, onPrev }) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="language">Preferred Programming Language</Label>
      <Select>
        <SelectTrigger className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 text-white">
          <SelectValue placeholder="Select your main language" />
        </SelectTrigger>
        <SelectContent className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700">
          {programmingLanguages.map((lang) => (
            <SelectItem key={lang} value={lang.toLowerCase()} className="text-white hover:bg-gray-700 transition-colors duration-200">{lang}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="experience">Experience Level</Label>
      <Select>
        <SelectTrigger className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 text-white">
          <SelectValue placeholder="Select your experience level" />
        </SelectTrigger>
        <SelectContent className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700">
          {experienceLevels.map((level) => (
            <SelectItem key={level} value={level.toLowerCase()} className="text-white hover:bg-gray-700 transition-colors duration-200">{level}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="flex justify-between">
      <Button onClick={onPrev} variant="outline" className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border-gray-600 px-8 py-6 transition-all duration-300 transform hover:scale-105">Previous</Button>
      <Button onClick={onNext} className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-6 transition-all duration-300 transform hover:scale-105">Next: AI Interests</Button>
    </div>
  </div>
)

const Step3 = ({ onNext, onPrev }) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="aiInterests">AI Interests (Select multiple)</Label>
      <Select>
        <SelectTrigger className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 text-white">
          <SelectValue placeholder="Select your AI interests" />
        </SelectTrigger>
        <SelectContent className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700">
          {aiInterests.map((interest) => (
            <SelectItem key={interest} value={interest.toLowerCase()} className="text-white hover:bg-gray-700 transition-colors duration-200">{interest}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="goals">Learning Goals</Label>
      <Input 
        id="goals" 
        type="text" 
        placeholder="e.g., Build an AI-powered web app" 
      />
    </div>
    <div className="flex justify-between">
      <Button onClick={onPrev} variant="outline" className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border-gray-600 px-8 py-6 transition-all duration-300 transform hover:scale-105">Previous</Button>
      <Button onClick={onNext} className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-6 transition-all duration-300 transform hover:scale-105">Next: Finalize Sign Up</Button>
    </div>
  </div>
)

const FinalStep = ({ onPrev }) => (
  <div className="mt-6">
    <SignUp 
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
    <Button onClick={onPrev} variant="outline" className="mt-4 w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border-gray-600 py-6 transition-all duration-300 transform hover:scale-105">Previous</Button>
  </div>
)

export const SignUpPage = () => {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <AuthLayout
      title="Join the AI Developer Community"
      subtitle="Sign up to access AI-powered course generation and enhance your development skills"
      features={features}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-1/4 h-2 rounded ${
                s <= step ? 'bg-gradient-to-r from-gray-500 to-gray-700' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>

        {step === 1 && <Step1 onNext={nextStep} />}
        {step === 2 && <Step2 onNext={nextStep} onPrev={prevStep} />}
        {step === 3 && <Step3 onNext={nextStep} onPrev={prevStep} />}
        {step === 4 && <FinalStep onPrev={prevStep} />}
      </motion.div>
    </AuthLayout>
  )
}

export default SignUpPage

