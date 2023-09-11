//This pag will be the main page of the app, showing the profile of the user, then the project at the bottom
'use client'
import { Card, Col, Row } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import Profile from '../components/Profile/Summary/profile'
import ProjectModal from '../components/Projects/Modal'

const { Meta } = Card

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
`

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

const RenderContent = (activeTab: string): React.ReactElement => {
  const [openModal, setOpenModal] = useState(false)

  switch (activeTab) {
    case 'Projects':
      return (
        <Row
          gutter={16}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          {projects.map((project) => (
            <Col span={4} key={project.id}>
              <Card
                style={{
                  width: 200,
                }}
                cover={
                  <Image
                    alt="example"
                    src={project.image}
                    width={128}
                    height={128}
                  />
                }
                onClick={() => setOpenModal(!openModal)}
              >
                <ProjectModal
                  id={project.id.toString()}
                  title={project.title}
                  description={project.description}
                  images={[project.image]}
                  links="www.username.com/hello"
                  open={openModal}
                />
                <Meta title={project.title} description={project.description} />
              </Card>
            </Col>
          ))}
        </Row>
      )
    case 'Introduction':
      return <div>Introduction</div>
    case 'Work Experience':
      return <div>Work Experience</div>
    default:
      return <div>Projects</div>
  }
}

const UserPortfolio = (): React.ReactElement => {
  const [activeTab, setActiveTab] = React.useState('Projects')
  //onload user profile here

  return (
    <Container>
      <h1>Hello there!</h1>
      <div>
        <Profile
          fullName="Teng Hong, Lee"
          occupation="Software Engineer"
          company="Google"
          yearsOfExperience={3}
          university="University of California, Berkeley"
          profilePictureUrl={'/profile.jpg'}
        />
      </div>

      <Card
        style={{
          width: '90%',
          maxWidth: '90%',
          marginTop: 16,
        }}
        headStyle={{
          alignItems: 'center',
        }}
        tabList={[
          {
            key: 'Introduction',
            label: 'Introduction',
          },
          {
            key: 'Work Experience',
            label: 'Work Experience',
          },
          {
            key: 'Projects',
            label: 'Projects',
          },
        ]}
        activeTabKey={activeTab}
        onTabChange={(value) => setActiveTab(value)}
      >
        {RenderContent(activeTab)}
      </Card>
    </Container>
  )
}

export default UserPortfolio
