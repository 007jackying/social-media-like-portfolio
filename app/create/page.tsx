import { getServerSession } from 'next-auth'

import { redirect } from 'next/navigation'
import { prisma } from '../../lib/prisma'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { ProfileForm } from './ProfileForm'

export default async function EditDashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  const currentUserEmail = session?.user?.email
  if (!currentUserEmail) {
    return <ProfileForm user={null} />
  }
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  })
  return (
    <>
      <h1>EditDashboard</h1>
      <ProfileForm user={user} />
    </>
  )
}
