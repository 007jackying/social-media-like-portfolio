import { Card, Col, Row } from 'antd'
import React from 'react'

const { Meta } = Card
interface Project {
  title: string
  description: string
  id: string
}

interface Props {
  projects: Project[]
}

const ImagePreviews: React.FC = ({ projects }: Props) => {
  return (
    <div>
      <Row gutter={16}>
        {projects.map((project) => (
          <Col span={8} key={project.id}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  fill
                />
              }
            >
              <Meta title="Card title" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ImagePreviews
