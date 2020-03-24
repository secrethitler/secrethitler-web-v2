import http from '@/plugins/http';
import { PlayerExecuteRequest, PlayerExecuteResponse } from '@/types/http';
import { UserID } from '@/types/game';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function (executedUserId: UserID) {
  const params: PlayerExecuteRequest = {
    executedUserId,
    ...mergeDefaultParams(),
  };

  return http.post<PlayerExecuteResponse>('/player/execute', params);
}
