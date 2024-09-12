import React, { useState, useEffect } from 'react';
import { fetchYouTubeVideos } from '../services/api';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display: column;
`;

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;

const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoTitle = styled.h3`
  margin: 10px 0;
`;

const LessonPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('English class');

  useEffect(() => {
    const fetchVideos = async () => {
      const result = await fetchYouTubeVideos(searchQuery);
      setVideos(result);
    };

    fetchVideos();
  }, [searchQuery]);

  return (
    <Container>
      <h1>Lesson Videos</h1>
      <VideoList>
        {videos.map((video) => (
          <VideoItem key={video.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <VideoTitle>{video.snippet.title}</VideoTitle>
            </a>
          </VideoItem>
        ))}
      </VideoList>
    </Container>
  );
};

export default LessonPage;
