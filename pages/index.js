import React from 'react';
import Landing from '../components/landing'
import UnderLanding from '../components/underlanding'
import Container from '@material-ui/core/Container';

export default function Index() {
  return (
    <Container maxWidth="xl">
        <Landing />

        <UnderLanding />
      
    </Container>
  );
}
