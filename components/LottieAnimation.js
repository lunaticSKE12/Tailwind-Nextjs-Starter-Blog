'use client';
import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

/**
 * The function returns a Lottie animation player component with autoplay and loop properties.
 * @returns The LottieAnimation component is returning a DotLottiePlayer component with the src,
 * autoplay, and loop props set.
 */
const LottieAnimation = () => {
  return (
    <DotLottiePlayer src="/animation.lottie" autoplay loop></DotLottiePlayer>
  );
};

export default LottieAnimation;
