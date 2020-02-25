import React, { Component } from 'react';
import { Redirect } from 'react-router';

import {
  Root,
  Title,
  TitleSpan,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  LinksList,
  MediaLink,
  Author,
  AuthorSpan,
} from './ShareTrackScreenStyles';
import { trackList } from '../../data/tracklist';


class ShareTrackScreen extends Component {
  state = {
    trackInfo: 0
  }

  componentDidMount() {
    const {
      id = null,
    } = this.props.match.params;

    let trackInfo = null

    for (let key in trackList) {
      if (trackList[key].id === id) {
        trackInfo = trackList[key]
      }
    }

    this.setState({ trackInfo });
  }

  renderLinks = () => {
    const {
      links,
    } = this.state.trackInfo;
    if (!links) return null;

    let list = [];

    if (links.apple) {
      list.push(<MediaLink href={links.apple} target="_blank">Apple Music</MediaLink>);
    }
    if (links.boom) {
      list.push(<MediaLink href={links.boom} target="_blank">Boom</MediaLink>);
    }
    if (links.soundcloud) {
      list.push(<MediaLink href={links.soundcloud} target="_blank">SoundCloud</MediaLink>);
    }
    if (links.spotify) {
      list.push(<MediaLink href={links.spotify} target="_blank">Spotify</MediaLink>);
    }
    if (links.yandex) {
      list.push(<MediaLink href={links.yandex} target="_blank">Yandex.Music</MediaLink>);
    }
    if (links.itunes) {
      list.push(<MediaLink href={links.itunes} target="_blank">iTunes</MediaLink>);
    }

    return list.length > 0 ? <LinksList>{list}</LinksList> : null;
  }

  render() {
    const {
      trackInfo,
    } = this.state;

    if (trackInfo === null) {
      return (<Redirect to="/t" />);
    }

    return (
      <Root artPath={trackInfo.id}>
        <InfoContainer>
          <InfoWrapper>
            <InfoRow>
              <Author>
                <AuthorSpan>
                  {trackInfo.artist}
                </AuthorSpan>
              </Author>
              <Title>
                <TitleSpan>
                  {trackInfo.name}
                </TitleSpan>
              </Title>
            </InfoRow>
            <InfoRow>
              {this.renderLinks()}
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </Root>
    )
  }
}

export default ShareTrackScreen;
