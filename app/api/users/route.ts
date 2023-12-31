import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(_request: Request) {
  const users = await prisma.user.findMany()
  console.log(users)

  return NextResponse.json(users)
}
