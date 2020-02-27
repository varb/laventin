import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Root,
  InfoContainer,
  InfoWrapper,
  Title,
  LinksList,
  MediaLink,
} from './HomeScreenStyles';
import { trackList } from '../../data/tracklist';


class HomeScreen extends Component {
  render() {
    const filteredList = trackList.filter((item) => item.active);

    return (
      <Fragment>
        <Root>
          <InfoContainer>
            <InfoWrapper>
              <Title>Laventin</Title>
              <LinksList>
                {filteredList.map((track, index) => (
                  <MediaLink
                    key={index}
                    to={`/t/${track.id}`}
                    as={Link}
                  >{track.name}</MediaLink>
                ))}
              </LinksList>
            </InfoWrapper>
          </InfoContainer>
        </Root>
      </Fragment>
    )
  }
}

export default HomeScreen;
