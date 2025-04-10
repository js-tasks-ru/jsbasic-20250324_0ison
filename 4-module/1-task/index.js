function makeFriendsList(friends) {
  const list = document.createElement('ul');

  friends.forEach(friend => {
    list.innerHTML += `<li>${friend.firstName} ${friend.lastName}</li>`;
  });

  return list;
}
