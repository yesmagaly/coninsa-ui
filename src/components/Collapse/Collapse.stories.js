import React from 'react'
import { Box } from 'theme-ui'
import { Card, Divider } from 'ui'
import Collapse from '.'

export default {
  title: 'Collapse',
  component: Collapse,
}

export const Default = () => (
  <Collapse>
    <Collapse.Item title='One'>
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
      out print, graphic or web designs.
    </Collapse.Item>

    <Collapse.Item title='Two'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in
      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.
    </Collapse.Item>
  </Collapse>
)

export const CollapseInCard = () => (
  <Box p='large' bg='grey'>
    <Card bg='white'>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
        out print, graphic or web designs.
      </p>
      <Card.Separator />
      <Collapse variant='mini'>
        <Collapse.Item title='One'>
          <Divider />
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs.
        </Collapse.Item>
      </Collapse>
    </Card>
  </Box>
)
