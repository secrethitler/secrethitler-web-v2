import http from '@/plugins/http';
import { ChancellorNominateRequest, ChancellorNominateResponse } from '@/types/http';
import { UserID } from '@/types/game';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function (chancellorId: UserID) {
  const params: ChancellorNominateRequest = {
    chancellorId,
    ...mergeDefaultParams(),
  };

  return http.post<ChancellorNominateResponse>('/chancellor/nominate', params);
}
