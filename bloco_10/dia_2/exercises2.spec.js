const { TestScheduler } = require("@jest/core");

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };
  
  // Exercício 2
describe('Teste assíncronos de usuários', () => {
  test('Verifica se usuário é encontrado', async () => {
    expect.assertions(1);
    const user = await getUserName(4);
    return expect(user).toEqual('Mark');
  })

  test('Verifica quando o usuário não é encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(6);
    } catch (error) {
        expect(error).toEqual({error: `User with 6 not found.`})
    }
  })
});

// describe('getUserName - promise', () => {
//   describe('when the user id exists', () => {
//     it('returns the user name', () => {
//       expect.assertions(1);
//       return getUserName(4).then(data => expect(data).toEqual('Mark'));
//     });
//   });

//   describe('when the user id does not exists', () => {
//     it('returns an error', () => {
//       expect.assertions(1);
//       return getUserName(2).catch(error =>
//         expect(error).toEqual({ error: 'User with 2 not found.' })
//       );
//     });
//   });
// });