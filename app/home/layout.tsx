import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import { authOptions } from '../utils/auth'

export default async function HomeLayout (
  { children }: { children: ReactNode }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect('/login')
  }

  return (
    <>
      <Navbar
        name={session.user?.name as string}
        avatar={session.user?.image as string}
        email={session.user?.email as string}
      />
      <main className='w-full max-w-7xl mx-auto sm:px-6 lg:px-8'>
        {children}
      </main>
    </>
  )
}
