import Helmet from 'react-helmet';

import Box from 'components/Box'
import CreateOrUpdateTrackForm from 'components/CreateOrUpdateTrackForm'
import { PageWrap } from 'components/Layout/styles'
import { H1 } from 'components/Typography'

export default function NewTrackScreen() {
  return (
    <>
      <Helmet>
        <title>Add new track</title>
      </Helmet>
      <PageWrap style={{ marginBottom: 32 }}>
        <Box mb={3}>
          <H1>New Track</H1>
          <CreateOrUpdateTrackForm />
        </Box>
      </PageWrap>
    </>
  )
}
