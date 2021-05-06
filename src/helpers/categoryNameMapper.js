export const categoryNameMapper = (category) => {
  switch (category) {
    case 'PIZZA': return 'Pizza';
    case 'CANDY': return 'Doces';
    case 'CAFE': return 'Cafeteria';
    case 'BURGER': return 'Hamburguer';
    case 'HOTDOG': return 'Lanches';
    case 'RESTAURANT': return 'Restaurante';
    case 'PUB': return 'Bar/Pub';
    default: break;
  }
}
