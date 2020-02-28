import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

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
import { setGoal } from '../../helpers/analytics';


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

  onLinkClick = (e) => {
    setGoal(e.target.dataset.targetId);
  }

  renderLinks = () => {
    const {
      links,
    } = this.state.trackInfo;
    if (!links) return null;

    let list = [];

    if (links.apple) {
      list.push(<MediaLink href={links.apple} onClick={this.onLinkClick} data-target-id="apple" target="_blank">Apple Music</MediaLink>);
    }
    if (links.vk) {
      list.push(<MediaLink href={links.vk} onClick={this.onLinkClick} data-target-id="vk" target="_blank">VK</MediaLink>);
    }
    if (links.boom) {
      list.push(<MediaLink href={links.boom} onClick={this.onLinkClick} data-target-id="boom" target="_blank">Boom</MediaLink>);
    }
    if (links.soundcloud) {
      list.push(<MediaLink href={links.soundcloud} onClick={this.onLinkClick} data-target-id="sc" target="_blank">SoundCloud</MediaLink>);
    }
    if (links.spotify) {
      list.push(<MediaLink href={links.spotify} onClick={this.onLinkClick} data-target-id="spotify" target="_blank">Spotify</MediaLink>);
    }
    if (links.yandex) {
      list.push(<MediaLink href={links.yandex} onClick={this.onLinkClick} data-target-id="yandex" target="_blank">Yandex.Music</MediaLink>);
    }
    if (links.itunes) {
      list.push(<MediaLink href={links.itunes} onClick={this.onLinkClick} data-target-id="itunes" target="_blank">iTunes</MediaLink>);
    }

    return list.length > 0 ? <LinksList>{list}</LinksList> : null;
  }

  render() {
    const {
      trackInfo,
    } = this.state;

    if (trackInfo === null) {
      return (<Redirect to="/" />);
    }

    return (
      <Fragment>
        <Helmet>
          <title>{`${trackInfo.name} by ${trackInfo.artist}`}</title>
          <meta property="og:image" content={`/art/${trackInfo.id}/artwork.jpg`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="1200" />
        </Helmet>
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
              <InfoRow>
                <MediaLink to="/" as={Link} small>Back to home page</MediaLink>
              </InfoRow>
            </InfoWrapper>
          </InfoContainer>
        </Root>
      </Fragment>
    );
  }
}

export default ShareTrackScreen;
