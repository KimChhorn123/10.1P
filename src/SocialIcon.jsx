import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const SocialIcon = () => (
  <div>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
  </div>
)

export default SocialIcon