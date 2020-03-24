import http from '@/plugins/http';
import { GameStartRequest, GameStartResponse } from '@/types/http';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function () {
  const params: GameStartRequest = {
    ...mergeDefaultParams(),
  };

  return http.post<GameStartResponse>('/game/start', params);
}
