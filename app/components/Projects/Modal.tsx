import Modal from 'antd/es/modal/Modal'
import Image from 'next/image'
import React from 'react'

interface projectProps {
  id: string
  title: string
  description: string
  images: string[]
  links: string
  open: boolean
}

const ProjectModal: React.FC<projectProps> = ({ ...props }) => {
  console.log('entered', props)
  return (
    <Modal title={props.title} open={props.open} closable>
      <Image alt={props.id} src={props.images[0]} fill />
      <p>{props.description}</p>
    </Modal>
  )
}

export default ProjectModal
