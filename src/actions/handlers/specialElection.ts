import { SpecialElection } from '@/types/events';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default function (event: SpecialElection) {
  navigateTo(Route.GameSpecialElection);
}
