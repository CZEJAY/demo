import Image from 'next/image'
import SignUpForm from './SignUpForm'
import ImageCollage from './image-collage'

export default function AuthPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-sm">
          <h1 className="text-4xl font-bold text-purple-600 mb-8">Sign up</h1>
          <SignUpForm />
          <div className="mt-8">
            <Image src="/gamma-logo.svg" alt="Gamma Logo" width={100} height={32} />
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:flex-1">
        <ImageCollage />
      </div>
    </div>
  )
}