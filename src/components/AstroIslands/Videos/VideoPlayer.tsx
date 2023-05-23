import YouTube, { YouTubeProps } from 'react-youtube';
import './styles/VideoPlayer.scss'

interface VideoPlayerProps {
    videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="videoPlayerContainer">
            <YouTube videoId={videoId} iframeClassName='videoPlayer' opts={opts} onReady={onPlayerReady} />
        </div>
    );
}

export default VideoPlayer;