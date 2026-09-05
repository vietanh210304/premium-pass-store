/**
 * Official brand logos — Wikimedia Commons public domain / CC0 vectors.
 *
 * YouTube: red play button + "YouTube" wordmark (white text on transparent).
 *   viewBox 0 0 90 20 — standard YouTube logo proportions.
 *
 * Spotify: green mark + "Spotify" wordmark (green on transparent).
 *   viewBox 0 0 559 168 — standard Spotify logo proportions.
 */

// YouTube: red rounded-rectangle play button
// From https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg
const YouTubeMark = (
  <svg viewBox="0 0 28.57 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000" />
    <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="#FFF" />
  </svg>
)

// Spotify: green circle mark (sound waves)
// From https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg
const SpotifyMark = (
  <svg viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <path fill="#1ED760" d="M83.996.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809.64-5.609-1.12-6.249-3.93-.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35-1.04-3.453.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z" />
  </svg>
)

export const YOUTUBE_LOGO = YouTubeMark
export const SPOTIFY_LOGO = SpotifyMark
