import { useEffect, useRef } from "react";
import { ScoreBlockHeader } from "../../../assets/styles/leaderboard";

interface IScore {
  start?: number;
  end?: number;
}

const Score = ({ start, end }: IScore) => {
  const streamerName = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let scoreStart = start ? start : 0;
    let scoreEnd = end ? end : 0;
    let range = scoreEnd - scoreStart;
    let step = Math.abs(Math.floor(1500 / range));

    const interval = setInterval(() => {
      let increment = scoreEnd > scoreStart ? 5 : -5;
      let current = scoreStart + increment;

      if (current === scoreEnd) {
        clearInterval(interval);
      }
      scoreStart = current;
      if (streamerName.current) {
        streamerName.current.innerText = current.toString();
      }
    }, step);

    return () => {
      clearInterval(interval);
    };
  }, [start, end]);

  return <ScoreBlockHeader ref={streamerName}>{start}</ScoreBlockHeader>;
};

export default Score;
