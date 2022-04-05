// Parte 1

const verificaCampo = (campo1, campo2) => {
    if (campo1 === "" || campo2 === "") {
        throw new Error('Por favor, preencha os dois campos!')
    } else if (isNaN(campo1) || isNaN(campo2)) {
        throw new Error('Por favor, digite apenas números!')
    }
}

const sum = () => {
    try {
        const valor1 = document.querySelector('#value1').value
        const valor2 = document.querySelector('#value2').value
        const result = parseInt(valor1) + parseInt(valor2)
        verificaCampo(valor1, valor2)
        document.querySelector('#result').innerText = `Resultado: ${result}`
    } catch (error) {
        document.querySelector('#result').innerText = error.message;
    } finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }

}

window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}

// parte 2

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
        marguerita: {
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
    return (`Olá ${order.order.delivery.deliveryPerson} entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street} N°: ${order.address.number} AP: ${order.address.apartment}`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva'
    order.payment.total = 50
    const keys = Object.keys(order.order.pizza)
    console.log(keys[0])
    console.log(`Olá ${order.name}, o total do seu pedido de ${keys[0]}, ${keys[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00`)
  }
  
  orderModifier(order);