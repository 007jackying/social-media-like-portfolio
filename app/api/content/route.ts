import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

// Dummy data
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'This is a description of project 1',
    image: '/profile.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'This is a description of project 2',
    image: '/profile.jpg',
  },
  {
    id: 1,
    title: 'Project 2',
    description: 'This is a description of project 3',
    image: '/profile.jpg',
  },
]

export async function GET() {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.redirect('/api/auth/signin')
  }
  return NextResponse.json(projects)
}
