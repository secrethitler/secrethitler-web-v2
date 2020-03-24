import http from '@/plugins/http';
import { PolicyPresidentPickRequest, PolicyPresidentPickResponse } from '@/types/http';
import { Policy } from '@/types/game';
import mergeDefaultParams from '@/utils/mergeDefaultParams';

export default function (discardedPolicy: Policy) {
  const params: PolicyPresidentPickRequest = {
    discardedPolicy,
    ...mergeDefaultParams(),
  };

  return http.post<PolicyPresidentPickResponse>('/policy/president-pick', params);
}
