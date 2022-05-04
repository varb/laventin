import styled from 'styled-components';

export const LinksList = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const TrackLink = styled.a`
  display: flex;
  align-items: center;
  padding: 20px;

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  color: inherit;
  text-decoration: none;
  transition-property: border-color, box-shadow;
  transition-duration: .2s;

  &:hover {
    border-color: rgb(205 80 173);
    box-shadow: 0 0 10px rgb(205 80 173 / 50%), inset 0 0 5px rgb(205 80 173 / 50%);
  }
`;

export const TrackTitle = styled.div`
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 800;
  line-height: 20px;
`;

export const TrackArtist = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
`;

export const TrackArtwork = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 20px;
`;