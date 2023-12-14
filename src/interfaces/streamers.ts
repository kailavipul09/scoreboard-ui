export default interface StreamerData {
    userID: string;
    displayName: string;
    picture: string | null;
    score: number;
    lastIndex?: number| undefined;
    lastScore?: number| undefined;
  }
  