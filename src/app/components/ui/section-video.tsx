"use client"
import { Button } from "./Button";
import Image from "next/image";
import { useMediaQuery } from "@/utils/use-media-query";
import { Icons } from "@/lib/Icons";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

export function SectionVideo() {
    const playerRef = useRef<ReactPlayer | null>(null);
    const timer = useRef<NodeJS.Timeout | null>(null);
    const [isPlaying, setPlaying] = useState<boolean>(false);
    const [isMuted, setMuted] = useState<boolean>(true);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    

    const togglePlay = () => {
        if (isPlaying) {
            playerRef.current?.getInternalPlayer().pause();
        } else {
            playerRef.current?.getInternalPlayer().play();
        }

        setPlaying((prev) => !prev);
    };

    const toggleMute = () => {
        setMuted((prev) => !prev);
    };

    return (
        <motion.div
            className="flex flex-col justify-center md:container  pb-20"
            onViewportEnter={() => {
                if (!isPlaying && isDesktop) {
                    timer.current = setTimeout(() => {
                        playerRef.current?.getInternalPlayer().play();
                        setPlaying(true);
                    }, 4000);
                }
            }}
            onViewportLeave={() => {
                playerRef.current?.getInternalPlayer().pause();
                setPlaying(false);
                if (timer.current) {
                    clearTimeout(timer.current);
                }
            }}
        >
            <div className="relative">
                {isPlaying && (
                    <div className="absolute md:top-12 md:right-12 top-4 right-4 space-x-4 items-center justify-center z-30 transition-all">
                        <Button
                            size="icon"
                            className="rounded-full size-10 md:size-14 bg-white transition ease-in-out hover:scale-110"
                            onClick={toggleMute}
                        >
                            {isMuted ? <Icons.Mute size={24} /> : <Icons.UnMute size={24} />}
                        </Button>
                    </div>
                )}

                {!isPlaying && (
                    <div className="absolute md:top-12 top-4 right-4 space-x-4 items-center justify-center z-30 transition-all">
                        <Button
                            size="icon"
                            className="rounded-full bg-white size-10 md:size-14 transition ease-in-out hover:scale-110"
                            onClick={togglePlay}
                        >
                            <Icons.Play size={24} />
                        </Button>
                    </div>
                )}

                <ReactPlayer
                    ref={playerRef}
                    url="/sitecraft.mp4"
                    playing={isPlaying}
                    muted={isMuted}
                    width="auto"
                    height="auto"
                    className="rounded-xl"
                    light={<img src="/banner.png" alt="Banner" className="w-auto h-full object-cover rounded-xl" />}
                    onClick={togglePlay}
                    onEnded={() => playerRef.current?.seekTo(0)}
                />
            </div>
        </motion.div>
    );
}
