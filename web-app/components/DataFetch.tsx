"use client"

import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  useDispatch,
  fetchTeamsAsync,
  fetchPlayersAsync,
  fetchTableAsync
} from '@/lib/redux'

function ResponsiveAppBar({
    children,
  }: {
    children: React.ReactNode
  }) {
  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(fetchTeamsAsync())
      dispatch(fetchPlayersAsync())
      dispatch(fetchTableAsync())
  }, [])

  return (
    <>{children}</>
  );

}

export default ResponsiveAppBar;