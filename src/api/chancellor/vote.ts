import http from '@/plugins/http';
import { ChancellorVoteRequest, ChancellorVoteResponse } from '@/types/http';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function (votedYes: boolean) {
  const params: ChancellorVoteRequest = {
    votedYes,
    ...mergeDefaultParams(),
  };

  return http.post<ChancellorVoteResponse>('/chancellor/vote', params);
}
