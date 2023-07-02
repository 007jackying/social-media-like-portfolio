import Image from 'next/image'
import React from 'react'

interface ProfileProps {
  fullName: string
  occupation: string
  company: string
  yearsOfExperience: number
  university: string
  profilePictureUrl: string
}

const Profile: React.FC<ProfileProps> = ({
  fullName,
  occupation,
  company,
  yearsOfExperience,
  university,
  profilePictureUrl,
}) => {
  return (
    <div>
      <Image
        src={profilePictureUrl}
        alt="Profile Picture"
        width={100}
        height={100}
        style={{ borderRadius: '50%' }}
      />

      <h2 style={{ textAlign: 'center' }}>{fullName}</h2>
      <p style={{ textAlign: 'center' }}>
        {occupation} at {company}
      </p>
      <p style={{ textAlign: 'center' }}>
        {yearsOfExperience} years of experience
      </p>
      <p style={{ textAlign: 'center' }}>Graduated from {university}</p>
    </div>
  )
}

export default Profile
