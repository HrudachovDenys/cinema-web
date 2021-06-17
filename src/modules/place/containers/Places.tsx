import * as R from 'ramda';
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getMovieById } from '../../movie/movieReducer';

import * as placeActions from '../placeActions';
import { getPlacesByMovieId } from '../placeReducer';
import { CancelBookingPopover } from '../components/CancelBookingPopover';
import { ToBookPopover } from '../components/ToBookPopover';

const Wrapper = styled.div`
  padding: 20px 30px 30px 30px;
  margin-left: 13%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  padding: 10px 0;
  text-align: center;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const PlacesWrapper = styled.div`
  width: auto;
  margin: 20px 0;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.white};
`;

const PlaceButton: React.FC<any> = styled.span`
  width: calc(5% - 10px);
  margin: 5px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;

  background-color: ${({ isBooking, theme }: { isBooking: boolean; theme: any }) =>
    isBooking ? theme.colors.red : theme.colors.white};
`;

interface PlacesProps {
  movieId: string;
}

export const Places: React.FC<PlacesProps> = ({ movieId }: PlacesProps) => {
  const movie = useSelector(state => getMovieById(state, movieId));
  const places = useSelector(state => getPlacesByMovieId(state, movieId));

  const dispatch = useDispatch();

  // Fetch places by movie id.
  useEffect(() => {
    dispatch(placeActions.fetchPlacesByMovieId(movieId));
  }, [dispatch, movieId]);

  const toBookPlace = useCallback(
    (place, username) => dispatch(placeActions.toBookPlace(movieId, place, username)),
    [dispatch, movieId],
  );

  const cancelBooking = useCallback(_id => dispatch(placeActions.cancelBooking(_id)), [dispatch]);

  const chackIsBookingPlace = useCallback(
    place => !!R.find(R.propEq('place', place), places),
    [places],
  );

  const getBookingPlace = useCallback(place => R.find(R.propEq('place', place), places), [places]);

  return (
    <Wrapper>
      <Title>{R.prop('name', movie)}</Title>
      <PlacesWrapper>
        {new Array(800).fill(0).map((_, index) =>
          chackIsBookingPlace(index + 1) ? (
            <CancelBookingPopover
              key={`key_${index}`}
              username={R.prop('username', getBookingPlace(index + 1))}
              cancelBooking={() => cancelBooking(R.prop('_id', getBookingPlace(index + 1)))}
            >
              <PlaceButton isBooking>{index + 1}</PlaceButton>
            </CancelBookingPopover>
          ) : (
            <ToBookPopover key={`key_${index}`} place={index + 1} toBookPlace={toBookPlace}>
              <PlaceButton isBooking={false}>{index + 1}</PlaceButton>
            </ToBookPopover>
          ),
        )}
      </PlacesWrapper>
    </Wrapper>
  );
};
