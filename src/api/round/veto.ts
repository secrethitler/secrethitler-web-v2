import http from '@/plugins/http';
import { RoundVetoRequest, RoundVetoResponse } from '@/types/http';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function (accepted: boolean) {
  const params: RoundVetoRequest = {
    accepted,
    ...mergeDefaultParams(),
  };

  return http.post<RoundVetoResponse>('/round/veto', params);
}
