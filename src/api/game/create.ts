import http from '@/plugins/http';
import { GameCreateRequest, GameCreateResponse } from '@/types/http';

export default function (userName: string) {
  const params: GameCreateRequest = {
    userName,
  };

  return http.post<GameCreateResponse>('/game/create', params);
}
