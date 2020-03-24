import http from '@/plugins/http';
import { PlayerInvestigateRequest, PlayerInvestigateResponse } from '@/types/http';
import { UserID } from '@/types/game';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function (investigatedUser: UserID) {
  const params: PlayerInvestigateRequest = {
    investigatedUser,
    ...mergeDefaultParams(),
  };

  return http.get<PlayerInvestigateResponse>(`/player/investigate/${investigatedUser}`, { params });
}
