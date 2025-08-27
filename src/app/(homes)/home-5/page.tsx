import React from 'react';
import { Metadata } from 'next';
import HomeFiveMain from '@/pages/homes/home-5';

export const metadata: Metadata = {
  title: "Liko - Home Five Page",
};

const HomePageFive = () => {
  return (
    <HomeFiveMain/>
  );
};

export default HomePageFive;