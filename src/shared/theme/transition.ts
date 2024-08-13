import { CSSProperties } from "react";
import { css, FlattenSimpleInterpolation } from "styled-components";

export const defaultTransitionDuration = 200;
export const defaultTransitionEasing: CSSProperties["transitionTimingFunction"] =
  "ease-in-out";

/**
 * Helper for create CSS transition in styled-components.
 *
 * @param {Object} params - Transition additional params.
 * @param {string} params.duration - The duration transition in milliseconds.
 * @param {string} params.easing - The easing timing function.
 *
 * @example
 * // returns `transition: all ${default values} ;`
 * createTransition()
 *
 * @example
 * // returns
 * // `transition: ${default values} ;`
 * // `transition-properties: background-color, width;`
 * createTransition(['background-color', 'width'])
 *
 * @example
 * // returns
 * // `transition: 300ms ease-in;`
 * // `transition-properties: color, height;`
 * createTransition(['color', 'height'], {
 *  duration: 300,
 *  easing: 'ease-in'
 * })
 */
export const createTransition = (
  transitionProperties: CSSProperties["transitionProperty"][] = ["all"],
  params?: {
    duration?: number;
    easing?: CSSProperties["transitionTimingFunction"];
  }
): FlattenSimpleInterpolation => {
  const duration = params?.duration || defaultTransitionDuration;
  const easing = params?.easing || defaultTransitionEasing;
  const properties = transitionProperties.join();

  return transitionProperties.length === 1
    ? css`
        transition: ${properties} ${duration}ms ${easing};
      `
    : css`
        transition-property: ${properties};
        transition-duration: ${duration}ms;
        transition-timing-function: ${easing};
      `;
};
