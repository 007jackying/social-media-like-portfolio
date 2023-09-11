'use client'

import React, { useState } from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Label = styled.label`
  margin-top: 1rem;
`

const Input = styled.input`
  margin-top: 0.5rem;
`

const TextArea = styled.textarea`
  margin-top: 0.5rem;
`

const Button = styled.button`
  margin-top: 1rem;
`

export function ProfileForm({ user }: any) {
  console.log(user)
  const [name, setName] = useState(user.name)
  const [bio, setBio] = useState(user.bio)
  const [age, setAge] = useState(user.age)
  const [image, setImage] = useState(user.image)

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      dob: new Date(formData.get('dob')).toISOString(),
      age: formData.get('age') ?? 0,
      image: formData.get('image'),
    }

    console.log(body)

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // await res.json()
    console.log(await res)
  }

  return (
    <FormWrapper>
      <h2>Edit Your Profile</h2>
      <Form onSubmit={updateUser}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="bio">Bio</Label>
        <TextArea
          name="bio"
          cols={30}
          rows={10}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Label htmlFor="age">Age</Label>
        <Input
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <Label htmlFor="image">Profile Image URL</Label>
        <Input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Label htmlFor="birthday">Birthday:</Label>
        <Input type="date" id="birthday" name="birthday"></Input>

        <Button type="submit">Save</Button>
      </Form>
    </FormWrapper>
  )
}
