import { useEffect, useState } from "react";
import MusicCard from "../Component/Card";
import axios from "axios";
// import { ChevronRight, ChevronLeft } from 'lucide-react';
export default function Home() {
  interface stateType {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
  }

  interface AudiusTrack {
    id: string;
    title: string;
    user: {
      name: string;
    };
    artwork: {
      "150x150"?: string;
      "480x480"?: string;
      "1000x1000"?: string;
    };
  }

  const [trendingCard, setTrendingCard] = useState<stateType[]>([]);

  useEffect(() => {
    const songData = async () => {
      try {
        const response = await axios.get(
          "https://api.audius.co/v1/tracks/trending",
          {
            params: {
              app_name: "Tonexa",
              limit: 20,
            },
          }
        );
        const fetchedData = response.data.data.map((track: AudiusTrack) => ({
          id: track.id,
          title: track.title,
          artist: track.user.name,
          coverUrl:
            track.artwork["150x150"] ||
            track.artwork["480x480"] ||
            track.artwork["1000x1000"] ||
            "", // fallback
        }));
        setTrendingCard(fetchedData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log("An unexpected error occurred");
        }
      }
    };

    songData();
  }, []);

  return (
    <div
      className="pt-11 p-10 flex flex-col gap-10 overflow-hidden"
      // style={{
      //   clipPath:
      //     'polygon(75px 0, 100% 0, 100% 100%, 0 100%, 0 40px, 75px 40px, 75px 0)',
      // }}
      style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
    >
      {/* /*Album Widgets
      <div>
      <div className="absolute right-4 top-40"><ChevronRight/></div>
      <div className="absolute left-4 top-40"><ChevronLeft/></div>
      </div> */}

      {/*Trending Songs*/}
      <div>
        <h1 className="font-poppins font-bold text-2xl mb-5 ">
          Trending Songs
        </h1>
        <div className="flex flex-row gap-2.5 overflow-x-scroll h-fit" style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}>
        {trendingCard &&
          trendingCard.map((track) => (
            <MusicCard key={track.id} trackUrl={track.coverUrl} trackName={track.title} />
          ))}
        </div>
      </div>

      {/*Popular Albums*/}
      <div>
        <h1 className="font-poppins font-bold text-2xl mb-5 ">Albums</h1>
       
      </div>
    </div>
  );
}
