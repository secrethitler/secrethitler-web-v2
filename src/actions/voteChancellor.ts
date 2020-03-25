import vote from '@/api/chancellor/vote';

export default async function voteChancellor(votedYes: boolean) {
  const { data } = await vote(votedYes);
}
