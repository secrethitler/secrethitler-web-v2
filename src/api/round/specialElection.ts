import http from '@/plugins/http';
import { RoundSpecialElectionRequest, RoundSpecialElectionResponse } from '@/types/http';
import { UserID } from '@/types/game';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function (nextPresidentId: UserID) {
  const params: RoundSpecialElectionRequest = {
    nextPresidentId,
    ...mergeDefaultParams(),
  };

  return http.post<RoundSpecialElectionResponse>('/round/special-election', params);
}
