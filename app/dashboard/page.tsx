//This pag will be the main page of the app, showing the profile of the user, then the project at the bottom
'use client'
import TabPane from 'app/components/Profile/Tabs/TabPane/tabPane'
import Tabs from 'app/components/Profile/Tabs/tab'
import * as React from 'react'
import { styled } from 'styled-components'
import Profile from '../components/Profile/Summary/profile'

const DivWrapper = styled.div`
  color: #000000;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
`

const Dashboard = (): React.ReactElement => {
  return (
    <Container>
      <h1>Dashboard</h1>
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
      <div>
        <Tabs>
          <TabPane title="Projects">
            <DivWrapper>hello</DivWrapper>
          </TabPane>
          <TabPane title="Self Intro">
            <DivWrapper>Standard</DivWrapper>
          </TabPane>
          <TabPane title="WHPH">
            <DivWrapper>Premium</DivWrapper>
          </TabPane>
        </Tabs>
      </div>
    </Container>
  )
}

export default Dashboard
