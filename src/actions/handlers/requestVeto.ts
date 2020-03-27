import { RequestVeto } from '@/types/events';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default function requestVeto(event: RequestVeto) {
  navigateTo(Route.GameVetoRequested);
}
