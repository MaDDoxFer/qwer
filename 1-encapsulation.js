// BEGIN
export const getMutualFriends = (user1, user2) => {
  const mutualFriends = [];
  for (let i = 0; i < user1.getFriends().length; i++) {
    const friend1 = user1.getFriends()[i];
    for (let j = 0; j < user2.getFriends().length; j++) {
      const friend2 = user2.getFriends()[j];
      if (friend1.id === friend2.id) {
        mutualFriends.push(friend1);
        break;
      }
    }
  }
  return mutualFriends;
};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice();
  },
});