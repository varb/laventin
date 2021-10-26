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
import { trackList, musicStores } from '../../data/tracklist';
import { setGoal } from '../../helpers/analytics';


class ShareTrackScreen extends Component {
  state = {
    trackInfo: null
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
    setGoal(e.target.dataset.targetId, {
      trackId: this.state.trackInfo.id,
      name: this.state.trackInfo.name,
    });
  }

  renderLinks = () => {
    const {
      links,
    } = this.state.trackInfo;
    if (!links) return null;

    let list = [];

    for (const key in links) {
      if (links.hasOwnProperty(key)) {
        if (key in musicStores) {
          const musicStoreInfo = musicStores[key];
          list.push(
            <MediaLink
              href={links[key]}
              onClick={this.onLinkClick}
              data-target-id={musicStoreInfo.id}
              target="_blank"
            >{musicStoreInfo.title}</MediaLink>
          );
        }
      }
    }

    return list.length > 0 ? <LinksList>{list}</LinksList> : null;
  }

  render() {
    const {
      trackInfo,
    } = this.state;

    if (trackInfo === null) {
      return null;
      // return (<Redirect to="/" />);
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
