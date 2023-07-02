'use client'

import React, { ReactElement, useState } from 'react'
import TabTitle, { Props as TabTitleProps } from './TabTitle/tabTitle'
import styles from './tabs.module.css'

type Props = {
  children: ReactElement<TabTitleProps>[]
  preSelectedTabIndex?: number
}

const Tabs = (props: Props): React.ReactElement => {
  const { children, preSelectedTabIndex } = props

  // First tab is shown by default
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    preSelectedTabIndex || 0
  )

  return (
    <div className={styles.tabs}>
      <ul className={styles.ul}>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>

      {/* show selcted tab by index*/}
      {children[selectedTabIndex]}
    </div>
  )
}

export default Tabs
