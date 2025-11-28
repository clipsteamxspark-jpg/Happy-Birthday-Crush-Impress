"use client"

import { motion } from "framer-motion"

export default function OpeningPage({ setCurrentPage, setMusicPlaying, setShowMusicPlayer }) {
  const handleLetMeTalk = () => {
    setMusicPlaying(true)
    setShowMusicPlayer(true)
    setTimeout(() => {
      setCurrentPage("diary")
    }, 500)
  }
import MusicPlayer from "@/Audio/MusicPlayer"

export default function Home() {
const [currentPage, setCurrentPage] = useState("opening")
const [musicPlaying, setMusicPlaying] = useState(false)
const [showMusicPlayer, setShowMusicPlayer] = useState(false)
{/* Uncomment this if you want to add a background song */}
{showMusicPlayer && <MusicPlayer musicPlaying={musicPlaying} setMusicPlaying={setMusicPlaying} />}
            <CurrentComponent
            setCurrentPage={setCurrentPage}
            setMusicPlaying={setMusicPlaying}
            setShowMusicPlayer={setShowMusicPlayer}
            musicPlaying={musicPlaying}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
