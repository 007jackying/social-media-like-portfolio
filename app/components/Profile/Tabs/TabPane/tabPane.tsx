import * as React from 'react'

type Props = {
  title: string
  children: React.ReactElement | React.ReactElement[]
}

const TabPane = ({ children }: Props): React.ReactElement => (
  <div>{children}</div>
)

export default TabPane
