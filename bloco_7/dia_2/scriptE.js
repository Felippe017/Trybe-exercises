const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const delivery = order.order.delivery.deliveryPerson;  
  const customer = order['name'];
  const PhoneNumber = order['phoneNumber'];
  const address = 'address';
  const street = order[address].street;  
  const numberAP = order[address].number;  
  const apartment = order[address].apartment;  
  
  console.log(`Olá ${delivery}, entrega para: ${customer}, Telefone: ${PhoneNumber}, R. ${street}, Nº: ${numberAP}, AP: ${apartment}`);
  }

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const customer = order['name'] = 'Luiz Silva';
  const result = order.payment.total = 50;
  console.log(`Olá ${customer}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$${result},00.`);
}

orderModifier(order);