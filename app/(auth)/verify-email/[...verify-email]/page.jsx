'use client'

import { useState } from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/router'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function VerifyEmail() {
  const [code, setCode] = useState('')
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  if (!isLoaded) {
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })
      if (completeSignUp.status !== 'complete') {
        console.log(JSON.stringify(completeSignUp, null, 2))
      }
      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        router.push('/dashboard')
      }
    } catch (err) {
      console.error('Error verifying email', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Verify Your Email
          </h2>
          <p className="mt-2 text-gray-400">Enter the code sent to your email to complete sign up</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="code" className="text-gray-400">Verification Code</Label>
            <Input
              id="code"
              name="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
              placeholder="Enter your verification code"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            Verify Email
          </Button>
        </form>
      </div>
    </div>
  )
}

