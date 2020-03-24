import http from '@/plugins/http';
import { GameJoinRequest, GameJoinResponse } from '@/types/http';

export default function (userName: string, channelName: string) {
  const params: GameJoinRequest = {
    userName,
    channelName,
  };

  return http.post<GameJoinResponse>('/game/join', params);
}
