import products from '../../products.json';
export async function handler(event,context){
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(products)
  };
}
