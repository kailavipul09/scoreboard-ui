import { createRef, useEffect, useState } from "react";
import { StreamersData } from "../../utils/streamersData";
import ListItem from "./List/ListItem";
import { useFlip } from "../../hooks/useFlip";
import { Wrapper, Container, ListElement } from "../../assets/styles/leaderboard";

const Leaderboard = () => {
  const [scoreBoardData, setScoreBoardData] = useState(StreamersData);
  let listRef = createRef<any>();
  useFlip(listRef);

  useEffect(() => {
    const updateData = () => {
      const updateRandomIndex = Math.ceil(Math.random() * 9);
      const updatedScoreBoard = scoreBoardData.map((el, index) => {
        const digit = Math.random() * 100000;
        const digitOther = Math.random() * 1000;
        if (index === updateRandomIndex) {
          return {
            ...el,
            lastndex: index,
            lastScore: el.score,
            score: Math.floor(el.score + digit)
          };
        } else if (index === updateRandomIndex-1) {
          return {
            ...el,
            lastIndex: index,
            lastScore: el.score,
            score: Math.floor(Math.abs(el.score - digit))
          };
        } else {
            return {
                ...el,
                lastIndex: index,
                lastScore: el.score,
                score: Math.floor(el.score + digitOther)
              };
        }
      });
      return updatedScoreBoard;
    };
    const interval = setInterval(() => {
      const sortData = updateData().sort((a, b) => b.score - a.score);
      setScoreBoardData(sortData);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [scoreBoardData]);

  return (
    <Wrapper>
      <Container>
        <ListElement>
          <div ref={listRef}>
            {scoreBoardData.map((el, index) => (
              <ListItem
                key={el.userID}
                index={index + 1}
                row={{ lastIndex: el.lastIndex?el.lastIndex:index, ...el, lastScore: el.lastScore?el.lastScore:el.score}}
              />
            ))}
          </div>
        </ListElement>
      </Container>
    </Wrapper>
  );
};

export default Leaderboard;
