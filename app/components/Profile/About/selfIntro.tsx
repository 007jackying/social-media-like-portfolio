import Image from 'next/image'
import * as React from 'react'

interface AboutMeProps {
  name: string
  bio: string
  profilePictureUrl: string
}

const AboutMe: React.FC<AboutMeProps> = ({ name, bio, profilePictureUrl }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image src={profilePictureUrl} alt="Profile Picture" />
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  )
}

export default AboutMe
