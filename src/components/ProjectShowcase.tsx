import { useRef, useEffect, useState } from "react";
import MusicCard from "./MusicCard";
import { motion } from "framer-motion";
import { animateCardsOnScroll } from "@/lib/gsap";

// Sample music data - replace with actual data
const musicTracks = [
  // Left column
  { id: 1, image: "/music/1.png", songName: "Midnight Dreams", artistName: "Luna Star", userImage: "/users/1.jpg" },
  { id: 2, image: "/music/2.png", songName: "Electric Pulse", artistName: "Neon Wave", userImage: "/users/2.jpg" },
  { id: 3, image: "/music/3.png", songName: "Ocean Breeze", artistName: "Coral Reef", userImage: "/users/3.jpg" },
  
  // Middle column
  { id: 4, image: "/music/4.png", songName: "Urban Legends", artistName: "City Lights", userImage: "/users/4.jpg" },
  { id: 5, image: "/music/5.png", songName: "Digital Love", artistName: "Cyber Soul", userImage: "/users/5.jpg" },
  { id: 6, image: "/music/6.png", songName: "Golden Hour", artistName: "Sunset Vibes", userImage: "/users/6.jpg" },
  
  // Right column
  { id: 7, image: "/music/7.png", songName: "Cosmic Journey", artistName: "Space Explorer", userImage: "/users/7.jpg" },
  { id: 8, image: "/music/8.png", songName: "Rainy Days", artistName: "Storm Chaser", userImage: "/users/8.jpg" },
  { id: 9, image: "/music/9.png", songName: "Fire & Ice", artistName: "Elemental", userImage: "/users/9.jpg" },
];

const ProjectShowcase = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);
  
  // Split the music tracks array into three groups
  const leftColumnTracks = musicTracks.slice(0, 3);
  const middleColumnTracks = musicTracks.slice(3, 6);
  const rightColumnTracks = musicTracks.slice(6, 9);
  
  // For mobile, we'll only show the first 3 cards initially
  const mobileTracks = musicTracks.slice(0, 3);

  const handlePlay = (trackId: number) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
    // Here you would implement actual music playback logic
    console.log(`Playing track ${trackId}`);
  };
  
  // Ref for the container to apply GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if we're on mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Changed from 768 to 1024 for better tablet support
    };
    
    // Initial check
    checkMobile();
    
    // Listen for window resize
    window.addEventListener('resize', checkMobile);
    
    // Apply GSAP scroll animations when component mounts
    const initAnimation = () => {
      animateCardsOnScroll(containerRef);
    };
    
    // Small timeout to ensure DOM is fully rendered
    const timer = setTimeout(initAnimation, 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [showAllCards]);

  return (
    <section className="container mx-auto px-4 py-16">     
      <div 
        ref={containerRef}
        className={`${isMobile ? "" : "grid grid-cols-1 lg:grid-cols-3 gap-1 justify-items-center"}`}
        data-speed="0.95"
      >
        {isMobile ? (
          // Mobile layout - horizontal slider
          <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
            {musicTracks.map((track) => (
              <div key={track.id} className="flex-shrink-0 w-48">
                <MusicCard 
                  imageSrc={track.image}
                  songName={track.songName}
                  artistName={track.artistName}
                  userImage={track.userImage}
                  size="default"
                  onPlay={() => handlePlay(track.id)}
                  isPlaying={playingTrack === track.id}
                />
              </div>
            ))}
          </div>
        ) : (
          // Desktop layout - 3 columns with responsive spacing
          <>
            {/* Left Column */}
            <div className="space-y-4 md:-mr-32 lg:-mr-48 xl:-mr-64">
              {leftColumnTracks.map((track) => (
                <MusicCard 
                  key={track.id}
                  imageSrc={track.image}
                  songName={track.songName}
                  artistName={track.artistName}
                  userImage={track.userImage}
                  size="default"
                  onPlay={() => handlePlay(track.id)}
                  isPlaying={playingTrack === track.id}
                />
              ))}
            </div>
            
            {/* Middle Column - pushed upwards */}
            <div className="space-y-4 transform -translate-y-8 md:-translate-y-16">
              {middleColumnTracks.map((track) => (
                <MusicCard 
                  key={track.id}
                  imageSrc={track.image}
                  songName={track.songName}
                  artistName={track.artistName}
                  userImage={track.userImage}
                  size="large"
                  onPlay={() => handlePlay(track.id)}
                  isPlaying={playingTrack === track.id}
                />
              ))}
            </div>
            
            {/* Right Column */}
            <div className="space-y-4 md:-ml-32 lg:-ml-48 xl:-ml-64">
              {rightColumnTracks.map((track) => (
                <MusicCard 
                  key={track.id}
                  imageSrc={track.image}
                  songName={track.songName}
                  artistName={track.artistName}
                  userImage={track.userImage}
                  size="default"
                  onPlay={() => handlePlay(track.id)}
                  isPlaying={playingTrack === track.id}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase; 