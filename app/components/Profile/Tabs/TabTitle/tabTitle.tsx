import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'

export type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
  isActive?: boolean
}

const TabTitleWrapper = styled.li<{ isActive?: boolean }>`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  padding: 10px;
  border-bottom: 2px solid transparent;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom-color: #0070f3;
    `}
`

const TabTitleButton = styled.button<{ isActive?: boolean }>`
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      color: #190ebd;
    `}
`

const TabTitle = (props: Props): React.ReactElement => {
  const { title, setSelectedTab, index, isActive } = props

  const handleOnClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <TabTitleWrapper isActive={isActive}>
      <TabTitleButton isActive={isActive} onClick={handleOnClick}>
        {title}
      </TabTitleButton>
    </TabTitleWrapper>
  )
}

export default TabTitle
