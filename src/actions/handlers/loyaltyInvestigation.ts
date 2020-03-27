import { LoyaltyInvestigation } from '@/types/events';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default function (event: LoyaltyInvestigation) {
  navigateTo(Route.GameInvestigate);
}
