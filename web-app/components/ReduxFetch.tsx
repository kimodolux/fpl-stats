"use client"

import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  useDispatch,
  fetchTeamsAsync,
  fetchPlayersAsync,
  fetchPlayersCountAsync,
  fetchTableAsync,
  fetchFixturesAsync,
  dataSlice,
  useSelector,
  selectLastDataFetchDate,
} from '@/lib/redux'

function ResponsiveAppBar({
    children,
  }: {
    children: React.ReactNode
  }) {
  const dispatch = useDispatch()
  const last_data_fetch_date = useSelector(selectLastDataFetchDate)

  const one_hour = 60 * 60 * 1000;
  const one_minute = 60 * 1000;

  const fetchReduxData = () =>{
    // fetch to init data or fetch every hour otherwise
    if(!last_data_fetch_date || last_data_fetch_date < (Date.now() - one_hour)){
      dispatch(fetchTeamsAsync())
      dispatch(fetchPlayersAsync())
      dispatch(fetchPlayersCountAsync())
      dispatch(fetchTableAsync())
      dispatch(fetchFixturesAsync())
      dispatch(dataSlice.actions.setLastDataFetch())
    }
  }

  useEffect(() => {
    fetchReduxData()
    const interval = setInterval(() => {
      fetchReduxData()
    }, one_minute);
  
    return () => clearInterval(interval);
  }, [last_data_fetch_date])

  return (
    <>{children}</>
  );

}

export default ResponsiveAppBar;