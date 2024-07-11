// components/VideoPlayer.js
import { useRef, useState, useEffect } from 'react';
import styles from './Videoplayer.module.css';

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export default function VideoPlayer () {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoUrls = [
    '/videos/A LeapOf Leopards In The Wild · Free Stock Video.mp4',
    '/videos/facebook-media-freemp4downloader.com-2.mp4',
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [currentVideoIndex]);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSliderChange = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(e.target.value);
    setCurrentTime(newTime);
  };

  const handlePrevious = () => {
    const newIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : videoUrls.length - 1;
    setCurrentVideoIndex(newIndex);
    setProgress(0);
    setIsPlaying(true); // Start playing automatically
  };

  const handleNext = () => {
    const newIndex = currentVideoIndex < videoUrls.length - 1 ? currentVideoIndex + 1 : 0;
    setCurrentVideoIndex(newIndex);
    setProgress(0);
    setIsPlaying(true); // Start playing automatically
  };

  const handleVideoEnd = () => {
    handleNext();
  };

  return (
    <div className={styles.videoPlayer}>
      <video
        ref={videoRef}
        onTimeUpdate={handleProgress}
        onEnded={handleVideoEnd}
        width="300"
        height="200"
        controls={false}
        key={currentVideoIndex} // This is important to reset the video element on index change
      >
        <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.controls}>
        <button className={styles.button} onClick={handlePrevious}>
          Previous
        </button>
        <button className={styles.button} onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button className={styles.button} onClick={handleNext}>
          Next
        </button>
        <input
          className={styles.slider}
          type="range"
          value={progress}
          onChange={handleSliderChange}
        />
        <div className={styles.timeDisplay}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};