const users = {
  4: {name: 'Samar'},
  5: {name: 'Rishab'}
}

export default function request(url){
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(() => 
      users[userID] 
        ? resolve(users[userID]) 
        : reject({
          error: `User with ${userID} not found.`,
          }),
    );
  });
}
