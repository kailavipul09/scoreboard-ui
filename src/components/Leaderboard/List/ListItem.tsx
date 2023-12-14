import Score from "./Score";
import { Constants } from "../../../utils/constants";
import { ListItemElement, ProfileHeader, ProfileImage, ProfileSpan, ProfileWrapper, ScoreBlock } from "../../../assets/styles/leaderboard";
import StreamerData from "../../../interfaces/streamers";

interface IStreamerData {
  row?: StreamerData;
  index: number;
}

const ListItem = ({ row, index }: IStreamerData) => {
  return (
    <ListItemElement data-key={row?.userID}>
      <ProfileWrapper>
        <ProfileImage>
          <ProfileHeader>{row?.displayName.charAt(0)}</ProfileHeader>
          <ProfileSpan
            className={
              index === 1
                ? Constants.red
                : index === 2
                ? Constants.brown
                : index === 3
                ? Constants.yellow
                : ""
            }
          >
            {index}
          </ProfileSpan>
        </ProfileImage>
        <span>{row?.displayName}</span>
      </ProfileWrapper>
      <ScoreBlock>
        <Score
          start={row?.lastScore ? row.lastScore : (row?.score || 0) - 1000 || 0}
          end={row?.score || 0}
        />{' '}
        <span>{Constants.points}</span>
      </ScoreBlock>
    </ListItemElement>
  );
};

export default ListItem;